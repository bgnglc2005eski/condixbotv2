const Discord = require('discord.js');

exports.run = (client, message, args) => {
    let emojiname = args[0];
    const emoji = message.guild.emojis.cache.find(r => r.name === emojiname)
    if (!emojiname) return message.channel.send("Emoji ismi belirtmediniz")
    if(emoji) {
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setThumbnail(`${emoji.url}`)
            .addField("Emojinin ismi", `${emojiname}`)
            .addField("Emoji ID", `${emoji.id}`)
            .addField("Link", `${emoji.url}`)
            .setTimestamp()
        message.channel.send(embed)
    } else message.channel.send("Böyle Bir Emoji Bulunamadı!")
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['emojiinfo','emoji-bilgi'],
    permLevel: 0
}
exports.help = {
    name: 'emojibilgi',
    description: 'İsmini yazdığınız emoji hakkında bilgi verir',
    usage: 'emojibilgi'
}