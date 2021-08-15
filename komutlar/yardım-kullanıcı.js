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
.setAuthor(`SoniX Kullanıcı Komutları`, client.user.avatarURL())
.setThumbnail(message.author.displayAvatarURL({dynamic : true}))
.setImage('https://cdn.discordapp.com/attachments/828409126606077972/831176864956547072/standard_1.gif')
.setColor('#f6ff00')
.setDescription(` SoniX botumuzu eklemek için \`s*botdavet\` yazabilirsiniz.`)  
.addField(`<a:kategori:827902564368384031> __Profil Resmi__`,` \`s*pp\` Avatarınızı Atar`,true)
.addField(`<a:kategori:827902564368384031> __Tavsiye__`,` \`s*tavsiye\` Biz Yapımcılara Tavsiye Verirsiniz.`,true)
.addField(`<a:kategori:827902564368384031> __Bug Bildir__`,` \`s*bug-bildir\` Botta Bug Varsa Biz Yapımcılara İletir.`,true)
.addField(`<a:kategori:827902564368384031> __İstek__`,` \`s*istek\` İsteğinizi Belirtirsiniz.(SUNUCUDA)`,true)
.addField(`<a:kategori:827902564368384031> __Düello__`,` \`s*düello <@üye>\` Düello Yaparsınız.`,true)
.addField(`<a:kategori:827902564368384031> __Mesaj Sayacı__`,` \`s*mesaj-sayar\` Toplam Mesaj Sayınızı Gösterir.`,true)
.addField(`<a:kategori:827902564368384031> __Resim Sayacı__`,` \`s*resim-sayar\` Toplam Resim Sayınızı Gösterir.`,true)
.addField(`<a:kategori:827902564368384031> __Küfür Sayacı__`,` \`s*küfür-sayar\` Toplam Küfür Sayınızı Gösterir.`,true)
.addField(`<a:kategori:827902564368384031> __Reklam Sayacı__`,` \`s*reklam-sayar\` Toplam Reklam Sayınızı Gösterir.`,true)
.addField(`<a:kategori:827902564368384031> __Kullanıcı Bilgi__`,` \`s*kullanıcı-bilgi <@üye>\` Kullanıcı'nın Bilgilerini Gösterir.`,true)
.addField(`<a:kategori:827902564368384031> __Sunucu Bilgi__`,` \`s*sunucu-bilgi\` Sunucu'nun Bilgilerini Gösterir.`,true)
.addField(`<a:kategori:827902564368384031> __Korona Bilgi__`,` \`s*korona\` Korona Virüs tablosunun anlık verilerini gösterir.`,true)
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
    name: 'kullanıcı'
  }; 
  