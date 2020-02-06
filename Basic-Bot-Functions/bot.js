const  Telegraf = require('telegraf');

const bot = new Telegraf('1025160257:AAHMFYeiqHLJUmFGqSm60FbDlVnCl7hgiT8');

//code 

bot.start((ctx) => {
    ctx.reply(ctx.from.first_name + " have entered start button and it is " + ctx.updateSubTypes[0])
})

bot.help((ctx) => {
    ctx.reply("you have entered help button")
})

bot.settings((ctx) => {
    ctx.reply("you have entered setting button")
})

bot.command(["test" , "Test"] , (ctx) => {
    ctx.reply("Hello world !");
})

bot.launch();