const TelegramBot = require('node-telegram-bot-api');

require('dotenv').config();
const token = process.env.TELEGRAM_BOT_TOKEN;

// name: InspiroBot
// username: inspire_daily_bot
// url: https://t.me/inspire_daily_bot

const bot = new TelegramBot(token, { polling: true });

const quotes_fr = require('./quotes_fr');
const quotes_en = require('./quotes_en');

bot.on('message', (msg) => {
	let quote;
	if (msg.text.toString().toLowerCase().includes('inspire-moi')) {
		quote = quotes_fr[Math.floor(Math.random() * quotes_fr.length)];
		bot.sendMessage(msg.chat.id, quote);
	} else if (msg.text.toString().toLowerCase().includes('inspire me')) {
		quote = quotes_en[Math.floor(Math.random() * quotes_en.length)];
		bot.sendMessage(msg.chat.id, quote);
	}
});

bot.on('polling_error', (error) => {
	console.log(`Polling error: ${error.code}`);
});

process.on('uncaughtException', (error) => {
	console.error('Uncaught Exception:', error);
});

process.on('unhandledRejection', (reason, promise) => {
	console.error('Unhandled Rejection:', reason);
	console.log(promise);
});
