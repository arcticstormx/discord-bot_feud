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

	// if (command === 'duel' && args[0].startsWith("@")) {
	if (command === 'duel') {
		const playerOne = message.author;
		const playerTwo = message.mentions.users.first();

		const filter = response => {
			return (response.content.toLowerCase() === "yes") && (response.author === playerTwo);
		};

		message.channel.send(`${playerTwo}, you've been challenged to a duel!
		\nDo you accept the request?
		\n(type "yes" or "no")`);
		// .then(() => {
			message.channel.awaitMessages(filter, { maxMatches: 1, time: 10000, errors: ["time"] })
				.then(collected => {
					let playerOneGuess = null;
					let playerTwoGuess = null;
					message.channel.send(`${playerTwo}, prepare for battle!`);
					message.channel.send(`The game is Rock Paper Scissors.\nEach player has to write either "paper", "rock" or "scissors".`);
					message.channel.send(collected + " Begin!");
					message.channel.send(collected.content + " content");
					// if ((message.author === playerOne) && (message.content.some(["rock", "scissors", "paper"]))) {
					//
					// } else if ((message.author === playerTwo) && (message.content.some(["rock", "scissors", "paper"]))) {
					//
					// }
				})
				.catch(collected => {
					message.channel.send(collected + ' You chose no... What a shame.');
				});
		// });
	}










	// else if (command === 'args-info') {
	// 	if (!args.length) {
	// 		return message.channel.send(`You didn't provide any arguments, ${message.author}!`);
	// 	}
	// else if (args[0] === 'foo') {
	// 	return message.channel.send('bar');
	// }
	//
	// message.channel.send(`First argument: ${args[0]}`);
	// }
});

client.login(token);
