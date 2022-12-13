const { bold } = require("chalk");
const { EmbedBuilder } = require("discord.js");
module.exports = (message, Command, InteractionType) => {
    if (!Command.anyUserPermissions) return true;
    if (!Array.isArray(Command.anyUserPermissions)) {
        console.log(bold.yellow(`[ERROR] Invalid input detected in AnyUserPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    if (!message.guild) {
        console.log(bold.blue(`[WARN] Guild object not found in AnyUserPermissions option of ${Command.name} of ${InteractionType}.`))
        return true;
    }
    if (message.member.permissions.toArray().some(I => Command.anyUserPermissions.some(i => i.toUpperCase() == I.toUpperCase()))) return true;
    else {
        if (Command.returnErrors == false || Command.returnAnyUserPermissionsError == false) return false;
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
                .setDescription(`You don't have any one of these required permissions to use this command. Required permissions: \n${Command.anyUserPermissions.map(permission => `\`${permission}\``).join(", ")}`);

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