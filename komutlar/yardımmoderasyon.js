const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Moderasyon Komutları')
  .setDescription(` :white_small_square: \`n-otorol\` = Sunucu için otorol ayarlar. \n:white_small_square: \`n-sayaç-ayarla\` = Sunucu için sayaç ayarlar. \n:white_small_square: \`n-ban\` = İstediginiz Kişiyi Banlar. \n:white_small_square: \`n-unban\` = İstediğiniz Kişini Banını  Açar. \n:white_small_square: \`n-küfür-engelle [aç-kapat]\` = Küfürü Engeller. \n:white_small_square: \`n-link-engelle [aç-kapat]\` = Link Paylaşılmasını Engeller.  \n:white_small_square: \`n-oylama\` = Oylama Yapar. \n:white_small_square: \`n-slowmode\` = Yavaş Modu Açar. \n:white_small_square: \`n-temizle\` = İstediniz Kadar Mesaj Siler. \n:white_small_square: \`n-çekiliş\` = Çekiliş Yaparsınız. \n:white_small_square: \`n-sustur\` = İstediğiniz Kişiyi Geçici Olarak Susturursunuz. \n:white_small_square: \`n-kayıt-sistemi\` = Yakında. `)
  message.channel.send({embed})
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['MODERASYON','Moderasyon'],
  permlevel: 0
};

exports.help = {
  name: 'moderasyon',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
