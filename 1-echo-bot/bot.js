const Telegraf = require('telegraf')

const bot = new Telegraf('974246522:AAHCddzjyNfgLyhvLhp93bUa_-WZcDSW_7Q');

const helpMessage = `
Say somthing to me Please :
/start - start the bot
/help - command refrence
`

bot.use((ctx , next) => {
    if(ctx.updateSubTypes[0] == "text"){
        if(Object.keys(ctx.from).includes("username")){
            console.log(ctx.from.username + " said: " + ctx.message.text);
        }else{
            console.log(ctx.from.first_name + " said: " + ctx.message.text);
        }
    }else{
        if(Object.keys(ctx.from).includes("username")){
            console.log(ctx.from.username + " sent: " + ctx.updateSubTypes[0]);
        }else{
            console.log(ctx.from.first_name + " sent: " + ctx.updateSubTypes[0]);
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