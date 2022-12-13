const { ShardingManager } = require("discord.js")

const config = require("./Src/Credentials/Config")

const manager = new ShardingManager('./bot.js', {token: config.botToken})

manager.on('shardCreate', shard => console.log(`Launched shard ${shard.id}`));

manager.spawn();