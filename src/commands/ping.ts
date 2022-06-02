import { InteractionContext } from 'detritus-client/lib/interaction';
import { SlashCommand } from '../lib/commands';
import makeReply from '@lib/reply';

export default class Ping extends SlashCommand {
  name = 'ping';
  description = 'pong!';

  async run(context: InteractionContext) {
    const reply = makeReply(context);
    const ping = await context.client.ping();
    
    return reply(
`\`\`\`arm
Gateway: ${ping.gateway}ms
REST:    ${ping.rest}ms
\`\`\``
    );
  }
}