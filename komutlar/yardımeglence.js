const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '/'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setTitle('Eğlence Komutları')
  .setDescription(`:white_small_square: \`n!avatarım\` = Avatarınızı Gösterir. \n:white_small_square: \`n!ara155\` = Polisi Arar. \n:white_small_square: \`n!ascii\` = Ascii olarak yazarsınız. \n:white_small_square: \`n!herkesebendençay\` = Herkese Çay Ismarlarsınız. \n:white_small_square: \`n!çayiç\` = Çay İçersiniz. \n:white_small_square: \`n!çayaşekerat\` = Çaya Şeker Atarsınız. \n:white_small_square: \`n!yumruk-at\` = Yumruk Atarsınız. \n:white_small_square: \`n!wwegif\` = WWE Gifi Atar. \n:white_small_square: \`n!stresçarkı\` = Stres Çarkı Çevirirsin. \n:white_small_square: \`n!çekiç\` = İstediginiz Kişiye Çekiç Atarsınız. \n:white_small_square: \`n!koş\` = Koşarsınız. \n:white_small_square: \`n!yazı-tura\` = Yazı Tura Oynarsınız.  \n:white_small_square: \`n!simit\` = Simit Yersiniz.   \n:white_small_square: \`n!ping\` = Botun Pingini Gösterir. \n:white_small_square: \`n!fbi\` = FBI Gifi Atar. \n:white_small_square: \`n!wasted\` = Profilinize Wasted Efekti Ekler. \n:white_small_square: \`n!söv\` = Etiketlediğiniz Kişiye Söver `)
  message.channel.send({embed})
  }
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['Eğlence','EĞLENCE'],
  permlevel: 0
};

exports.help = {
  name: 'eğlence',
  description: 'eğlence',
  usage: 'eğlence'
};
