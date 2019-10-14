const bot = require('../bot.js')

// synchronous GET function @TODO swap it with an asynchronous method
// @TODO use axios
function httpGet(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, false); // false for synchronous request
    request.send(null);
    return request.responseText;
}

bot.on('message', function (user, userId, channelId, message, event) {
    if (message.startsWith('!')) {
        // TODO implement more commends
        var command = message.substring(1);
        
        switch(command) {
            case 'help': 
                bot.sendMessage({
                    to: channelId,
                    message: 'bot will respond with prefix exclamation mark, setup; ping; roll'
                });
            break;

            case 'dev-issues':
                let response = httpGet("https://api.github.com/repos/pandurx/mabinogi-bot/issues?state=open");
                let filtered = response.map(x => x.url);
                bot.sendMessage({
                    to: channelId,
                    message: 'list of open issues ' + JSON.stringify(filtered);
                });
            break;

            case 'white-dragon':
                let infographic = 'https://github.com/pandurx/mabinogi-bot/blob/add-help-cmd/infographics/iria_raid_wd_info.png';
                message.channel.send("Please consult the infographic for Luring strategy", {
                    file: infographic
                  });
            break;

            case 'setup':
                bot.sendMessage({
                    to: channelId,
                    message: 'scheduled-raids, scheduled-events, integration-raid'
                });               
            break;

            case 'ping':
                bot.sendMessage({
                    to: channelId,
                    message: 'Pong!'
                });
            break;

            case 'roll':
                bot.sendMessage({
                    to: channelId,
                    message: 'You rolled ' + Math.floor(Math.random() * Math.floor(100)) + '.'
                });
            break;
        }
    }
});