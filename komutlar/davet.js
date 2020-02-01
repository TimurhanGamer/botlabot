const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

exports.run = (client, message) => {
  const embed = new Discord.RichEmbed()
  .setTitle("Beni sunucuna davet etmek için tıkla.")
    .setAuthor(message.author.username, message.author.avatarURL)
  .setColor("RANDOM")
  .setDescription("**Bot yapımıcısı:** @𝐄𝐝𝐰𝐚𝐫𝐝 𝐇𝐨𝐥𝐦𝐞𝐬#0431 ")
  .setFooter('Yapımcı YAPIMCI ADI ', client.user.avatarURL)
  .setThumbnail("")
  .setTimestamp()
  .addField("» Linkler", `[WEB SİTE Yakında!]()`+ "**\n**"+`[Destek Sunucusu](https://discord.gg/Q5gjrs)`, false)
  .setURL('(https://discordapp.com/oauth2/authorize?client_id=611195453660200992&scope=bot&permissions=0()')
  	.setThumbnail(client.user.avatarURL);

  message.channel.send({embed});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet',
  description: 'Bot ile ilgili bilgi verir.',
  usage: 'davet'
};
