const Discord = require('discord.io');

const Bot = () => {
    return new Promise((resolve, reject) => {
        
        let bot = new Discord.Client({
            token: process.env.BOT_TOKEN,
            autorun: true
        });

        bot.on('ready', function (evt) {

            bot.setPresence( { 
                game: { name: '!help', type: 0 }
            });
          
            bot.raid = new Array();


        });

        bot.on("error", console.error)
        return resolve(bot);
    
    }).catch(err => reject(err))
}

module.exports = Bot;