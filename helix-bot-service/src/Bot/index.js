const { Client } = require("discord.js")

const config = require("../Config/config.json")
const settings = require("../Config/settings.json")

const client = new Client({
    intents: [7796],
    shards: 1,
})



client.login(config.Token)

exports.client = client
