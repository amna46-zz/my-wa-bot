const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox'] } // Crucial for cloud hosting
});

client.on('qr', qr => qrcode.generate(qr, {small: true}));
client.on('ready', () => console.log('Bot is online!'));

client.on('message', async msg => {
    if (msg.body === '!ping') {
        await msg.reply('pong! 🏓');
    } else if (msg.body === '!hello') {
        await msg.reply('Hello from GitHub!');
    }
});

client.initialize();
