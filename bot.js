const Discord = require('discord.js');

const client = new Discord.Client();

client.on('ready', () => {

    console.log('@Ragnar made me !');

});

client.on('message', message => {

    if (message.content === 'ping') 
    {
       message.reply('pong');
    }
});

client.login('A_0TxABUxkyP8QO-ydlsDC_nJL_ggGQv');
