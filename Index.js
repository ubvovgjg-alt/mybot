const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

const app = express();
app.get('/', (req, res) => res.send('HarbBot is Online!'));
app.listen(3000);

const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

const db = {};

client.on('messageCreate', (message) => {
    if (message.author.bot) return;
    const uid = message.author.id;
    if (!db[uid]) db[uid] = { txtLvl: 1, txtXp: 0, vcLvl: 1, vcXp: 0 };

    // نظام الليفل الكتابي
    if (db[uid].txtLvl < 100) {
        db[uid].txtXp += 10;
        if (db[uid].txtXp >= db[uid].txtLvl * 100) {
            db[uid].txtXp = 0;
            db[uid].txtLvl++;
            message.channel.send(`🆙 العضو <@${uid}> وصل للمستوى الكتابي ${db[uid].txtLvl}!`);
        }
    }

    // --- الأوامر تبدأ بنقطة (.) ---
    if (message.content.startsWith('.')) {
        const cmd = message.content.slice(1).toLowerCase();

        if (cmd === 'id') {
            const user = db[uid];
            message.reply(`🆔 **بطاقة العضو:**\n📝 مستوى الكتابة: ${user.txtLvl}\n🎙️ مستوى الصوت: ${user.vcLvl}\n\nالحد الأقصى للمستوى هو 100.`);
        }
        
        if (cmd === 'hi') {
            message.reply('أهلاً بك في كلان حرب! ⚔️');
        }
    }
});

client.login('YOUR_BOT_TOKEN_HERE');
