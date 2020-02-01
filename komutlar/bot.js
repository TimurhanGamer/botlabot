const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
require("moment-duration-format");
exports.run = async (bot, message, args) => {
   const istatistikler = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setFooter('Neptün Bot \'n-yardım, n-eğlence, n-moderasyon, n-kullanıcı, n-müzik', bot.user.avatarURL)
  .addField("**» n-bilgi**", " Neptün'ün istatiklerini Gösterir", )
  .addField("**» n-davet**", " Botun Davet Linkini Yollar", )
  .addField("**» n-dsunucu**", " Destek Sunucusunu Atar", )
  .addField("**» n-ping**", " Neptün'ün Pingini Gösterir", )
  .addField("**» n-yenilik**", "Son Yapılan Yeniliği gösterir", )
  .addField("**» Davet**", " [Katıl](https://discordapp.com/oauth2/authorize?client_id=672916820096712714&scope=bot&permissions=2146958847", )
 return message.channel.send(istatistikler);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [ 'bot'],
  permLevel: 0
};

exports.help = {
  name: "Bot",
  description: "Bot i",
  usage: "Bot"
};