const  Telegraf = require('telegraf');

const bot = new Telegraf('1025160257:AAHMFYeiqHLJUmFGqSm60FbDlVnCl7hgiT8');

//code 

bot.start((ctx) => {
    ctx.reply("You have entered start button")
})

bot.help((ctx) => {
    ctx.reply("you have entered help button")
})

bot.settings((ctx) => {
    ctx.reply("you have entered setting button")
})

bot.launch();