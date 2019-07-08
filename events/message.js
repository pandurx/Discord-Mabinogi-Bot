const bot = require('../bot.js')

bot.on('message', function (user, userID, channelID, message, evt) {
    
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

            case 'test':
                bot.sendMessage({
                  to: channelID,
                  message: 'Raid Channel Id ' + raidChannelId
                })
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
/*              bot.on('message', message => {
                message.channel.send("Consult the following Infographic on White Dragon Luring strategy", {
                  files: ["https://photos.app.goo.gl/Bv9jB22ygLMGCEGc9"]
                });
              });
*/
              bot.sendMessage({
                to: channelID,
                message: 'Consult the following Infographic on White Dragon Luring strategy: https://photos.app.goo.gl/Bv9jB22ygLMGCEGc9'
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
                    message: '`commands will always begin with the exclamation mark! then ping, flirt, dailies, daily, help, roll, time, raid, contact, flip`'
                });
            break;
            
	    case 'flip':
              var coin = '';
                if ( Math.floor(Math.random() * Math.floor(100)) > 50 ) {
                  coin = 'heads'; 
                } else { 
                  coin = 'tails'; 
                }
                bot.sendMessage({
                    to: channelID,
                    message: 'You flipped ' + coin + '.'
                });
                
            break;
			
      case 'roll':
                bot.sendMessage({
                    to: channelID,
                    message: 'You rolled ' + Math.floor(Math.random() * Math.floor(100)) + ' ... '
                });
                
            break;
      case 'announce_hasidim_raid':
            bot.sendMessage({
                to: channelID,
                message: 'HASIDIM RAID'
            });
            
        break;
      case 'future':
            
            /*axios.get('https://api.github.com/repos/pandurx/pandurx-bot/issues?state=open')
            .then(function (response) {
              bot.sendMessage({
                to: channelID,
                message: 'CURRENT ITEMS' + response
              });
            
            })
            .catch(function (error) {
              bot.sendMessage({
                to: channelID,
                message: 'NOPE! CURRENT ITEMS'
              });
            
            });*/
           
            break;

      case 'releases':
            bot.sendMessage({
                to: channelID,
                message: 'RELEASES'
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

                
		  case 'update':

                bot.sendMessage({
                    to: channelID,
                    message: 'April 15 2019 9:20PM EDT'
                });
            break;
            // Just add any case commands if you want to..
         }
     }
    });

    
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