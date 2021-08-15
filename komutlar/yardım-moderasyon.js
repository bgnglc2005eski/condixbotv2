const db = require("croxydb");
const Discord = require('discord.js');
const fynx = require("../ayarlar.json");
exports.run = async (client, message, args) => { 
    let karaliste = db.fetch(`ckaraliste.${message.author.id}`)
 const westraben = new Discord.MessageEmbed()
 .setColor("#f6ff00")
 .setDescription(`<a:siren:778777832976416778> **${karaliste}** sebebiyle karalisteye alınmışsın!\nBeyaz listeye alınmak istiyorsan [BURAYA](https://discord.gg/tuG87ZadFu) gelebilirsin!`)
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
let eklenti = new Discord.MessageEmbed()  
.setAuthor(`SoniX Moderasyon Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/828409126606077972/831176864956547072/standard_1.gif')
.setColor('#f6ff00')
.setDescription(` SoniX botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)
.addField(`<a:kategori:827902564368384031> __Sa-As__`,` \`s*sa-as aç-kapat \` Otomatik Selamlamayı Açar/Kapatır.`,true)
.addField(`<a:kategori:827902564368384031> __Otorol__`,` \`s*otorol\` Gelenlere Rol Verir.`,true)
.addField(`<a:kategori:827902564368384031> __Ototag__`,` \`s*ototag\` Gelenlere Tag Verir.`,true)
.addField(`<a:kategori:827902564368384031> __Ototag Kapat__`,` \`s*ototag-kapat\`  Ototag Sistemini Kapatır.`,true)
.addField(`<a:kategori:827902564368384031> __Sayaç__`,` \`s*sayaç <sayı> <#kanal>\` Sayaç Ayarlarsınız.`,true)
.addField(`<a:kategori:827902564368384031> __Sil__`,` \`s*sil \`Belirli Sayıda Mesaj Siler.`,true)
.addField(`<a:kategori:827902564368384031> __Yavaş Mod__`,` \`s*yavaş-mod \` Sohbete Süre Ayarlar.`,true)
.addField(`<a:kategori:827902564368384031> __Mod Log__`,` \`s*modlog \` Modlogu ayarlar..`,true)
.addField(`<a:kategori:827902564368384031> __Moderasyon2__`,` \`s*moderasyon2 \` | Moderasyon Menüsünün Devamı.`,true)
.addField(`<a:kategori:827902564368384031> __Bilgilendirme__`,` \`s*botdavet\` | SoniX'i Sunucunuza Davet Edersiniz\n \`s*istatistik\` | Botun İstatistiklerini Gösterir `)
 message.channel.send(eklenti) 
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["moderasyon","ayarlar"], 
    permLevel: 0
  };
  exports.help = {
    name: 'moderasyon'
  }; 
  