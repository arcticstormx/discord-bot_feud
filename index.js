const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();

client.once('ready', () => {
	console.log('This bot is online!');
});

client.on('message', message => {
	const args = message.content.substring(prefix.length).split(' ');

	if (message.content.startsWith(`${prefix}ping`)) {
		message.channel.send('Pong.');
	}
	else if (message.content.startsWith(`${prefix}beep`)) {
		message.channel.send('Boop.');
	}
	else if (message.content.startsWith(`${prefix}server`)) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal population: ${message.guild.memberCount}`);
	}
	else if (message.content === `${prefix}user-info`) {
		message.channel.send(`Your username: ${message.author.username}\nYour ID: ${message.author.id}`);
	}
});

client.login(token);
