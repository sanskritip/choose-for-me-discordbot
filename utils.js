function randomNumber(num){
    return Math.floor(Math.random() * num)
}

command_list = [['!choose <LISTNAME>','Chooses random entry from LISTNAME'],['!<LISTNAME> <ENTRY>','Adds Entry to List'],['!commands','Returns all valid bot commands'],['!about','Gives a short description about the bot.'],['!remove <MESSAGE_ID>','Removes entry from bucket list!']]
module.exports = {
    randomNumber : randomNumber,
    command_list : command_list
};

