const bot = require('../bot.js')
const cron = require('cron');

// var test = new cron.CronJob({
//   cronTime: '* * * * *',
//   onTick: function() {
//     for (x in bot.raid) {
//       bot.sendMessage({
//         to: bot.raid[x],
//         message: 'Testing Cron ' + bot.raid[x]
//       });
//     }
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });

var yeti = new cron.CronJob({
  cronTime: '30 16,20 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Yeti Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});
  
var giant_sandworm = new cron.CronJob({
  cronTime: '00 13,02 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Giant Sandworm Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});

var red_dragon = new cron.CronJob({
  cronTime: '00 19,00 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Red Dragon Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});

var white_dragon = new cron.CronJob({
  cronTime: '30 14,22 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'White Dragon Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});

var black_dragon = new cron.CronJob({
  cronTime: '00 14,22 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Black Dragon Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});
  
var desert_dragon = new cron.CronJob({
  cronTime: '30 13 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Desert Dragon Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});

var desert_dragon_2 = new cron.CronJob({
  cronTime: '00 20 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Desert Dragon Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});

var prairie_dragon = new cron.CronJob({
  cronTime: '00 18,22 * * 1-7',
  onTick: function() {
    for (x in bot.raid) {
      bot.sendMessage({
        to: bot.raid[x],
        message: 'Prairie Dragon Raid Started'
      });
    }
  },
  start: true,
  timeZone: 'America/New_York'
});