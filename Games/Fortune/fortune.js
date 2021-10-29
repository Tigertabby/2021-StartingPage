const answerArray = [
"Why do you ask? You know it deep down inside.",
"Better to rely on your secret alternative plan.",
"Sometimes it is better not to approach the goal too directly.",
"If you are not even honest with yourself on this point, how can you expect an answer from me?",

"Tomorrow the sun will rise again and then you will think very differently about it.",

"Think of Zarathustra's words: 'Man is a rope, tied between animal and superman - a rope over an abyss.'",

"Even if there are still many hurdles in the way, the light at the end of the tunnel is already visible.",

"Do not forget what Zarathustra said: 'Thoughts that come with pigeon feet guide the world.'",

"When you think about your question, is this really about important things in your life?",

"Remember: 'Remorse teach you to bite.' - Zarathustra already knew that.",

"It is important - and in this respect I am quoting Zarathustra - 'To be prickly against the small, I think a wisdom for hedgehogs.'",

"Do you remember Zarathustra's words? 'Nothing is true, everything is allowed, I said to myself.'",

"Why this question? 'Am I striving for happiness? I strive for my work!' asked already Zarathustra.",

"This is an interesting question. I want to answer it with Zarathustra as follows: 'You still have to have chaos in you to be able to give birth to a dancing star.'",

"Let's be honest: 'Those who know don't speak; those who speak do not know' -  Lao Tzu already knew that.",

"You worry too much. Much comes naturally in life.",

"Can you remember Lao Tzu: 'What you want to compress, you must first let it expand properly. What you want to weaken, you have to let it become really strong.' ",

"Your question is well and good. But more important, as Lao Tzu already knew, are the treasures in us. 'I have three treasures that I guard and cherish. One is love, the second is frugality, the third is humility.' ",

"Do you really wanna hear the truth? Lao Tzu already warned: 'True words are not pleasant, pleasant words are not true.' You know what I mean.",

"Very interesting question. You should ponder Laotse's saying, 'The universe is perfect. It can't be improved. Whoever wants to change it spoils it. Whoever wants to own it loses it.' ",

"Of course you are right. But Lao Tzu's sentence also applies: 'If goodness is to be considered good, it becomes bad.'",

"It's right. Lao Tzu also knew this: 'Whoever defeats others has strength. He who defeats himself is strong.'So it would be wise for you to decide with this in mind.",

"Your question is about the crux of the matter. Lao Tzu put it in these words: 'Give a starving person a fish and he will be satisfied once, teach him to fish, and he will never go hungry again.'",

/* */

"Turn your question around. That opens up a new perspective for you.",

"How can you ask for an answer when you are not even ready to organize your thoughts yourself?",

"'He who knows does not speak; he who speaks does not know.', Laotse already knew how to say.",

"Don't forget Laotse's words: 'The mark of a moderate man is freedom from his own ideas.'",

"How many times have you asked yourself this question? I think it hasn't been answered yet because it's not the right question. Think and find the right question.",

];



const message = document.querySelector(".message");
const question = document.querySelector("textarea");
const button = document.querySelector("input");


button.addEventListener("click",function(){
    let res = Math.floor(Math.random()*answerArray.length);
    message.innerText = answerArray[res];
    question.value = "";
 })
