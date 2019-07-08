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

            for (x in bot.servers)
              for (z in bot.servers[x].channels)
                if (bot.servers[x].channels[z].name == "scheduled-raids")
                  bot.raid[x] = z;
        });

        bot.on("error", console.error)
        return resolve(bot);
    
    }).catch(err => reject(err))
}

module.exports = Bot;