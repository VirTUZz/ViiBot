const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("t!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: '[t!help] VirTuZz#2690 DEV', type: 0}});
    console.log("ViiBot est en ligne !");
});

bot.login("NDQ0NDQ2MjgxMTA1MDE0Nzg0.DdcCgQ.Asg9NEH-inrq-9k44j6ESA0exHQ");
