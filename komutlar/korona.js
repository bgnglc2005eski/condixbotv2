const Discord = require('discord.js');
const snekfetch = require('snekfetch');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  if(!args[0]) return message.reply('๐พ๐๐๐๐๐ผ ๐๐๐๐๐ ๐ผ๐๐๐๐ ๐๐๐๐ผ๐๐๐๐๐๐ ๐๐ผ๐ฝ๐๐๐๐ ๐๐๐๐๐ผ๐๐๐```Gรผncel Covid-19 vaka istatistiklerini buradan gรถrebilirsin. รlkeye รถzel istatistikler iรงin !korona <รผlke kodu> komutunu kullanabilirsin. #evdekal,#evhayattฤฑr,#evdeyasamvar``` <a:evet:682967451540914351>**Doฤru Kullanฤฑm:** __!korona <รผlke kodu>__')

  let a = args[0].toLowerCase()
  .replace('tรผrkiye', 'TR')
 
    const text = await snekfetch.get(`https://thevirustracker.com/free-api?countryTotal=${a}`);
    const body = text.body;
  let รผlk = body.countrydata[0].info.title

   let embed = new Discord.MessageEmbed()
    .setColor('RED')
    .setTitle('COVID-19')
    .setDescription(`COVID-19 Statistics in **${รผlk}**`)
    .setThumbnail('https://www.diken.com.tr/wp-content/uploads/2020/01/corona_reuters-copy.jpg')
    .addField('*:microbe: Toplam Vaka:*',`\`\`ใ โ ${body.countrydata[0].total_cases} โ ใ\`\` `, true)
    .addField('*:syringe: Toplam ฤฐyileลen:*',`\`\`ใ โ ${body.countrydata[0].total_recovered} โ ใ\`\` `, true)
    .addField('*:dna: Toplam Enfekte:*',`\`\`ใ โ ${body.countrydata[0].total_active_cases} โ ใ\`\` `, true)
    .addField('*:skull_crossbones: Toplam รlรผmler:*',`\`\`ใ โ ${body.countrydata[0].total_deaths} โ ใ\`\` `, true)
    .addField('*:test_tube: Bugรผnki Vakalar:*',`\`\`ใ โ ${body.countrydata[0].total_new_cases_today} โ ใ\`\` `, true)
    .addField('*:warning: Bugรผnki รlรผmler:*',`\`\`ใ โ ${body.countrydata[0].total_new_deaths_today} โ ใ\`\` `, true)
    .addField('*:bangbang: Ciddi Vakalar:*',`\`\`ใ โ ${body.countrydata[0].total_serious_cases} โ ใ\`\` `, true)
    .addField('*:flag_white:  รlke:*',`\`\`ใ โ ${รผlk} โ ใ\`\` `, true)
    .addField('*:bust_in_silhouette:   Kullanฤฑcฤฑ (sen):*',`\`\`ใ โ ${message.author.username} โ ใ\`\` `, true)
    .setTimestamp()
    .setFooter('COVID-19', client.user.avatarURL);
    
    message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['corona', 'coronabilgi', 'corona-bilgi', 'korona', 'koronabilgi', 'korona-bilgi', 'virรผs'],
  permLevel: 0
};

exports.help = {
  name: 'korona',
  description: 'korona',
  usage: 'korona'
};