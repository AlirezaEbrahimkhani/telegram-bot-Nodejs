const Telegraf = require('telegraf')

const bot = new Telegraf('974246522:AAHCddzjyNfgLyhvLhp93bUa_-WZcDSW_7Q');

const helpMessage = `
Say somthing to me Please :
/start - start the bot
/help - command refrence
`

bot.use((ctx , next) => {
    //log the sender in the group

    if(ctx.updateSubTypes[0] == "text"){
        if(Object.keys(ctx.from).includes("username")){
            bot.telegram.sendMessage(-356034787 , ctx.from.username + " said: " + ctx.message.text + " to the bot")
        }else{
            bot.telegram.sendMessage(-356034787 , ctx.from.first_name + " said: " + ctx.message.text + " to the bot")
        }
    }else{
        if(Object.keys(ctx.from).includes("username")){
            bot.telegram.sendMessage(-356034787 , ctx.from.username + " sent: " + ctx.updateSubTypes[0] + " to the bot")
        }else{
            bot.telegram.sendMessage(-356034787 , ctx.from.first_name + " sent: " + ctx.updateSubTypes[0] + " to the bot")
        }
    }
    next();
})

bot.start((ctx) => {
    ctx.reply("Hello i am echo bot >_-");
    ctx.reply(helpMessage)
})

bot.help((ctx) => {
    ctx.reply(helpMessage)
})

bot.command("echo" , (ctx) => {
    let input  = ctx.message.text;

    let inputArray = input.split(" ");

    let message = "";

    if(inputArray.length == 1){
        message = "You entered echo command";
    }else{
        inputArray.shift();
        message = inputArray.join(" ");
    }

    ctx.reply(message);
})

bot.launch();