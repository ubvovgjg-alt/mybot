const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

client.once('ready', () => {
    console.log(`تم تسجيل الدخول بنجاح كـ ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '.hi') {
        message.reply('أهلاً بك! البوت يعمل الآن بشكل ممتاز.');
    }

    if (message.content === '.id') {
        message.reply(`معرف المستخدم الخاص بك هو: ${message.author.id}`);
    }
});

// هنا يكمن سر الأمان:
// الكود لن يقرأ التوكن من هنا، بل سيطلبه من إعدادات Render السرية
client.login(process.env.DISCORD_TOKEN);
