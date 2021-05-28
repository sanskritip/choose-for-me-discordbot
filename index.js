require('dotenv').config();
const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if(msg.content == "choose"){
    msg.channel.fetchMessages().then(messages => {
      finalArray = []
      messages.array().forEach(message => {
        if(message.content!='choose' && message.author.id != '847848403479691316')
              {
                finalArray.push(message.content)
              }
      });
      //console.log(finalArray)
      msg.reply(finalArray[Math.floor(Math.random() * finalArray.length)])
  })
  }
});
