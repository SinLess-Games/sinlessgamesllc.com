const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (DiscordClient, message, Command) => {
    if (!Command.onlyGuilds) return true;
    if (!Array.isArray(Command.onlyGuilds)) {
        console.log(bold.yellow(`[ERROR] Invalid input detected in AllClientPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    if (!message.guild) {
        console.log(bold.blue(`[WARN] Guild object not found in OnlyChannels option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    let GuildNames = []

    if (Command.onlyGuilds.some(Id => Id == message.guild.id)) return true;
    else {
        Command.onlyGuilds.forEach(Id => {
            GuildNames.push(DiscordClient.guilds.cache.get(Id).name)
        })

        if (Command.returnErrors == false || Command.returnOnlyGuildsError == false) return false;
        else {
            const errorEmbed = new EmbedBuilder()
                .setColor('#FF0000')
                .setAuthor({
                    name: message.member.user.tag,
                    iconURL: message.member.user.displayAvatarURL({
                        dynamic: true
                    })
                })
                .setTimestamp()
                .setDescription(`This command can only be run in these guilds: \n${GuildNames.map(Name => `\`${Name}\``).join(", ")}`);

            message.reply({
                embeds: [errorEmbed],
                allowedMentions: {
                    repliedUser: false
                }
            })
            return false;
        }
    }
}