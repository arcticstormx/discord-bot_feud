const Discord = require('discord.js');
const { token, prefix } = require('./config.json');
const client = new Discord.Client();


client.once('ready', () => {
	console.log('This bot is online!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	// const mainPlayer = 

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (message.content.startsWith(`${prefix}test`)){
		const timesUp = () => message.channel.send("time's up!");
		const tick = () => message.channel.send("666ms passed");
		message.channel.send("msg " + message);
		message.channel.send("msg.content " + message.content);
		setTimeout(timesUp,2000);
		setInterval(tick,666);

	}

	if (message.content.startsWith(`${prefix}duel`)) {
		const taggedUser = message.mentions.users.first();
		message.channel.send("msg.mentions " + message.mentions);
		message.channel.send("msg.mentions.users " + message.mentions.users);
		message.channel.send("msg.mentions.users[0] " + message.mentions.users[0]);
		message.channel.send("msg.mentions.users.entries().next()[0] " + message.mentions.users.entries().next()[0]);
		message.channel.send("msg.mentions.users.values().next().value.id " + message.mentions.users.values().next().value.id);

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

const challengePlayer = function(player1, player2) {
		message.channel.send(`${player2}, you've been challenged to a duel by ${player1}!\nDo you accept the request?\n(type "yes" or "no"`);
		const filter = (m) => m.content.includes('yes') && m.author.id === player2.id;
		const collector = message.channel.createMessageCollector(filter,{time: 15000});
};

// const createField = function() {
// 	// const X = "X";
// 	// let battlefield = [
// 	// 	0,0,X,X,X,
// 	// 	0,0,X,0,X,
// 	// 	X,X,X,X,X,
// 	// 	X,X,X,X,X,
// 	// 	X,X,X,X,,
// 	// ];
// 	// const generateShips = () => {
// 	//
// 	// 	battlefield.reduce((acc,curr,idx) => {
// 	//
// 	// 	},[]);
// 	// function getRandomNumber (max) {
// 	// 		return Math.floor(Math.random() * (max + 1));
// 	// 	}
//
// 		// 1. от 0 до длины массива выбирается цифра
// 		// 2. Выбранная цифра является головой корабля
// 		// 3. Сначала ставятся самые большие корабли потом поменьше
// 		// **4. Можно создать 4 колонки массива для проверки по краям ли находится голова корабля
// 		//
//
// 		// Проверки при постановке корабля
// 		// Последняя клетка корабля не заходит за пределы карты.
//
//
// 		// Методы постановки и выбора направления корабля
// 		// 1. С головы
// 		// 		1. Ставится голова в свободную клетку
// 		//		2. Каждое из 4 направлений просчитывается
// 		//		3. Направление, в котором возможно поставить корабль выбирается
// 		//
// 		// 2.
// 	// };
// };
client.login(token);