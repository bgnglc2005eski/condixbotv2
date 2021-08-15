const Discord = require("discord.js");//NWA
const db = require('croxydb');
exports.run = (client, message, args) => {//NWA
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
      	 let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("RED")
 .setDescription(`:alarm_clock:  **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/NwxxUS9sMP) gelebilirsin!`)
  if(karaliste) 
    return message.channel.send(westraben)
  
  if (args[0] == "aç") {//NWA
    if (db.has(`antiraidK_${message.guild.id}`) === true) {
      return message.channel.send("Anti-raid zaten açılmış.");//NWA
    }
    db.set(`antiraidK_${message.guild.id}`, "anti-raid-aç");//NWA
    message.reply("Anti-raid sistemi başarıyla açıldı");//NWA
  }
 
  if (args[0] == "kapat") {//NWA
    if (db.has(`antiraidK_${message.guild.id}`) === false) {//NWA
      return message.channel.send(
        "Anti-raid açılmamış. Açmak için **q!anti-raid aç**"//NWA
      );
    }
    db.delete(`antiraidK_${message.guild.id}`, "anti-raid-aç");//NWA
    message.reply("Anti-raid sistemi başarıyla kapatıldı");//NWA
  }
  if (!args[0])//NWA
    return message.reply(//NWA
      "Lütfen geçerli işlem girin. Örnek: **q!anti-raid aç/kapat**"//NWA
    );
};
exports.conf = {
  enabled: true,//NWA
  guildOnly: true,//NWA//NWA
  aliases: [],//NWA
  permLevel: 0//NWA
};//NWA
exports.help = {
  name: "anti-raid"//NWA
};