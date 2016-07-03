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
  const fromId = msg.from.id
  let text = match[0]
  bot.sendMessage(fromId, 'Como has digitado:' + text + ', te devuelvo un texto simple')
})

bot.onText(/\/textomenu$/, (msg, match)=>{
  "use strict"
  const fromId = msg.from.id
  let text = match[0]
  let keyboard = [['Opcion 1 \uD83C\uDF63','Opcion 2 \uD83C\uDF75'],['Opcion 3 \uD83C\uDF63','Opcion 4 \uD83C\uDF75']]
  let reply_markup = {'keyboard':keyboard, 'resize_keyboard':true, 'one_time_keyboard': true, 'selective': true}
  let options = {'reply_markup':reply_markup}
  bot.sendMessage(fromId,'Como has digitado:' + text + ', te devuelvo un menu de opciones',options)
})

bot.onText(/\/imagen$/, (msg, match)=>{
  "use strict"
  const fromId = msg.from.id
  let text = match[0]
  let caption = 'Como has digitado:' + text + ', te devuelvo una imagen'
  let options = {'caption':caption}
  bot.sendPhoto(fromId, 'imagen.jpg', options)
})
