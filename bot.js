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


// guild battle
/////////////////////////////////////////////////////////////////////
/*
var guild_battle = new cron.CronJob({
  cronTime: '00 23 * * 6',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: '**GUILD BATTLE IS STARTING**'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});
*/
// cooking contest
/////////////////////////////////////////////////////////////////////
var chef_examination_1 = new cron.CronJob({
  cronTime: '00 13,23 * * 6',
  onTick: function() {
    bot.sendMessage({
      to: '409032469959016449',
      message: 'Chef Exam is starting on channel 3'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

/*
var cooking_contest_1 = new cron.CronJob({
  cronTime: '00 23 * * 6',
  onTick: function() {
    bot.sendMessage({
      to: '404465250033991694',
      message: 'Chef Exam is starting on channel 3'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});
*/

// preliminary and final jousting
/////////////////////////////////////////////////////////////////////
var pre_jousting_time_1 = new cron.CronJob({
  cronTime: '00 01 * * 1-6',
  onTick: function() {
    bot.sendMessage({
      to: '409032469959016449',
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
      to: '409032469959016449',
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
      to: '409032469959016449',
      message: 'Finals for Jousting begins on channel 2'
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
      to: '409032469959016449',
      message: 'Yeti Raid will be starting in Physis'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var giant_sandworm_raid_1 = new cron.CronJob({
  cronTime: '00 13,02 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '409032469959016449',
      message: 'Giant Sandworm Raid will be starting @ Central Muyu Desert'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var giant_sandworm_raid_1B = new cron.CronJob({
  cronTime: '00 13,02 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
      to: '409032469959016449',
      message: 'Red Dragon Raid will be starting @ Raspa Volcano'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var red_dragon_raid_1T = new cron.CronJob({
  cronTime: '00 19,00 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '440665629620699138',
      message: 'Red Dragon Raid will be starting @ Raspa Volcano'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var red_dragon_raid_1B = new cron.CronJob({
  cronTime: '00 19,00 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
      to: '409032469959016449',
      message: 'White Dragon Raid will be starting @ Flightless Bird Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var white_dragon_raid_1T = new cron.CronJob({
  cronTime: '30 14,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '440665629620699138',
      message: 'White Dragon Raid will be starting @ Flightless Bird Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var white_dragon_raid_1T = new cron.CronJob({
  cronTime: '30 14,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
      to: '409032469959016449',
      message: 'Black Dragon Raid will be starting @ Scorpion Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var black_dragon_raid_1T = new cron.CronJob({
  cronTime: '00 14,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '440665629620699138',
      message: 'Black Dragon Raid will be starting @ Scorpion Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var black_dragon_raid_1B = new cron.CronJob({
  cronTime: '00 14,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
      to: '409032469959016449',
      message: 'Desert Dragon Raid will be starting @ Sheep Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_raid_1T = new cron.CronJob({
  cronTime: '30 13 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '440665629620699138',
      message: 'Desert Dragon Raid will be starting @ Sheep Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_raid_1B = new cron.CronJob({
  cronTime: '30 13 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
      to: '409032469959016449',
      message: 'Desert Dragon Raid will be starting @ Sheep Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_raid_2T = new cron.CronJob({
  cronTime: '00 20 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '440665629620699138',
      message: 'Desert Dragon Raid will be starting @ Sheep Mark'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_raid_2B = new cron.CronJob({
  cronTime: '00 20 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
      to: '409032469959016449',
      message: 'Prairie Dragon Raid will be starting @ Maiz Prairie'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var prairie_dragon_raid_1T = new cron.CronJob({
  cronTime: '00 18,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '440665629620699138',
      message: 'Prairie Dragon Raid will be starting @ Maiz Prairie'
    });
      
  },
  start: true,
  timeZone: 'America/New_York'
});

var prairie_dragon_raid_1B = new cron.CronJob({
  cronTime: '00 18,22 * * 1-7',
  onTick: function() {
    bot.sendMessage({
      to: '554150587705458708',
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
	    
});


// helper function: translates the dailies
/////////////////////////////////////////////////////////////////////
function translateDailies(vdaily) {
	vdaily = vdaily.replace("\\ud0c8\\ud2f4 \\uc810\\ub839\\uc804 II", "Battle for Taillteann II");
	vdaily = vdaily.replace("\\ud0c8\\ud2f4 \\uc810\\ub839\\uc804 I", "Battle for Taillteann I");
	vdaily = vdaily.replace("\\ud0c8\\ud2f4 \\ubc29\\uc5b4\\uc804", "Taillteann Defensive Battle");
	vdaily = vdaily.replace("\\ud3ec\\uc6cc\\ub974 \\ucee4\\ub9e8\\ub354 \\ud1f4\\uce58 II", "Defeat Fomor Commander II");
	vdaily = vdaily.replace("\\ud3ec\\uc6cc\\ub974 \\ucee4\\ub9e8\\ub354 \\ud1f4\\uce58 I", "Defeat Fomor Commander I");
	vdaily = vdaily.replace("\\uc0c8\\ub3c4\\uc6b0 \\uc704\\uc790\\ub4dc \\ud1f4\\uce58", "Defeat the Shadow Wizard");
	vdaily = vdaily.replace("\\uc81c\\ubb3c", "Offering");
	vdaily = vdaily.replace("\\uc815\\ucc30\\ubcd1 \\uad6c\\ucd9c", "Rescue the Scout");
	vdaily = vdaily.replace("\\ub3c4\\ubc1c", "Provocation");
	vdaily = vdaily.replace("\\ub3c4\\ub80c\\uc758 \\ubd80\\ud0c1", "Dorren's Request");
	
	vdaily = vdaily.replace("\\uadf8\\ub4e4\\uc758 \\ubc29\\uc2dd", "Their Method");
	vdaily = vdaily.replace("\\uadf8\\ub9bc\\uc790 \\uc138\\uacc4\\uc758 \\uc720\\ud669\\uac70\\ubbf8", "The Sulfur Spider inside Shadow Realm");
	vdaily = vdaily.replace("\\ud30c\\ub974\\ud640\\ub860\\uc758 \\uc720\\ub839", "Ghost of Partholon");
	vdaily = vdaily.replace("\\ud3ec\\uc6cc\\ub974\\uc758 \\uc2b5\\uaca9", "Fomor Attack");
	vdaily = vdaily.replace("\\ub610 \\ub2e4\\ub978 \\uc5f0\\uae08\\uc220\\uc0ac\\ub4e4", "The Other Alchemists");
	vdaily = vdaily.replace("\\ub0a8\\uc544\\uc788\\ub294 \\uc5b4\\ub460", "Lingering Darkness");
	vdaily = vdaily.replace("\\ub4f1 \\ub4a4\\uc758 \\uc801", "Enemy Behind");
	vdaily = vdaily.replace("\\uadf8\\ub9bc\\uc790\\uac00 \\ub4dc\\ub9ac\\uc6b4 \\ub3c4\\uc2dc", "Shadow Cast City");
	vdaily = vdaily.replace(/["]+/g, "");
	return vdaily;
}



/*bot.on("presenceUpdate", (oldMember, newMember) => {
    if(oldMember.presence.status !== newMember.presence.status){
        console.log(`${newMember.user.username} is now ${newMember.presence.status}`);
    }
});*/


// pick up lines
/////////////////////////////////////////////////////////////////////
var pick_up_lines = [
	'Are you a magician? Because whenever I look at you, everyone else disappears!',
	'I am not a photographer, but I can picture me and you together.',
	'Are you religious? Because you are the answer to all my prayers.',
	'You do not need keys to drive me crazy.',
	'Is it hot in here or is it just you?',
	'Hello. Cupid called. He wants to tell you that he needs my heart back.'
];


// greeting users (optional)
/////////////////////////////////////////////////////////////////////
bot.on("presence", function (user, userid, status, gameid) {
        
    bot.sendMessage({
      to: '535282907074396161',
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

            case 'flirt':
            	var randomInt = Math.floor(Math.random() * Math.floor(5))
            	var line = pick_up_lines[randomInt];
                  bot.sendMessage({
                    to: channelID,
                    message: '~ ' + line + ' ~'
                  });
            break;

            case 'wd-lure':
              /*bot.on('message', message => {
                message.channel.send("Consult the following Infographic on White Dragon Luring strategy", {
                  files: ["https://raw.githubusercontent.com/pandurx/pandurx-bot/wd-information/infographics/iria_raid_wd_info.png"]
                });
              });*/

              bot.sendMessage({
                to: channelID,
                message: 'Consult the following Infographic on White Dragon Luring strategy: https://www.dropbox.com/s/97ah826x0a3y04e/iria_raid_wd_info.png?dl=0'
              });

            break;

            case 'dailies':
            case 'daily':
            	var url = "https://mabi-api.sigkill.kr/get_todayshadowmission/2018-1-26?ndays=1";
            	bot.sendMessage({
                    to: channelID,
                    message: 'Work in progress...!'
                });
            break;

            case 'help':
                bot.sendMessage({
                    to: channelID,
                    message: '`commands will always begin with the exclamation mark! then ping, flirt, dailies, daily, help, roll, time, raid, contact`'
                });
            break;

            case 'contact':
                bot.sendMessage({
                    to: channelID,
                    message: '`this bot is self-hosted and in no way official tool for nexon, and is still work in progress. you can contact **Pandurx** for more information or report any issues relating to the bot`'
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
                    message: 'The current time is ' + time.toLocaleString('en-US', {timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', hour12: false }) + ' EST'
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

		case 'update':

                bot.sendMessage({
                    to: channelID,
                    message: 'April 15 2019 8:17PM EDT'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
});
