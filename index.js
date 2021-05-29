require('dotenv').config();

const Discord = require('discord.js');

const bot = new Discord.Client();
const TOKEN = process.env.TOKEN;

const utils = require('./utils');

bot.login(TOKEN);

bot.on('ready', () => {
  console.info(`Logged in as ${bot.user.tag}!`);
});

bot.on('message', msg => {
  if(msg.content[0]!='!')
    return;
  let content = msg.content.substring(1).trim().toLowerCase();
  var msgtok = content.split(" ");
  switch(msgtok[0]){
    case "choose" : {
      let choice = msgtok[1]
      msg.channel.fetchMessages().then(messages => {
        finalArray = []
        messages.array().forEach(message => {
          let msgcontent = message.content.split(" ",2);
          if(message.author.id != '847848403479691316' && msgcontent[0]=="!"+choice)
                {
                  finalArray.push(msgcontent[1])
                }
        });
        //console.log(finalArray)
        msg.reply(finalArray[utils.randomNumber(finalArray.length)])
    })
    }
  
  }
  /*
  if(content){
    msg.channel.fetchMessages().then(messages => {
      finalArray = []
      messages.array().forEach(message => {
        if(message.content!='choose' && message.author.id != '847848403479691316')
              {
                finalArray.push(message.content)
              }
      });
      msg.reply(finalArray[Math.floor(Math.random() * finalArray.length)])
  })
  }
  */
});
