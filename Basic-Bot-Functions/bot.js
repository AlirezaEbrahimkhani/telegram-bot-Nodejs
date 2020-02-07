const  Telegraf = require('telegraf');

const bot = new Telegraf('1025160257:AAHMFYeiqHLJUmFGqSm60FbDlVnCl7hgiT8');

//code 

bot.help((ctx) => {
    ctx.reply("you have entered help button")
})

bot.settings((ctx) => {
    ctx.reply("you have entered setting button")
})

bot.command(["test" , "Test"] , (ctx) => {
    ctx.reply("Hello world !");
})

bot.hears("cow" , (ctx) => {
    ctx.reply("MOOOOO ! :|");
})

bot.on("sticker" , (ctx) => {
    ctx.reply("You sent sticker to " + ctx.botInfo.username);
})

bot.mention("basicFunctionBot" , (ctx) => {
    ctx.reply("mention method called")
})

bot.phone("09198438113" , (ctx) => {
    ctx.reply("phone method called")
})

bot.hashtag("AlirezaEbrahimkhani" , (ctx) => {
    ctx.reply("hastag method called")
})

bot.use((ctx , next) => {
    ctx.state.Alireza = 5
    ctx.reply(ctx.from.first_name + " now use the bot :|");
    next(ctx);
})

bot.start((ctx) => {
    // ctx.reply(ctx.from.first_name + " have entered start button and it is " + ctx.updateSubTypes[0])
    ctx.reply(ctx.state.Alireza)
})

bot.command("start" , ctx => {
    bot.telegram.sendMessage(ctx.chat.id , "hello World !" , 
    {
        parse_mode : 'Markdown',
        disable_notification : true
    });
})


bot.launch();