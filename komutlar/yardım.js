const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Yardım Menüsü')
  .setDescription(`:white_small_square: \`n-eğlence\` = Eğlence ve Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`n-moderasyon\` = Moderasyon Komutlarını Listeler. \n\n:white_small_square: \`n-kullanıcı\` = Kullanıcı Komutlarını Listeler. \n\n:white_small_square: \`n-müzik\` = Müzik Komutlarını Gösterir  `)
  message.channel.send({embed})
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'yardım',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
