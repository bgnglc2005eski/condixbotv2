const Discord = require("discord.js");
const db = require('croxydb');

exports.run = async (bot, message) => {
   let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("RED")
 .setDescription(`:alarm_clock:  **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/NwxxUS9sMP) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
      if(db.fetch(`bakim`)) {
  const bakim = new Discord.MessageEmbed()
  .setColor("#f6ff00")
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
  .setTitle('Üzgünüm Bot Bakımda')
  .addField('Bot Şuan Bakımdadır Lütfen Bekleyin.','Bot Ne Durumda Yada Botla İlgili Güncelleme Ve Duyurular İçin Destek Sunucumuza Gelmeyi Unutmayınız.')
  .addField('İşte Destek Sunucum',"[Destek Sunucusu](https://discord.gg/tuG87ZadFu)")
  .setFooter('Üzgünüm...')
  .setImage('https://lh3.googleusercontent.com/proxy/gAN4I19oqqabXd_VIiwg5or-ITh4XxJTRNJA1ot0EIHPiBpxC74Atj4wNIcFes1N3VcE8WnOk6fIN29BChqNbj4lj9dIF2jiI7MBV6U8v842LA')
if(message.author.id != "477189482206986240") return message.channel.send(bakim)

}
    let c = message.mentions.channels.first();
    if (!c) return message.channel.send("Lütfen bir kanal etiketleyiniz!");
    db.set(`güvenlik_${message.guild.id}`, c.id);
    message.channel.send(
      `Güvenlik kanalı ${c} olarak ayarlandı!`
    );
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["security"],
  permLevel: 3
};

module.exports.help = {
  name: "güvenlik-kanal",
  description: "güvenlik",
  usage: "güvenlik"
};
