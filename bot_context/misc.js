const bot = require('../bot.js')
const cron = require('cron');

var guild_battle = new cron.CronJob({
	cronTime: '00 23 * * 6',
  	onTick: function() {
		for (x in bot.misc) {
      		bot.sendMessage({
        		to: bot.raid[x],
        		message: 'Guild Battle Started'
      		});
    	}
  	},
  	start: true,
  	timeZone: 'America/New_York'
});

var chef_examination = new cron.CronJob({
  	cronTime: '00 13,23 * * 6',
  	onTick: function() {
	  	for (x in bot.misc) {
			bot.sendMessage({
		  		to: bot.raid[x],
		  		message: 'Chef Exam Started on Channel 3'
			});
  		}
  	},
  	start: true,
  	timeZone: 'America/New_York'
});

var pre_jousting = new cron.CronJob({
	cronTime: '00 01 * * 1-6',
  	onTick: function() {
		for (x in bot.misc) {
			bot.sendMessage({
			  	to: bot.raid[x],
			  	message: 'Preliminary Jousting Begins'
			});
		}
  	},
  	start: true,
  	timeZone: 'America/New_York'
});

var pre_jousting_time_2 = new cron.CronJob({
  	cronTime: '00 22 * * 1-6',
  	onTick: function() {
		for (x in bot.misc) {
			bot.sendMessage({
				to: bot.raid[x],
				message: 'Preliminary Jousting Begins'
			});
		}
  	},
  	start: true,
  	timeZone: 'America/New_York'
});

var final_jousting_time = new cron.CronJob({
  	cronTime: '00 22 * * 7',
  	onTick: function() {
		for (x in bot.misc) {
			bot.sendMessage({
				to: bot.raid[x],
				message: 'Preliminary Jousting Begins'
			});
		}
  	},
  	start: true,
  	timeZone: 'America/New_York'
});

