const bot = require('../bot.js')

bot.on('message', function (user, userId, channelId, message, event) {
    if (message.startsWith('!')) {
        // TODO implement more commends
        var command = message.substring(1);
        
        switch(command) {
            case 'ping':
                bot.sendMessage({
                    to: channelId,
                    message: 'Pong!'
                });
            break;
        }
    }
});
