const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Aktif, Komutlar yüklendi!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: ${client.user.username} İsmi İle Giriş Yapıldı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Codare Ready.js`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: codare`);
  client.user.setStatus("https://www.twitch.com/rany");
  client.user.setGame(`🚀 n-yardım  🔮 n-eğlence 🍒 n-bot |||| 📌 n-koruma 🔑 n-moderasyon |||| |||| 🎨 n-eğlence 🤖 Beta 0.0.1    ||||`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: Oyun ismi ayarlandı!`);
  console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] BOT: 🚀 n-!yardım 🚀 n-bot 🚀 n-eğlence 🚀 n-kullanıcı 🚀 n-koruma 🚀 n-moderasyon 🚀 + Beta 0.0.1 🍒 `);
};