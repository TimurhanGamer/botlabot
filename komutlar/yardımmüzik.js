const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Müzik Komutları')
  .setDescription(`:white_small_square: \`n-\` = Bota Bütün Şarkıları Açtırabilirsiniz. \n:white_small_square: \`n-geç\` = Sıradaki Şarkıya Geçer. \n:white_small_square: \`n-durdur\` = Şarkıyı Durdur ve Konuşmadan çıkar. \n:white_small_square: \`n-çık\` = Konuşma Yerinden Anında Çıkar. \n:white_small_square: \`n-ses\` = Ses Seviyesini 1 ile 10 arasında değiştirirsiniz. \n:white_small_square: \`n-çalan\` = O anda Çaldığı Şarkıyı Gösterir.  \n:white_small_square: \`n-sıra\` = Sırayı Gösterir. \n:white_small_square: \`n-devam\` = Şarkıya Devam Eder. \n:white_small_square: \`n-duraklat\` = Şarkıyı Duraklatır. `)
  message.channel.send({embed})
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Müzik','MÜZİK'],
  permlevel: 0
};

exports.help = {
  name: 'müzik',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
