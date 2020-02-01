const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Kullanıcı Komutları')
  .setDescription(`:white_small_square: \`n-yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız. \n:white_small_square: \`n-sunucuresmi\` = Sunucu Resmini Atar. \n:white_small_square: \`n-nsfw-gif\` = Nsfw Gifi Atar. \n:white_small_square: \`n-yetkilerim\` = Yetkilerinizi Gösterir. \n:white_small_square: \`n-kullanıcıbilgim\` = Bilgilerinizi Gösterir. \n:white_small_square: \`n-ping\` = Botun Pingini Gösterir.  \n:white_small_square: \`n-sunucubilgi\` = Sunucu Hakkında Bilgi Verir. \n:white_small_square: \`n-afk [sebep]\` = AFK Olursunuz. `)
  message.channel.send({embed})
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Kullanıcı','KULLANICI'],
  permlevel: 0
};

exports.help = {
  name: 'kullanıcı',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
};
