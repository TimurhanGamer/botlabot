const Discord = require('discord.js')
exports.run = async(client, message, args) => {
  
  
const emoji1 = message.client.emojis.get('ð');
const emoji2 = message.client.emojis.get('ð');
const emoji3 = message.client.emojis.get('ð');   //buralara dokunmayın!
const emoji4 = message.client.emojis.get('ð');
const emoji5 = message.client.emojis.get('ð');
const emoji6 = message.client.emojis.get('ð');
const emoji7 = message.client.emojis.get('ð');
      let isEnabled;
      message.reply("☎️ Canlı Destek Talebinizi Gönderdiniz En Kısa Sürede Sizle İletişime Geçeceklerdir!  ");
      let mesaj = args.slice(0).join(' ');
      let chan = message.channel;
      let destekKanal = "673162070258352138";
      const embed = new Discord.RichEmbed()
        .addField('Uyarı!', `Destek Talebi Var!`)
        .setAuthor(`${message.author.tag} (${message.author.id})`, `${message.author.avatarURL}`)
        .setColor("RANDOM")
        .addField(`Bilgiler`, `**Sunucu**: ${message.guild.name} (${message.guild.id}) \n**Kanal**: ${message.channel.name} (${message.channel.id}) \n**Destek İsteyen**: ${message.author.tag} (${message.author.id}) \n**Destek Mesajı**: ${mesaj}`)
        .setFooter("Canlı Destek ")
        .setTimestamp()
      client.channels.get(destekKanal).send({
        embed: embed
      });
    const collector = client.channels.get(destekKanal).createCollector(message => message.content.startsWith(''), {
      time: 0
    })
    client.channels.get(destekKanal).send('💹 Destek Talebi Geldi **Sayın Yetkili** KABUL Etmek İstiyorsan `katıl` Red Etmek İstiyorsan `kapat` Yazabilirsin! Yazabilirsin')
    collector.on('message', (message) => {
      if (message.content === 'kapat') collector.stop('aborted')
      if (message.content === 'katıl') collector.stop('success')
    })
    collector.on('end', (collected, reason) => {
      if (reason === 'time') return message.reply('🔌 Bağlantı ZAMAN Aşımına Uğradı')
      if (reason === 'aborted') {
        message.reply('⛔️ Red Edildi')
        client.channels.get(destekKanal).send('📡 Bağlantı Başarıyla Red Edildi ✅ ')
      }
      if (reason === 'success') {
        client.channels.get(destekKanal).send('⚠️ Canlı Desteğe Bağlanılıyor')
        client.channels.get(destekKanal).send('⚠️ Bağlanıldı Kapatmak için `kapat` Yazabilirsiniz')
        chan.send(`${message.author}`)
        chan.send('Destek Talebiniz Yetkili Tarafından Alındı📜 ')
        chan.send(' 🔳 ')
        chan.send('📌 Destek Talebini Kapatmak İstiyorsan `kapat` Yazabilirsin')
        isEnabled = true
        client.on('message', message => {
          function contact() {
            if (isEnabled === false) return
            if (message.author.id === client.user.id) return
            if (message.content.startsWith('kapat')) {
              message.channel.send('❌ Arama Kapatıldı')
              if (message.channel.id === chan.id) client.channels.get(destekKanal).send('❌ Arama Karşı Taraftan Kpatıldı')
              if (message.channel.id === destekKanal) chan.send('Arama Karşı Taraftan Kapatıldı ❌')
              return isEnabled = false
            }
            if (message.channel.id === chan.id) client.channels.get(destekKanal).send(`ð **${message.author.tag}**: ${message.content}`)
            if (message.channel.id === destekKanal) chan.send(`ð **${message.author.tag}**: ${message.content}`)
          }
          contact(client)
        })
      }
    })
}
  exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name: 'canlıdestek',
  description: 'CanlÄ± Destek Tablebi OluÅturur.',
  usage: ''
};
//orsabot abdü/17