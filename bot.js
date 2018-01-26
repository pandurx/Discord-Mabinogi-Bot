var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');

// Configure logger settings
logger.remove(logger.transports.Console);
logger.add(logger.transports.Console, {
    colorize: true
});

logger.level = 'debug';
// Initialize Discord Bot
var bot = new Discord.Client({
   token: process.env.BOT_TOKEN,
   autorun: true
});

bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    
    bot.setPresence( { 
        game: 
            { name: 'you play', type: 3 }
    });
    

    /* scheduled announcement */
    // array of dragon raids
    var dragon_raids = {
        "23:00:00": "prairie",
        "03:00:00": "prairie",
        desert1: "not avail",
        "01:00:00": "desert2",
        black1: "not avail",
        black2: "not avail",
        white1: "not avail",
        "00:14:25": "hello world!"
    };
    
    var interval = setInterval (function () {

        var time = new Date();
        var current_time = time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

        if (current_time in dragon_raids) {
            bot.sendMessage({
              to: '404465250033991694',
              message: dragon_raids[current_time] // message to send
            });
        }

        }, 1000); // time between each interval in milliseconds
});

bot.on("presence", function (user, userID, status, gameid) {
    
    console.log("hey there, you logged in :P");
    
    /*
    bot.sendMessage({
      to: '404465250033991694',
      message: "username: " + JSON.stringify(user) + " / status: " + status + " / gameid: " + gameid
    });
    */
    if (status == "online") {
        switch (user) {
            case "Finley":
                bot.sendMessage({
                  to: '404465250033991694',
                  message: "You're alive! Welcome back!!"
                });
                break;
        }
    }
});


bot.on('message', function (user, userID, channelID, message, evt) {
    // Our bot needs to know if it will execute a command
    // It will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
            // !ping
            case 'ping':
                bot.sendMessage({
                    to: channelID,
                    message: 'Pong!'
                });
            break;

            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: 'Commands: !roll, !time, !raid, !ping'
                });
            break;
            
            case 'roll':
                bot.sendMessage({
                    to: channelID,
                    message: 'You rolled ' + Math.floor(Math.random() * Math.floor(100))
                });
            break;
                
            case 'time':
                var time = new Date();
                bot.sendMessage({
                    to: channelID,
                    message: 'The current time is ' + time.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true }) + ' GMT'
                });
            break;
                
            case 'raid':
                var time = new Date();
                bot.sendMessage({
                    to: channelID,
                    message: 'Prairie (6PM-6:30PM, 10PM-10:30PM) | Desert (1:30PM-2PM, 8PM-8:30PM) | Black (2PM-3PM, 10PM-11PM) EST'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
