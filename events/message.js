const bot = require('../bot.js')

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