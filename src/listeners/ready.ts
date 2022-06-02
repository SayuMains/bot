import { BaseListener } from '@lib/listeners';
import { GatewayClientEvents, ShardClient } from 'detritus-client';
import { ClientEvents } from 'detritus-client/lib/constants';

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

export default class Ready extends BaseListener {
  event = ClientEvents.GATEWAY_READY;
  repeat = true;
  
  async run(_payload: GatewayClientEvents.GatewayReady, client: ShardClient) {
    const ping = await client.ping();
    console.log(
`Gateway ping  : ${ping.gateway}ms
REST ping     : ${ping.rest}ms
${quotes[Math.floor(Math.random() * quotes.length)]}`
    );    
  }
}