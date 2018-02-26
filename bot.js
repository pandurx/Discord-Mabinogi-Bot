var Discord = require('discord.io');
var logger = require('winston');
var auth = require('./auth.json');
var cron = require('cron');


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

/* cron job.. */

// preliminary jousting
 var job1 = new cron.CronJob({
  cronTime: '00 00 01 * * 1-6',
  onTick: function() {
    console.log("preliminary jousting begins");
    bot.sendMessage({
      to: '404465250033991694',
      message: "Preliminary Jousting begins"
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});


 var job2 = new cron.CronJob({
  cronTime: '00 00 22 * * 1-6',
  onTick: function() {
    console.log("preliminary jousting begins");
    bot.sendMessage({
      to: '404465250033991694',
      message: "Preliminary Jousting begins"
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});



bot.on('ready', function (evt) {
    logger.info('Connected');
    logger.info('Logged in as: ');
    logger.info(bot.username + ' - (' + bot.id + ')');
    
    console.log('i have been reborn again!');
    bot.setPresence( { 
        game: 
            { name: 'you play', type: 3 }
    });
    
    
    const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: true,
});

client.connect();

client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
  if (err) throw err;
  for (let row of res.rows) {
    console.log(JSON.stringify(row));
  }
  client.end();
});
    
    
    
    

    /* scheduled announcement */
    // array of fashion
    
    // array of jousting
    // Mon-Sat
    var pre_jousting = {
        "22:00:00": "Jousting Preliminaries is starting",
        "01:00:00": "Jousting Preliminaries is starting"
    };
    // Sunday
    var final_jousting = {
        "12:00:00": "Jousting Finals is starting on Channel 2"
    };
    
    // array of dragon raids
    var dragon_raids = {
        "18:00:00": "Prairie Dragon Raid will be starting @ Maiz Prairie",
        "22:00:00": "Prairie Dragon Raid will be starting @ Maiz Prairie",
        "13:30:00": "Desert Dragon Raid will be starting @ Sheep Mark",
        "20:00:00": "Desert Dragon Raid will be starting @ Sheep Mark",
        "14:00:00": "Black Dragon Raid will be starting @ Scorpion Mark",
        "22:00:01": "Black Dragon Raid will be starting @ Scorpion Mark",
        "14:30:00": "White Dragon Raid will be starting @ Flightless Bird Mark",
        "22:30:00": "White Dragon Raid will be starting @ Flightless Bird Mark",
        
        "16:30:00": "Yeti Raid will be starting in Physis",
        "20:30:00": "Yeti Raid will be starting in Physis",
        
        "13:00:00": "Giant Sandworm Raid will be starting @ Central Muyu Desert",
        "04:00:00": "Giant Sandworm Raid will be starting @ Central Muyu Desert",
        
        "19:00:00": "Red Dragon Raid will be starting @ Raspa Volcano",
        "00:00:00": "Red Dragon Raid will be starting @ Raspa Volcano"
    };
    
    var interval = setInterval (function () {

        var time = new Date();
        var current_time = time.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

        if (current_time in dragon_raids) {
            bot.sendMessage({
              to: '409032469959016449',
              message: dragon_raids[current_time] // message to send
            });
        }

        }, 1000); // time between each interval in milliseconds
});

/*bot.on("presenceUpdate", (oldMember, newMember) => {
    if(oldMember.presence.status !== newMember.presence.status){
        console.log(`${newMember.user.username} is now ${newMember.presence.status}`);
    }
});*/

bot.on("presence", function (user, userid, status, gameid) {
    
    console.log("hey there, you logged in :P");
    
    
    bot.sendMessage({
      to: '404465250033991694',
      message: "username: " + JSON.stringify(user) + " / " + JSON.stringify(userid) + "  / status: " + status + " / gameid: " + gameid
    });
    
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
    console.log('hit me up!');
    
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
                
                console.log("pong!");
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
                
                
            case 'set':
               
                const { Client } = require('pg');

                const client = new Client({
                    connectionString: process.env.DATABASE_URL,
                    ssl: true,
                });

                client.connect();
                //'SELECT * FROM user_intro;'
                //'INSERT INTO user_intro ('') VALUES (userID, "online", "whats new?", "boop");'
                //{"user_id":1,"user_state":"online","user_data":"hello","user_command":"greet"}
                var query_string = 'INSERT INTO user_intro (user_id, user_state, user_data, user_command) VALUES (\'\'+parseInt(userID), \'heyoo\', \'whats new?\', \'boop\');'
                console.log('wquery ' + query_string);
                client.query(query_string, (err, res) => {
                    if (err) throw err;

                    client.end();
                });
        
           
                bot.sendMessage({
                    to: channelID,
                    message: 'hey this is still in progress..' + userID// + process.env.DATABASE_URL
               });
            break;             
            // Just add any case commands if you want to..
         }
     }
});
