const db = require("croxydb");
const Discord = require('discord.js');
const spallers = require("../ayarlar.json");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix
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
.setAuthor('SoniX Yardım Menüsü',message.author.displayAvatarURL({dynamic : true}))
.setThumbnail('https://cdn.discordapp.com/attachments/823914882818637824/831163279995961364/sonix.jpg')
.setImage("https://cdn.discordapp.com/attachments/823914882818637824/831163942897844284/standard_1.gif")
.setColor('#f6ff00')
.addField( `**╔═══════════◥◣❖◢◤════════════╗**`,
    ` **║ Bilgilendirme.gördüğün gibi bu bot benim **
**║ [Botu Davet Et](https://discord.com/oauth2/authorize?client_id=790890283180883998&scope=bot&permissions=8)**
**║ [Destek Sunucusu](https://discord.gg/qTGqQQK7Y9)**
**╚═══════════◥◣❖◢◤════════════╝**
   `)
.addField(`<a:kategori:827902564368384031>__Kayıt Komutları__`,` \`s*kayıt\``,true)
.addField(`<a:kategori:827902564368384031>__Seviye Komutları__`,` \`s*seviye\` `,true)
.addField(`<a:kategori:827902564368384031>__Yetkili Komutları__`,` \`s*moderasyon\` `,true)
.addField(`<a:kategori:827902564368384031>__Logo Komutları__`,` \`s*logo\` `,true)
.addField(`<a:kategori:827902564368384031>__Botlist Komutları__`,` \`s*botlist\` `,true)
.addField(`<a:kategori:827902564368384031>__Guard Komutları__`,` \`s*guard\` `,true)
.addField(`<a:kategori:827902564368384031>__Gif Komutları__`,` \`s*gif\` `,true)
.addField(`<a:kategori:827902564368384031>__Güvenlik Komutları__`,` \`s*güvenlik\` `,true)
.addField(`<a:kategori:827902564368384031>__Davet Komutları__`,` \`s*davet\` `,true)
.addField(`<a:kategori:827902564368384031>__Profil Komutları__`,` \`s*profil\` `,true)
.addField(`<a:kategori:827902564368384031>__Kullanıcı Komutları__`,` \`s*kullanıcı\` `,true)
.addField(`<a:kategori:827902564368384031>__Nsfw Komutları__`,` \`s*nsfw\` `,true)
.addField(`<a:kategori:827902564368384031>__Hazır Sunucu Komutları__`,` \`s*sunucukur\` `,true)


.addField(`╔═══════════◥◣❖◢◤════════════╗`,
   ` **║  \` s*botdavet\` __Botu Davet Edebilirsiniz!__**
    **║  \` s*istatistik\` __İstatistiklerini Göre Bilirsiniz.__**
    **║ \` s*tavsiye\` __Bizlere Tavsiye Verirsiniz.__**
    **║ \` s*bug-bildir\` __Bot Hatalarını Bildirirsiniz.__**
    **╚═══════════◥◣❖◢◤════════════╝**`)
message.channel.send(eklenti)
  };
  exports.conf = {
    enabled: true,  
    guildOnly: false, 
    aliases: ["yardım","help"], 
    permLevel: 0
  };
  exports.help = {
    name: 'yardım'
  }; 
  