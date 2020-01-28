const Bot = require('./struct/Bot')

Bot().then(bot => {
    module.exports = bot
    require('./bot_context/raids');
    require('./bot_context/misc');
    require('./bot_context/user-raids');
    require('./events/message')
}).catch(error => console.log(error))


