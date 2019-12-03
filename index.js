const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('This bot is online!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (message.content.startsWith(`${prefix}duel`)) {
		const taggedUser = message.mentions.users.first();
		message.channel.send(`${taggedUser}, you've been challenged to a duel!\nDo you accept the request?\n(type "!duel yes" or "!duel no"`);
		// Код, где юзер пишет свой ответ в виде кода
	}

	else if (command === 'args-info') {
		if (!args.length) {
			return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
		}
	else if (args[0] === 'foo') {
		return message.channel.send('bar');
	}

	message.channel.send(`First argument: ${args[0]}`);
}
});

client.login(token);
