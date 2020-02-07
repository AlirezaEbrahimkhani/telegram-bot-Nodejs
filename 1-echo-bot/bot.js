const Telegraf = require('telegraf')

const bot = new Telegraf('974246522:AAHCddzjyNfgLyhvLhp93bUa_-WZcDSW_7Q');

const helpMessage = `
Say somthing to me Please :
/start - start the bot
/help - command refrence
`

bot.start((ctx) => {
    ctx.reply("Hello i am echo bot >_-");
    ctx.reply(helpMessage)
})

bot.help((ctx) => {
    ctx.reply(helpMessage)
})

bot.launch();