function randomNumber(num){
    return Math.floor(Math.random() * num)
}

command_list = [['!choose <LISTNAME>','Chooses random entry from LISTNAME'],['!<LISTNAME> <ENTRY>','Adds Entry to List'],['!commands','Returns all valid bot commands'],['!about','Gives a short description about the bot.'],['!remove <MESSAGE_ID>','Removes entry from bucket list!']]

movie_list = [
    'Isle of Dogs',
    'From prada to nada',
    'Hitch',
    'Bridesmaids',
    'Made of honor',
    'Mamma Mia!',
    "Ferris Bueller's Day Off",
    'The Breakfast Club',
    'Juno',
    'A Cinderella Story',
    'Night at the museum',
    'Storks',
    'grave of the fireflies',
    'Your Name (anime)',
    'The first wives club',
    'The Secret Life of Walter Mitty',
    'School of rock',
    'Mrs.Doubtfire',
    'Flubber',
    'Parasite',
    'Upside Down',
    '40 year old virgin',
    'Sleepless in Seattle',
    'This is 40',
    'Knocked Up',
    'Legally Blonde',
    'Interstellar',
    'The Big Sick',
    'Spiderverse',
    'Hunchback of Notre damn',
    'Mulan',
    'the princess and the frog',
    'Eternal sunshine of the spotless mind'
  ]

module.exports = {
    randomNumber : randomNumber,
    command_list : command_list,
    movie_list : movie_list
};

