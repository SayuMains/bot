import { BaseListener } from '@lib/listeners';
import { GatewayClientEvents, ShardClient } from 'detritus-client';
import { ClientEvents } from 'detritus-client/lib/constants';

const CHANNEL = '822477925638996018';

const quotes = [
  'Bye!',
  'Gotta dash~!',
  'Poof!',
  'I\'m outta here.',
  'Can\'t catch me~!',
  'And away I go.',
  'Twinjitsu!',
  'Come on out!',
  'Hah! ...Phew...',
  'Make my escape.',
  'Looks kinda cozy in here... Nap time!',
  'Mission accomplished! Can I go back and sleep now?',
  'Ooh, what\'s in here? Maybe a growth serum?',
  'What was that escape method again...?',
  'I feel kinda woozy.',
  'Whew, so tired.',
  'Almost. Got. Away...',
  'Uh, sw-sweet dreams...',
  'My fault for being so lazy...',
  'Almost dodged that.',
  'I\'m about to pass out over here.',
  'So sleepy.',
  'Can I go catch up on my sleep?',
  'Drat, you caught me.',
  '*yawns* *snoring*',
  'Seems like I should\'ve just stayed in bed today.',
  'Surely I should be due a growth spurt by now?',
  'A windy day is a good day for a getaway.',
  'Is it noon yet? Finally, I\'m so ready for my nap.',
  'At long last... bed time... G\'night',
  'Zzzz...',
  'Is it just me, or did I get a little taller!?',
];

export default class GuildMemberAdd extends BaseListener {
  event = ClientEvents.GUILD_MEMBER_ADD;
  repeat = true;
  
  async run(payload: GatewayClientEvents.GuildMemberAdd, client: ShardClient) {
    const channel = client.channels.get(CHANNEL);
    if (!channel) return;

    return channel.createMessage({
      embed: {
        color: 0xfa9300,
        description: `**Welcome to Sayu Mains, ${payload.member.mention}!**\nThis server might by just as sleepy as Sayu, but is also just as cute when finally awake!`,
        footer: {
          iconUrl: 'https://cdn.discordapp.com/emojis/878180505122635777.gif?size=64',
          text: quotes[Math.floor(Math.random() * quotes.length)],
        },
      },
    });
  }
}