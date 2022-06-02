import { SlashCommand } from '@lib/commands';
import { MessageFlags } from 'detritus-client/lib/constants';
import { InteractionContext } from 'detritus-client/lib/interaction';

const quotes = [
  "Bye!",
  "Gotta dash~!",
  "Poof!",
  "I'm outta here.",
  "Can't catch me~!",
  "And away I go.",
  "Twinjitsu!",
  "Come one out!",
  "Hah! ...Phew...",
  "Make my escape.",
  "Looks kinda cozy in here... Nap time!",
  "Mission accomplished! Can I go back and sleep now?",
  "Ooh, what's in here? Maybe a growth serum?",
  "What was that escape method again...?",
  "I feel kinda woozy.",
  "Whew, so tired.",
  "Almost. Got. Away...",
  "Uh, sw-sweet dreams...",
  "My fault for being so lazy...",
  "Almost dodged that.",
  "I'm about to pass out over here.",
  "So sleepy.",
  "Can I go catch up on my sleep?",
  "Drat, you caught me.",
  "Sayu, Shuumatsuban, at your disposal! Whew, but if you don't need me right now, I'm gonna grab some sleep. Nope, no need to tuck me in — I need the extra room to grow into.",
  "*yawns* *snoring*",
  "Seems like I should've just stayed in bed today.",
  "Surely I should be due a growth spurt by now?",
  "Eek, let's find shelter, quick! Watering works on plants, but not people...",
  "Phew, this weather is wild! Best thing to do is dive under the covers where it's dark and snug and warm and nyam nyam nyam~ *sleeps*",
  "It's really easy to hide in weather like this. There's this ninjutsu technique called Cloak of Snow where you can pretty much make yourself invisible — all other people see when they look at you is the snowflakes dancing in the air. Wait, it's confidential though! Don't tell any of this to the shrine maiden...",
  "Loooove it when the weather's like this, just makes you wanna... *yawn* doze off for a while.",
  "A windy day is a good day for a getaway.",
  "I always know it's time to get some shut-eye when the wind's so strong that I can't open my eyes anyway.",
  "...Morning? Already? Okay, I'm just gonna snooze for, like, 10 more minutes... Please, just 10 minutes... No? Okay, 5 minutes then? *snores*",
  "Is it noon yet? Finally, I'm so ready for my nap.",
  "Recon confirms, no sign of the shrine maiden within a 3-mile radius. Moving to the next phase: sleepy time!",
  "At long last... bed time... G'night",
  "Yeah, I'm in the Shuumatsuban, but they only ever get me to do stuff like... *yawn* information gathering and stealing. So, y'know... it's not really a big deal if the work doesn't get done.",
  "So I don't do any important work at the Shuumatsuban, and anything that gets put off for long enough ends up getting done by someone who's more suited to it anyway. Sleep, on the other hand — that is of the utmost importance. Because I need to get enough sleep to make sure I get my growth spurt.",
  "Hey, will you do me a favor and let me know if you see the shrine maiden coming? I'm just gonna, um... rest my eyes for a moment.",
  "I'm not a pet, y'know! Hmm, but since it's you... Okay, you can pat my head and I promise not to bite your hand. Just a little, though! If you pat someone's head too much, it stunts their growth.",
  "My sword is crazy heavy, even with my ninjutsu training there's no way I could lift it without the help of my Vision. So yeah, having a Vision is a huge help for me.",
  "Sensei says I'll be the last ninja ever in our line. I guess it can't be helped, because this style of ninjutsu wouldn't be much help in a fight anyway — all I've been taught is how to escape and how to cover your tracks.",
  "Do you know the mujina? It looks similar to a tanuki, but it's way cuter. I'll take you to see one next time!",
  "Zzzz...",
  "Huh? You wanna know the name of my style of ninjutsu? Uhh... Y'know what, I can't think straight right now, I'm still half asleep here. Lemme snooze a while longer, maybe my mind'll be clearer when I wake up.",
  "Alright, fine... I'll tell you. But you'd better not laugh, or I'm never talking to you again. Uh so, my style of ninjutsu is called... um... Yoohoo Art.\nThe reason is supposedly that our style focuses on making fun of the enemy, but still... I mean... *sigh*",
  "Do you know how to climb trees? I'm an expert, I can teach you. There's this tree down at the shrine — it's the perfect place, you could just literally sleep there all day if you wanted and no one would ever find you... Uh, I just mean, it's a great place for a power nap. Next time you wanna take a nap, let me know, I'll take you there.",
  "It was actually sensei who gave me this outfit. They said it was modeled after the mujina, and it could help with escapes, or something... and then sensei said that I was all grown up and ready to go it alone, but that I should still be careful to protect myself... then they left me. Am I really ready to go it alone, at my height?\nUm... Hmm? Y—You'll keep my company? Really? Promise you won't leave me?",
  "When I put my hood on, I can snooze away to my heart's content without having to worry about the shrine maiden finding me. *sigh* I think it must be one of the best feelings in the whole world.",
  "For some reason, when people meet me for the first time, they always call me tanuki, or teddy-bear, or kitty-cat... But Sayu is just Sayu — and definitely not a tanuki.",
  "When is my growth spurt gonna come? Everyone my age practically twice my height, and I'm still... Ugh, enough, I need sleep, sleep is the answer. Good night!",
  "Recently someone told me that if you get annoyed too easily, that'll stunt your growth, too! ...Gah! I dunno what I can do about that...",
  "Favorite food? High-carb foods that give you instant energy, like rice balls. If you eat one the moment you wake up, it stops you feeling so groggy and bleary-eyed. Then, you can just relax and get straight back to sleep.",
  "Can't be picky about food when you've still got growing to do! ...That said, I haven't gained any height recently — maybe I'm not eating enough vegetables? But salad isn't filling enough and sometimes it can be really bitter... *sigh*",
  "Is it just me, or did I get a little taller!?",
  "Awesome, now I can slip away faster than ever. Hee-hee, they can't catch me now.",
  "Hey, thanks for going and gathering all those materials for me. I would've gone myself, but... I probably would've got about halfway before falling asleep.",
  "I think I'm finally ready to go it alone now, just like sensei said I should. And... maybe it's not such a big deal now if I can't grow any taller. Because what really matters... is that I have you to keep me company",
];

export default class Quote extends SlashCommand {
  name = 'quote';
  description = "sends a random one of Sayu's voicelines";

  async run(context: InteractionContext) {
    context.editOrRespond({
      flags: MessageFlags.EPHEMERAL,
      embed: {
        color: 0xfa9300,
        thumbnail: { url: 'https://cdn.discordapp.com/emojis/878180505122635777.gif?size=64' },
        description: quotes[Math.floor(Math.random() * quotes.length)],
      },
    })
  }
}