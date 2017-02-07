console.log('speech');
$(document).ready(() => {
    'use strict';
    console.log('ready');
    window.speechSynthesis;
    if (Notification.permission !== 'denied') {
        Notification.requestPermission();
    }

    let voicecache = {};
    let voices = [];
    let synth = new SpeechSynthesisUtterance('');
    let lastId = null;
    let speechTimeout = null;
    let lastTime = null;
    let lastNotification;

    function login() {
        console.log('login start');
        return new Promise((resolve) => {
            FB.login((resp) => { console.log('login end', resp); resolve(resp); }, {scope: 'user_videos,user_posts'})
        });
    }

    function getVideos() {
        console.log('getVideos start');
        return new Promise((resolve) => {
            FB.api('/me/live_videos', 'get', {type: 'uploaded'}, (resp) => { console.log('getVideos end', resp); resolve(resp); });
        });
    }

    function getComments(video, before) {
        console.log('getComments start');
        return new Promise((resolve) => {
            setTimeout(() => {
                let params = {filter: 'stream', live_filter: 'no_filter', order: 'reverse_chronological', limit: 1000};
                if (before) {
                    params.before = before;
                }
                FB.api(`/${video.id}/comments`, 'get', params, (resp) => { console.log('getComments end', resp); resolve(resp); });
            }, 1000);
        });
    }

    function readComments(comments) {
        clearTimeout(speechTimeout);
        setTimeout(() => {
            // console.log('readComments', comments);
            let comment = comments.pop();
            let person = getPerson(comment.from);
            synth.text = '';
            if (person.timeDiff > 15000) {
                synth.text = `${comment.from.name.split(' ').shift()} says: `;
            }
            lastId = comment.from.id;
            synth.text = synth.text + comment.message;
            synth.voice = person.voice;
            clearTimeout(speechTimeout);
            let time = Date.parse(comment.created_time);
            let wait = lastTime !== null ? time - lastTime : 0;
            lastTime = time;
            console.log('waiting', wait);
            setTimeout(() => {
                speechTimeout = setTimeout(() => { console.log('timeout', window.speechSynthesis.speaking); window.speechSynthesis.cancel(); }, 10000);
                console.log(synth.text);
                if (Notification.permission === 'granted') {
                    lastNotification = new Notification(`${comment.from.name}: ${comment.message}`);
                }
                window.speechSynthesis.speak(synth);
            }, wait / 10);
        });
    }


    function getPerson(from) {
        // console.log('getPerson', from);
        // name, id
        let id = from.id;
        if (voicecache[id] === undefined) {
            if (voices.length === 0) {
                voices = window.speechSynthesis.getVoices().filter(f => /en-/.test(f.lang));
                // console.log('voices', voices);
            }
            let number = Math.floor(Math.random() * voices.length);
            let voice = voices.splice(number, 1)[0];
            voicecache[id] = {voice: voice}; //voicenumber
        }
        voicecache[id].lastTime = voicecache[id].nowTime;
        voicecache[id].nowTime = Date.now();
        voicecache[id].timeDiff = voicecache[id].nowTime - (voicecache[id].lastTime || 0);
        return voicecache[id];
    }

    function pollForComments(video, before) {
        return new Promise((resolve) => {
            getMoreComments(resolve, video, before);
        });
    }

    function getMoreComments(resolve, video, before) {
        setTimeout(() => {
            getComments(video, before)
                .then((resp) => {
                    if (resp.data.length) {
                        resolve(resp);
                    } else {
                        getMoreComments(resolve, video, before);
                    }
                });
        });
    }

    login()
        .then(getVideos)
        .then((resp) => {
            return resp.data[0];
        })
        .then((video) => {
            pollForComments(video)
                .then((resp) => {
                    let comments = resp.data;
                    // console.log('got comments', comments);
                    let next = (e) => {
                        console.log('end', e);
                        lastTime = lastTime + e.elapsedTime;
                        clearTimeout(speechTimeout);
                        window.speechSynthesis.cancel();
                        if (lastNotification) {
                            lastNotification.close();
                        }
                        if (comments.length) {
                            readComments(comments);
                        } else {
                            pollForComments(video, resp.paging.cursors.before)
                                .then((resp) => {
                                    comments = resp.data;
                                    // console.log('got comments', comments);
                                    readComments(comments);
                                });
                        }
                    };
                    synth.onend = next;
                    synth.onerror = (e) => {
                        console.error('error', e);
                    };

                    readComments(comments);
                })
        });
});
