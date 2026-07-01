const express = require('express');
const { Client, GatewayIntentBits } = require('discord.js');

// إعداد الموقع
const app = express();
app.get('/', (req, res) => res.send('HarbBot is Online!'));
app.listen(3000);

// إعداد البوت
const client = new Client({ 
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] 
});

client.on('ready', () => {
    console.log(`البوت جاهز: ${client.user.tag}`);
});

client.on('messageCreate', (message) => {
    if (message.content === '!hi') {
        message.reply('أهلاً بك في كلان حرب! ⚔️');
    }
});

// هنا ضع التوكن الخاص بك
client.login('YOUR_BOT_TOKEN_HERE');
