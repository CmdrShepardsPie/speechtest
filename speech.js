'use strict';

// Trigger loading the API
window.speechSynthesis;
let msg = new SpeechSynthesisUtterance("");
let voices = [];
let messagenumber = 0;
let voicecache = {};
let lastId = 0;


setTimeout(start, 10000);

function start() {
    console.log('');
    console.log('===randomizing voices===');
    console.log('');
    voicecache = {};
    // setInterval(() => {
    //     console.log('');
    //     console.log('===randomizing voices===');
    //     console.log('');
    //     voicecache = {};
    // }, 60000);

    // voices = window.speechSynthesis.getVoices().filter(f => !f.lang || /en-/.test(f.lang));
    msg.voice = null;
    msg.onend = next;
    next();
}

function getPerson(from) {
    // name, id
    let id = parseInt(from.id);
    if (voicecache[id] === undefined) {
        if (voices.length === 0) {
            voices = window.speechSynthesis.getVoices().filter(f => /en-/.test(f.lang));
            console.log('voices', voices);
        }
        let number = Math.floor(Math.random() * voices.length);
        let voice = voices.splice(number, 1)[0];
        voicecache[id] = voice; //voicenumber
    }
    return voicecache[id];
}

function next() {
    let message = response.data[messagenumber];
    if (!message) {
        return;
    }
    let id = parseInt(message.from.id);
    messagenumber++;
    msg.voice = getPerson(message.from);
    msg.text = '';
    if (lastId !== id) {
        lastId = id;
        console.log('');
        // console.log('switching voices:', msg.voice);
        msg.text = `${message.from.name.split(' ')[0]} says: `;
    }
    msg.text = `${msg.text}${message.message}`;
    console.log(msg.text);
    window.speechSynthesis.speak(msg);
}

let response = {
    "data": [
        {
            "created_time": "2017-02-06T01:28:00+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Oooooo scary",
            "id": "376954266005863_376954642672492"
        },
        {
            "created_time": "2017-02-06T01:28:34+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Meowww",
            "id": "376954266005863_376954782672478"
        },
        {
            "created_time": "2017-02-06T01:28:54+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Have you got a cold? You sound stuffy.",
            "id": "376954266005863_376954859339137"
        },
        {
            "created_time": "2017-02-06T01:29:32+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Poor sicky",
            "id": "376954266005863_376955009339122"
        },
        {
            "created_time": "2017-02-06T01:31:29+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Logic has no place here",
            "id": "376954266005863_376955366005753"
        },
        {
            "created_time": "2017-02-06T01:33:37+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Mint tea is my faaaavorite",
            "id": "376954266005863_376956012672355"
        },
        {
            "created_time": "2017-02-06T01:34:02+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "I believe in you",
            "id": "376954266005863_376956039339019"
        },
        {
            "created_time": "2017-02-06T01:35:57+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Oh nuuuuu",
            "id": "376954266005863_376956366005653"
        },
        {
            "created_time": "2017-02-06T01:42:48+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "You still have mint tea!",
            "id": "376954266005863_376960446005245"
        },
        {
            "created_time": "2017-02-06T01:43:24+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Don't go in there!",
            "id": "376954266005863_376960532671903"
        },
        {
            "created_time": "2017-02-06T01:43:27+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "It's a trap!~",
            "id": "376954266005863_376960549338568"
        },
        {
            "created_time": "2017-02-06T01:44:09+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Your footsteps are horribly loud. I prescribe softer shoes for survival.",
            "id": "376954266005863_376960706005219"
        },
        {
            "created_time": "2017-02-06T01:44:35+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "IT'S A TRAP.",
            "id": "376954266005863_376960766005213"
        },
        {
            "created_time": "2017-02-06T01:44:57+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "IT'S A RAP.",
            "id": "376954266005863_376960919338531"
        },
        {
            "created_time": "2017-02-06T01:46:07+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "You should just Overwatch. Then you can just aimbot those baddies.",
            "id": "376954266005863_376961142671842"
        },
        {
            "created_time": "2017-02-06T01:46:09+0000",
            "from": {
                "name": "Rya McShme",
                "id": "10152110215982120"
            },
            "message": "Don't overdose on health",
            "id": "376954266005863_376961149338508"
        },
        {
            "created_time": "2017-02-06T01:46:40+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Oh. God. He's become TOO healthy.",
            "id": "376954266005863_376961302671826"
        },
        {
            "created_time": "2017-02-06T01:46:51+0000",
            "from": {
                "name": "Rya McShme",
                "id": "10152110215982120"
            },
            "message": "Quick! We need the antidote!",
            "id": "376954266005863_376961329338490"
        },
        {
            "created_time": "2017-02-06T01:46:51+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Yeah do some soft shoe",
            "id": "376954266005863_376961332671823"
        },
        {
            "created_time": "2017-02-06T01:47:21+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I recommend bullets to the body to cure that healthyness. Quick Fix.",
            "id": "376954266005863_376961412671815"
        },
        {
            "created_time": "2017-02-06T01:47:51+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "That deer was freaky as fuck.",
            "id": "376954266005863_376961499338473"
        },
        {
            "created_time": "2017-02-06T01:48:15+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Actually. It is kinda cute.",
            "id": "376954266005863_376961556005134"
        },
        {
            "created_time": "2017-02-06T01:48:20+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "LEAVE BAE ALONE!",
            "id": "376954266005863_376961572671799"
        },
        {
            "created_time": "2017-02-06T01:50:10+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "This game has the least amount of zombies of any RE game... ever.",
            "id": "376954266005863_376962959338327"
        },
        {
            "created_time": "2017-02-06T01:50:29+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "The toilet is sending you morse code.",
            "id": "376954266005863_376963102671646"
        },
        {
            "created_time": "2017-02-06T01:51:06+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Fuck that bitch",
            "id": "376954266005863_376963202671636"
        },
        {
            "created_time": "2017-02-06T01:51:52+0000",
            "from": {
                "name": "Rya McShme",
                "id": "10152110215982120"
            },
            "message": "My kid says you sound like Markiplier",
            "id": "376954266005863_376963316004958"
        },
        {
            "created_time": "2017-02-06T01:52:23+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Cause that's how doors work.",
            "id": "376954266005863_376963462671610"
        },
        {
            "created_time": "2017-02-06T01:52:35+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Can't you just reach your hand through the GIANT HOLES in the gate?",
            "id": "376954266005863_376963492671607"
        },
        {
            "created_time": "2017-02-06T01:53:18+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "That's what he said",
            "id": "376954266005863_376963602671596"
        },
        {
            "created_time": "2017-02-06T01:54:07+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "The delay on you receiving my messages is crazy long.",
            "id": "376954266005863_376963736004916"
        },
        {
            "created_time": "2017-02-06T01:57:01+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Don't fuck that bitch. She is infected. That's how you get Zombie Gonorrhoea.",
            "id": "376954266005863_376964709338152"
        },
        {
            "created_time": "2017-02-06T02:08:21+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Stop being afraid of a girl and go punch her in the throat",
            "id": "376954266005863_376967339337889"
        },
        {
            "created_time": "2017-02-06T02:10:18+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Seriously. Every time a child has threatened me. I just ran them over. Never got up again. I don't see the big deal.",
            "id": "376954266005863_376967916004498"
        },
        {
            "created_time": "2017-02-06T02:12:49+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Cause we don't have anything important to say.",
            "id": "376954266005863_376969009337722"
        },
        {
            "created_time": "2017-02-06T02:14:35+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Sounds like your normal life",
            "id": "376954266005863_376969376004352"
        },
        {
            "created_time": "2017-02-06T02:14:52+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Oh god. You found a bra. It's like an AA cup too.",
            "id": "376954266005863_376969409337682"
        },
        {
            "created_time": "2017-02-06T02:14:56+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Why even bother at that point?",
            "id": "376954266005863_376969419337681"
        },
        {
            "created_time": "2017-02-06T02:15:24+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I don't even think that bra would fit my boobs.",
            "id": "376954266005863_376969486004341"
        },
        {
            "created_time": "2017-02-06T02:15:39+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Moobs",
            "id": "376954266005863_376969516004338"
        },
        {
            "created_time": "2017-02-06T02:16:26+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I wear a B cup bro.",
            "id": "376954266005863_376969716004318"
        },
        {
            "created_time": "2017-02-06T02:18:37+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Me: I should get some work done. Inner me: Watch Chris play a game where LITERALLY nothing happens.",
            "id": "376954266005863_376970116004278"
        },
        {
            "created_time": "2017-02-06T02:19:04+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Hey he found a bra.",
            "id": "376954266005863_376970202670936"
        },
        {
            "created_time": "2017-02-06T02:19:47+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Fair point. That was exciting.",
            "id": "376954266005863_376970329337590"
        },
        {
            "created_time": "2017-02-06T02:20:16+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "That is true. I do nothing of value.",
            "id": "376954266005863_376970406004249"
        },
        {
            "created_time": "2017-02-06T02:20:29+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Eric is making me laugh. He's my job now.",
            "id": "376954266005863_376970439337579"
        },
        {
            "created_time": "2017-02-06T02:20:50+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "I paused my game to watch this.",
            "id": "376954266005863_376970542670902"
        },
        {
            "created_time": "2017-02-06T02:21:01+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I paused my life to watch this.",
            "id": "376954266005863_376970656004224"
        },
        {
            "created_time": "2017-02-06T02:21:09+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Of course my life isn't interesting... so... yea.",
            "id": "376954266005863_376970696004220"
        },
        {
            "created_time": "2017-02-06T02:21:10+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Oh noooo a zombie fly",
            "id": "376954266005863_376970702670886"
        },
        {
            "created_time": "2017-02-06T02:21:42+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Actually. A zombie fly is a bit terrifying.",
            "id": "376954266005863_376970989337524"
        },
        {
            "created_time": "2017-02-06T02:21:52+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "KILL IT WITH FIRE.",
            "id": "376954266005863_376971086004181"
        },
        {
            "created_time": "2017-02-06T02:22:07+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Or stab it like a boss... whatever.",
            "id": "376954266005863_376971192670837"
        },
        {
            "created_time": "2017-02-06T02:22:22+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Whatevs",
            "id": "376954266005863_376971289337494"
        },
        {
            "created_time": "2017-02-06T02:22:45+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "You should try that in real life",
            "id": "376954266005863_376971362670820"
        },
        {
            "created_time": "2017-02-06T02:22:51+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "You make orgasm noises why you swing that knife. I'm a bit turned on.",
            "id": "376954266005863_376971386004151"
        },
        {
            "created_time": "2017-02-06T02:22:57+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "*when",
            "id": "376954266005863_376971402670816"
        },
        {
            "created_time": "2017-02-06T02:23:23+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "It was so funny it broke chat",
            "id": "376954266005863_376971452670811"
        },
        {
            "created_time": "2017-02-06T02:23:59+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I thought it was good. But, I didn't even get a chuckle from Chris... I'm undervalued. I'm changing jobs.",
            "id": "376954266005863_376971552670801"
        },
        {
            "created_time": "2017-02-06T02:24:28+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Where's that damn flamethrower",
            "id": "376954266005863_376971652670791"
        },
        {
            "created_time": "2017-02-06T02:24:41+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I KNOW. Let's torch some shit.",
            "id": "376954266005863_376971692670787"
        },
        {
            "created_time": "2017-02-06T02:24:51+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Hollie. It's like you are in my head.",
            "id": "376954266005863_376971712670785"
        },
        {
            "created_time": "2017-02-06T02:25:06+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "We need fire and Chris is killing zombie flies with his friggin nail file",
            "id": "376954266005863_376971752670781"
        },
        {
            "created_time": "2017-02-06T02:25:33+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "You are a man. Men don't need maps.",
            "id": "376954266005863_376971799337443"
        },
        {
            "created_time": "2017-02-06T02:25:45+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "The thingy",
            "id": "376954266005863_376971809337442"
        },
        {
            "created_time": "2017-02-06T02:25:55+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "He. Is. A. Man.",
            "id": "376954266005863_376971839337439"
        },
        {
            "created_time": "2017-02-06T02:26:00+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "With a missing thingy",
            "id": "376954266005863_376971859337437"
        },
        {
            "created_time": "2017-02-06T02:26:04+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "He's a real boy.",
            "id": "376954266005863_376971869337436"
        },
        {
            "created_time": "2017-02-06T02:26:09+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "FIRE!!!!",
            "id": "376954266005863_376971879337435"
        },
        {
            "created_time": "2017-02-06T02:26:27+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "FIIIYYYAAAHHHH",
            "id": "376954266005863_376971936004096"
        },
        {
            "created_time": "2017-02-06T02:27:21+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Stop stabbing your house. This is why we can't have nice things.",
            "id": "376954266005863_376972042670752"
        },
        {
            "created_time": "2017-02-06T02:27:52+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Your father and I worked hard to provide for you and all you do is break shit",
            "id": "376954266005863_376972156004074"
        },
        {
            "created_time": "2017-02-06T02:28:00+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "lol",
            "id": "376954266005863_376972189337404"
        },
        {
            "created_time": "2017-02-06T02:28:35+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I spent MONTHS saving up for that bobble head. And all you do it stab it like a psycho.",
            "id": "376954266005863_376972249337398"
        },
        {
            "created_time": "2017-02-06T02:28:45+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Your girlfriend sounds hot",
            "id": "376954266005863_376972319337391"
        },
        {
            "created_time": "2017-02-06T02:29:15+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "She even knows the time. I gotta get me one of those.",
            "id": "376954266005863_376972406004049"
        },
        {
            "created_time": "2017-02-06T02:29:31+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "I wonder if she's single",
            "id": "376954266005863_376972472670709"
        },
        {
            "created_time": "2017-02-06T02:30:14+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "No woman like that stays single for long.",
            "id": "376954266005863_376972559337367"
        },
        {
            "created_time": "2017-02-06T02:30:15+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Christopher quit playing with the flies and WD40 those doors!",
            "id": "376954266005863_376972566004033"
        },
        {
            "created_time": "2017-02-06T02:30:19+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "OH GOD THE MOANING.",
            "id": "376954266005863_376972596004030"
        },
        {
            "created_time": "2017-02-06T02:30:33+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "So... turned... on... right... now...",
            "id": "376954266005863_376972636004026"
        },
        {
            "created_time": "2017-02-06T02:31:13+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Also, he opens those doors like a gorilla. Try turning the handle instead of kicking all them open. You're like the Koolaid man in a horror movie.",
            "id": "376954266005863_376972732670683"
        },
        {
            "created_time": "2017-02-06T02:31:25+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Hahaha",
            "id": "376954266005863_376972762670680"
        },
        {
            "created_time": "2017-02-06T02:31:38+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Please start saying \"oh yeah!\" When you open doors",
            "id": "376954266005863_376972786004011"
        },
        {
            "created_time": "2017-02-06T02:31:47+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Your audience demands it",
            "id": "376954266005863_376972832670673"
        },
        {
            "created_time": "2017-02-06T02:31:53+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "YES YES YES",
            "id": "376954266005863_376972839337339"
        },
        {
            "created_time": "2017-02-06T02:31:56+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "CHRIS PAY ATTENTION",
            "id": "376954266005863_376972866004003"
        },
        {
            "created_time": "2017-02-06T02:32:23+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Fuuuuuck.... yesssss",
            "id": "376954266005863_376972962670660"
        },
        {
            "created_time": "2017-02-06T02:32:29+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "With more gusto.",
            "id": "376954266005863_376972996003990"
        },
        {
            "created_time": "2017-02-06T02:32:54+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "The fly gods are displeased.",
            "id": "376954266005863_376973062670650"
        },
        {
            "created_time": "2017-02-06T02:33:47+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "FINALLY",
            "id": "376954266005863_376973396003950"
        },
        {
            "created_time": "2017-02-06T02:33:51+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I've been waiting my whole life for this moment.",
            "id": "376954266005863_376973432670613"
        },
        {
            "created_time": "2017-02-06T02:34:02+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "That was much better.",
            "id": "376954266005863_376973526003937"
        },
        {
            "created_time": "2017-02-06T02:34:02+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Omg this is like porn",
            "id": "376954266005863_376973532670603"
        },
        {
            "created_time": "2017-02-06T02:34:17+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "FIRE PORN",
            "id": "376954266005863_376973699337253"
        },
        {
            "created_time": "2017-02-06T02:34:19+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Unghhhhehhh",
            "id": "376954266005863_376973716003918"
        },
        {
            "created_time": "2017-02-06T02:34:32+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "... I just realised we might be sick in the head.",
            "id": "376954266005863_376973772670579"
        },
        {
            "created_time": "2017-02-06T02:34:42+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Stop running inside you pussy",
            "id": "376954266005863_376973816003908"
        },
        {
            "created_time": "2017-02-06T02:35:27+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "\"I'm out of fluid but I can still crawl inside\" uhhhh",
            "id": "376954266005863_376973926003897"
        },
        {
            "created_time": "2017-02-06T02:35:29+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Fight the insects like a mammal. You are the product of millions of years of evolution. Act like it.",
            "id": "376954266005863_376973939337229"
        },
        {
            "created_time": "2017-02-06T02:37:05+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Pothead",
            "id": "376954266005863_376974276003862"
        },
        {
            "created_time": "2017-02-06T02:37:44+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I wrote one line of code.",
            "id": "376954266005863_376974342670522"
        },
        {
            "created_time": "2017-02-06T02:37:49+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "That's good enough for the day, right?",
            "id": "376954266005863_376974356003854"
        },
        {
            "created_time": "2017-02-06T02:38:09+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Spraying into the sky. That's how I claim territory.",
            "id": "376954266005863_376974392670517"
        },
        {
            "created_time": "2017-02-06T02:38:59+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Good job!!!",
            "id": "376954266005863_376974652670491"
        },
        {
            "created_time": "2017-02-06T02:39:30+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "It's full of Schmitt Must, TM.",
            "id": "376954266005863_376974746003815"
        },
        {
            "created_time": "2017-02-06T02:39:49+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I don't actually know how to make the trademark symbol.",
            "id": "376954266005863_376974772670479"
        },
        {
            "created_time": "2017-02-06T02:40:52+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Shit cock. She must like the anal.",
            "id": "376954266005863_376975869337036"
        },
        {
            "created_time": "2017-02-06T02:41:54+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "If dark souls taught me anything, it's that doing a good job is overrated. Winning is all that matters.",
            "id": "376954266005863_376976272670329"
        },
        {
            "created_time": "2017-02-06T02:45:22+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "See herb led to crank",
            "id": "376954266005863_376977232670233"
        },
        {
            "created_time": "2017-02-06T02:45:56+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Hah. Herb is a gateway item.",
            "id": "376954266005863_376977499336873"
        },
        {
            "created_time": "2017-02-06T02:47:19+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "That went to hell fast",
            "id": "376954266005863_376977859336837"
        },
        {
            "created_time": "2017-02-06T02:48:20+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Not everything is about you.",
            "id": "376954266005863_376978056003484"
        },
        {
            "created_time": "2017-02-06T02:48:22+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Jesus.",
            "id": "376954266005863_376978069336816"
        },
        {
            "created_time": "2017-02-06T02:48:36+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "So anyway, about Chris.",
            "id": "376954266005863_376978112670145"
        },
        {
            "created_time": "2017-02-06T02:49:16+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "Seriously.",
            "id": "376954266005863_376978186003471"
        },
        {
            "created_time": "2017-02-06T02:49:23+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "He's not reading",
            "id": "376954266005863_376978209336802"
        },
        {
            "created_time": "2017-02-06T02:49:33+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "He's got flies and a crazy gf to deal with",
            "id": "376954266005863_376978236003466"
        },
        {
            "created_time": "2017-02-06T02:49:47+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "True. That's a lot of shit on his plate.",
            "id": "376954266005863_376978299336793"
        },
        {
            "created_time": "2017-02-06T02:50:14+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "I wish he still had a working flame thrower.",
            "id": "376954266005863_376978399336783"
        },
        {
            "created_time": "2017-02-06T02:50:23+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "That would make this game so much better",
            "id": "376954266005863_376978439336779"
        },
        {
            "created_time": "2017-02-06T02:50:41+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I know right",
            "id": "376954266005863_376978469336776"
        },
        {
            "created_time": "2017-02-06T02:50:46+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "It's like taking away the BEST thing.",
            "id": "376954266005863_376978509336772"
        },
        {
            "created_time": "2017-02-06T02:51:01+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Here is chocolate cake, but I took away the sugar in the chocolate.",
            "id": "376954266005863_376978599336763"
        },
        {
            "created_time": "2017-02-06T02:51:04+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "FUCK YOU",
            "id": "376954266005863_376978616003428"
        },
        {
            "created_time": "2017-02-06T02:51:05+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "NO BREAK",
            "id": "376954266005863_376978626003427"
        },
        {
            "created_time": "2017-02-06T02:51:16+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "...",
            "id": "376954266005863_376978689336754"
        },
        {
            "created_time": "2017-02-06T02:51:23+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "What do I do with my life now.",
            "id": "376954266005863_376978699336753"
        },
        {
            "created_time": "2017-02-06T02:51:23+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "We've been abandoned",
            "id": "376954266005863_376978702670086"
        },
        {
            "created_time": "2017-02-06T02:51:35+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Oh god.",
            "id": "376954266005863_376978779336745"
        },
        {
            "created_time": "2017-02-06T02:51:38+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I'm so alone.",
            "id": "376954266005863_376978796003410"
        },
        {
            "created_time": "2017-02-06T02:52:21+0000",
            "from": {
                "name": "Hollie Madsen",
                "id": "10152518436445049"
            },
            "message": "I'm here!!! I don't even have code to write",
            "id": "376954266005863_376978922670064"
        },
        {
            "created_time": "2017-02-06T03:03:36+0000",
            "from": {
                "name": "Christopher William Simpson",
                "id": "168148326886459"
            },
            "message": "I need to figure out how to get live chat to talk to me or something.",
            "id": "376954266005863_376981316003158"
        },
        {
            "created_time": "2017-02-06T03:04:22+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "You don't need to hear me.",
            "id": "376954266005863_376981479336475"
        },
        {
            "created_time": "2017-02-06T03:04:26+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "It's a waste of time",
            "id": "376954266005863_376981496003140"
        },
        {
            "created_time": "2017-02-06T03:06:26+0000",
            "from": {
                "name": "Christopher William Simpson",
                "id": "168148326886459"
            },
            "message": "Don't tell me how to waste my time! I'm only going to throw it away anyway.",
            "id": "376954266005863_376982229336400"
        },
        {
            "created_time": "2017-02-06T03:06:53+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I'll tell you! You don't gotta listen... but I'LL TELL YOU DAMNIT.",
            "id": "376954266005863_376982369336386"
        },
        {
            "created_time": "2017-02-06T03:08:33+0000",
            "from": {
                "name": "Christopher William Simpson",
                "id": "168148326886459"
            },
            "message": "I'm trying to listen, that's why I'm looking for text to speech!",
            "id": "376954266005863_376982676003022"
        },
        {
            "created_time": "2017-02-06T03:08:52+0000",
            "from": {
                "name": "Christopher William Simpson",
                "id": "168148326886459"
            },
            "message": "I'm done for the night. Need to start calming down enough to go to bed.",
            "id": "376954266005863_376982716003018"
        },
        {
            "created_time": "2017-02-06T03:09:02+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "Okay",
            "id": "376954266005863_376982742669682"
        },
        {
            "created_time": "2017-02-06T03:09:09+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "I should probably work,.",
            "id": "376954266005863_376982766003013"
        },
        {
            "created_time": "2017-02-06T03:09:15+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "HAHAHAHAHA. That's funny.",
            "id": "376954266005863_376982782669678"
        },
        {
            "created_time": "2017-02-06T03:41:24+0000",
            "from": {
                "name": "Christopher William Simpson",
                "id": "168148326886459"
            },
            "message": "Thanks for watching, you guys were hilarious.",
            "id": "376954266005863_376989996002290"
        },
        {
            "created_time": "2017-02-06T03:41:55+0000",
            "from": {
                "name": "Eric Schmitt",
                "id": "10100119684134561"
            },
            "message": "That's how we roll.",
            "id": "376954266005863_376990069335616"
        }
    ],
    "paging": {
        "cursors": {
            "before": "WTI5dGJXVnVkRjlqZAFhKemIzSTZANemMyT1RVME5qUXlOamN5TkRreU9qRTBPRFl6TkRRME9EQT0ZD",
            "after": "WTI5dGJXVnVkRjlqZAFhKemIzSTZANemMyT1Rrd01EWTVNek0xTmpFMk9qRTBPRFl6TlRJMU1UVT0ZD"
        }
    }
};

let id = response.data.filter(f => /morse/.test(f.message))[0];
console.log(response.data.indexOf(id));