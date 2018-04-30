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

/* cron job... */

// Testing cron job
 var job1 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    console.log('preliminary jousting begins');
    bot.sendMessage({
      to: '440628558298087426',
      message: 'Testing Cron Job22'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});
 var job2 = new cron.CronJob({
  cronTime: '* * * * *',
  onTick: function() {
    console.log('preliminary jousting begins2');
    bot.sendMessage({
      to: '440628558298087426',
      message: 'Testing Cron Job11'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

// preliminary and final jousting
/////////////////////////////////////////////////////////////////////
var pre_jousting_time_1 = new cron.CronJob({
  cronTime: '00 01 * * 1-6',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Preliminary Jousting begins'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var pre_jousting_time_2 = new cron.CronJob({
  cronTime: '00 22 * * 1-6',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Preliminary Jousting begins'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var final_jousting_time = new cron.CronJob({
  cronTime: '00 22 * * 7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Preliminary Jousting begins'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});


// other raids
/////////////////////////////////////////////////////////////////////
var yeti_raid_1 = new cron.CronJob({
  cronTime: '30 16,20 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Yeti Raid will be starting in Physis'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var giant_sandworm_raid_1 = new cron.CronJob({
  cronTime: '00 13,04 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Giant Sandworm Raid will be starting @ Central Muyu Desert'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});


// dragon raids
/////////////////////////////////////////////////////////////////////
var red_dragon_raid_1 = new cron.CronJob({
  cronTime: '00 19,00 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Red Dragon Raid will be starting @ Raspa Volcano'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var white_dragon_raid_1 = new cron.CronJob({
  cronTime: '30 14,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'White Dragon Raid will be starting @ Flightless Bird Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var black_dragon_raid_1 = new cron.CronJob({
  cronTime: '00 14,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Black Dragon Raid will be starting @ Scorpion Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_raid_1 = new cron.CronJob({
  cronTime: '30 13 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Desert Dragon Raid will be starting @ Sheep Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_raid_2 = new cron.CronJob({
  cronTime: '00 20 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Desert Dragon Raid will be starting @ Sheep Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var prairie_dragon_raid_1 = new cron.CronJob({
  cronTime: '00 18,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Prairie Dragon Raid will be starting @ Maiz Prairie'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});


// initializing the bot
/////////////////////////////////////////////////////////////////////
bot.on('ready', function (evt) {

    bot.setPresence( { 
        game: { name: 'you play', type: 3 }
    });
    
    const { Client } = require('pg');

    // configure the database connection string
	const client = new Client({
	  connectionString: process.env.DATABASE_URL,
	  ssl: true,
	});

	client.connect();
	//ALTER TABLE raw ALTER COLUMN id TYPE BIGINT;
	    //SELECT table_schema,table_name FROM information_schema.tables;
	client.query('SELECT table_schema,table_name FROM information_schema.tables;', (err, res) => {
	  if (err) throw err;
	  for (let row of res.rows) {
	    console.log(JSON.stringify(row));
	  }
	  client.end();
	});
	    
    
    /* scheduled announcement */
    // array of fashion
        
    // array of dragon raids

    
    /*var interval = setInterval (function () {

        var time = new Date();
        var current_time = time.toLocaleString('en-US', { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false });

        if (current_time in dragon_raids) {
            bot.sendMessage({
              to: '409032469959016449',
              message: dragon_raids[current_time] // message to send
            });
        }

        }, 1000);*/ // time between each interval in milliseconds
});

/*bot.on("presenceUpdate", (oldMember, newMember) => {
    if(oldMember.presence.status !== newMember.presence.status){
        console.log(`${newMember.user.username} is now ${newMember.presence.status}`);
    }
});*/


// greeting users (optional)
/////////////////////////////////////////////////////////////////////
bot.on("presence", function (user, userid, status, gameid) {
        
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


// sending messages to discord
/////////////////////////////////////////////////////////////////////
bot.on('message', function (user, userID, channelID, message, evt) {
    
	const { Client } = require('pg');

	const client = new Client({
		connectionString: process.env.DATABASE_URL,
		ssl: true,
	});
    

    if (channelID == '409032469959016449') return;

    // the bot will listen for messages that will start with `!`
    if (message.substring(0, 1) == '!') {
        var args = message.substring(1).split(' ');
        var cmd = args[0];
       
        args = args.splice(1);
        switch(cmd) {
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
                    message: 'You rolled ' + Math.floor(Math.random() * Math.floor(100)) + ' ... '
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
              
            case 'get':
                client.connect();
                //'SELECT * FROM user_intro;'
                //'INSERT INTO user_intro ('') VALUES (userID, "online", "whats new?", "boop");'
                //{"user_id":1,"user_state":"online","user_data":"hello","user_command":"greet"}
                var query_string = 'SELECT * FROM user_intro WHERE user_id = '+parseInt(userID)+';'
                console.log('wquery ' + query_string);
                client.query(query_string, (err, res) => {
                    if (err) throw err;
                    
                  for (let row of res.rows) {
                    bot.sendMessage({
                        to: channelID,
                        message: JSON.stringify(row)
                    });
                  }
                    
                    //console.log(JSON.stringify(row));
                    client.end();
                });
            break;
                
            case 'set':
                client.connect();
                //'SELECT * FROM user_intro;'
                //'INSERT INTO user_intro ('') VALUES (userID, "online", "whats new?", "boop");'
                //{"user_id":1,"user_state":"online","user_data":"hello","user_command":"greet"}
                var query_string = 'INSERT INTO user_intro (user_id, user_state, user_data, user_command) VALUES ('+parseInt(userID)+', \'heyoo\', \'whats new?\', \'boop\');'
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
