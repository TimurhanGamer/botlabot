const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const seksizaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Discord Helper Bot \'Buyur benim istatistiklerim', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", " **@яєктσя#1718 ** ")
  .addField("»  **Geliştirici** "," **@MytaPOffical#6666** ")
  .addField("»  **Destekleyici** "," ** @๖̶̶ζ͜͡HAYLAS ๖ۣۜĐƛrk#8444 **  ")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", seksizaman)
  .addField("» **Kullanıcılar**" , bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Sunucular**", bot.guilds.size.toLocaleString(), true)
  .addField("» **Kanallar**", bot.channels.size.toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **Ping**", bot.ping+" ms", true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discordapp.com/oauth2/authorize?client_id=672916820096712714&scope=bot&permissions=2146958847)", )
  .addField("**» Destek Sunucusu**", " [Katıl](https://goe.gl/neptunbot)", )
  .addField("**» Voteleme sayfası**", " [Botu votele](https://hasteb.in/ofericoh.nginx)", )
  .addField("**» Botun Sitesi**", " [Botun Sitesi](https://neptunoffical.glitch.me/)", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'i', 'istatistik', 'botbilgi', 'bot-bilgi', 'bilgi'],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "Bot i",
  usage: "istatistik"
};