var token = require('./token.js')
var TelegramBot = require('node-telegram-bot-api')


var bot = new TelegramBot(token, {polling: true})

bot.onText(/\/start$/, (msg, match) => {
  "use strict"
  console.log(msg)
  let fromId = msg.from.id
  bot.sendMessage(fromId, 'Hola Meetup!!')
})

bot.onText(/\/textosimple$/, (msg, match)=>{
  "use strict"
  let fromId = msg.from.id
  let text = match[0]
  bot.sendMessage(fromId, 'Como has digitado:' + text + ', te devuelvo un texto simple')
})
