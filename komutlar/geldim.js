const Discord = require('discord.js');
exports.run = function(client, message, args) {
  const embed = new Discord.RichEmbed()
  .setTitle("Afk Modu! \n")
  .setColor("RANDOM")
  .addField('Şu Kullanıcı Artık Afk Değil! =>', message.author.username + '#' + message.author.discriminator)
  .setFooter('BOTISMI', client.user.avatarURL)
  message.delete();


  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'geldim',
  description: 'Afk Modundan çıkmanı sağlar.',
  usage: 'geldim'
};
