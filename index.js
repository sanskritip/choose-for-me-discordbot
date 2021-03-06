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
  /*
  if(msg.content=="choose"){
    msg.channel.fetchMessages().then(messages =>{
      finalArray = []
      messages.array().forEach(message => {
        if(message.author.id != '847848403479691316' && message.content!="choose")
              {
                finalArray.push(message.content)
              }     
      });
      console.log(finalArray)
    })
  }
  */
  /*
  if(msg.content=="flood"){
    utils.movie_list.map((i)=>{msg.channel.send(i)})
  }
 */
  if(msg.content[0]!='!' || message.author.id=='847848403479691316')
    return;
  let content = msg.content.substring(1).trim().toLowerCase();
  var msgtok = content.split(" ");
  switch(msgtok[0]){
    case "choose" : {
      let choice = msgtok[1]
      msg.channel.fetchMessages().then(messages => {
        finalArray = []
        messages.array().forEach(message => {
          let msgcontent = message.content.split(" ");
          //console.log(msgcontent)
          if(message.author.id != '847848403479691316' && msgcontent[0]=="!"+choice)
                {
                  msgcontent.shift()
                  finalArray.push([msgcontent.join(" "),message.id])
                }     
        });
        let len = finalArray.length
        if(len==0)
          msg.reply(`Oh boi!😔 No ${choice} found! Maybe add something to your list by using **!${choice} <ENTRY>** ?`)
        else
        {
          let reply = finalArray[utils.randomNumber(len)]
          msg.reply(`👀 The ${choice} choice for the day is **${reply[0]}**! To 🗑️ from list use the command **!remove ${reply[1]}** !`)
        }
    })
      break;
    }
    case "help" :
    case "commands" : {
      msg.channel.send(utils.command_list.map((i) => `✨ **${i[0]}** : *${i[1]}* `).join("\n"))
      break;
    }
    case "about" : {
      msg.channel.send("The **ChooseForMe Bot** 🍿 says Hi! \n I help you make bucket lists on the Server Channel and helps you make spontaneous plans on the go 🚀")
      break;
    }
    case "remove" : {
      msg.channel.fetchMessage(msgtok[1]).then(message => {
        message.delete()
      })
      break
    }
  }
 
});
