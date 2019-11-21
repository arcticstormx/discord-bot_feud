const Discord = require('discord.js');
const client = new Discord.Client();

const token = 'NjQ2Nzk0MDYwMTc0MTk2NzQ2.XdWU5A.iLb5gDdpqQ-8kqS4v_NsLhYBjHo';

const PREFIX = '!';

client.on('ready', () => {
  console.log('This bot is online!');
});

client.on('message', (msg) => {
  let args = msg.content.substring(PREFIX.length).split(' ');

  switch (args[0]) {
    case 'ping':
      msg.channel.send('pong!');
      break;
    case 'website':
      msg.channel.send('youtube.com');
      break;
    case 'info':
      if (args[1] == 'version') {
        msg.channel.send('Version 1.0.0');
      } else {
        msg.channel.send('Invalid arguments');
      }
      break;
    case 'clear':
      if (!args[1]) return msg.reply('Error, please define second argument');
      msg.channel.bulkDelete(args[1] + 1);
      break;
    case 'embed':
      const embed = new Discord.RichEmbed()
        .setAuthor('Dick Douglas')
        .setColor('BLUE')
        .setFooter('long dick style')
        .addField('Author\'s Daddy', msg.author.username);
      msg.channel.sendEmbed(embed);

      break;
  } 

});

client.login(token);