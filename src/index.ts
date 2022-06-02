import { InteractionCommandClient, ShardClient } from 'detritus-client';
import { GatewayIntents } from 'detritus-client-socket/lib/constants';
import * as env from '@env';
import { loadListeners } from '@lib/listeners';

(async () => {
  const shard = new ShardClient(env.TOKEN, {
    gateway: {
      intents: [GatewayIntents.GUILDS, GatewayIntents.GUILD_MEMBERS],
    }
  });

  await loadListeners(shard, __dirname, 'listeners');
  
  await shard.run();

  const client = new InteractionCommandClient(shard);
  await client.addMultipleIn('commands');
  await client.run();
})();