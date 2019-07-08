const Bot = require('./struct/Bot')

Bot().then(bot => {
  module.exports = bot
  require('./bot_context/raids');
  require('./events/message')
}).catch(error => console.log(error))


// // guild battle
// /////////////////////////////////////////////////////////////////////
// /*
// var guild_battle = new cron.CronJob({
//   cronTime: '00 23 * * 6',
//   onTick: function() {
//     bot.sendMessage({
//       to: '404465250033991694',
//       message: '**GUILD BATTLE IS STARTING**'
//     });
      
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });
// */
// // cooking contest
// /////////////////////////////////////////////////////////////////////
// var chef_examination_1 = new cron.CronJob({
//   cronTime: '00 13,23 * * 6',
//   onTick: function() {
//     bot.sendMessage({
//       to: '409032469959016449',
//       message: 'Chef Exam is starting on channel 3'
//     });
      
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });

// /*
// var cooking_contest_1 = new cron.CronJob({
//   cronTime: '00 23 * * 6',
//   onTick: function() {
//     bot.sendMessage({
//       to: '404465250033991694',
//       message: 'Chef Exam is starting on channel 3'
//     });
      
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });
// */

// // preliminary and final jousting
// /////////////////////////////////////////////////////////////////////
// var pre_jousting_time_1 = new cron.CronJob({
//   cronTime: '00 01 * * 1-6',
//   onTick: function() {
//     bot.sendMessage({
//       to: '409032469959016449',
//       message: 'Preliminary Jousting begins'
//     });
      
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });

// var pre_jousting_time_2 = new cron.CronJob({
//   cronTime: '00 22 * * 1-6',
//   onTick: function() {
//     bot.sendMessage({
//       to: '409032469959016449',
//       message: 'Preliminary Jousting begins'
//     });
      
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });

// var final_jousting_time = new cron.CronJob({
//   cronTime: '00 22 * * 7',
//   onTick: function() {
//     bot.sendMessage({
//       to: '409032469959016449',
//       message: 'Finals for Jousting begins on channel 2'
//     });
      
//   },
//   start: true,
//   timeZone: 'America/New_York'
// });





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