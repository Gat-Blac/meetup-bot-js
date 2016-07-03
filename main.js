'use strict'
var token = require('./token')
var TelegramBot = require('node-telegram-bot-api')

var bot = new TelegramBot(token, {polling: true})

bot.onText(/\/start$/, (msg, match) => {
  console.log(msg)
  let fromId = msg.from.id
  bot.sendMessage(fromId, 'Hola Meetup!!')
})

bot.onText(/\/textosimple$/, (msg, match)=>{
  const fromId = msg.from.id
  let text = match[0]
  bot.sendMessage(fromId, 'Como has digitado:' + text + ', te devuelvo un texto simple')
})

bot.onText(/\/textomenu$/, (msg, match)=>{
  const fromId = msg.from.id
  let text = match[0]
  let keyboard = [['Opcion 1 \uD83C\uDF63','Opcion 2 \uD83C\uDF75'],['Opcion 3 \uD83C\uDF63','Opcion 4 \uD83C\uDF75']]
  let reply_markup = {'keyboard':keyboard, 'resize_keyboard':true, 'one_time_keyboard': true, 'selective': true}
  let options = {'reply_markup':reply_markup}
  bot.sendMessage(fromId,'Como has digitado:' + text + ', te devuelvo un menu de opciones',options)
})

bot.onText(/\/imagen$/, (msg, match)=>{
  const fromId = msg.from.id
  let text = match[0]
  let caption = 'Como has digitado:' + text + ', te devuelvo una imagen'
  let options = {'caption':caption}
  bot.sendPhoto(fromId, 'imagen.jpg', options)
})

bot.onText(/\/url$/, (msg,match)=>{
  const fromId = msg.from.id
  let options = {'parse_mode':'HTML'}
  let text = '<a href="http://www.gat-blac.com">Visita nuestra pagina</a>\n<code>var hola = "Hola";</code>'
  bot.sendMessage(fromId,text,options)
})

bot.onText(/\/pregunta$/, (msg,match)=>{
  const fromId = msg.from.id
  let reply_markup = {'force_reply':true}
  let options = {'reply_markup':reply_markup}
  bot.sendMessage(fromId, '¿De que equipo eres?',options).then(function (sended) {
    console.log(sended)
    var chatId = sended.chat.id
    var messageId = sended.message_id
    bot.onReplyToMessage(chatId, messageId, function (message) {
      console.log(message)
      bot.sendMessage(fromId, 'Respondiste:' + message.text)
    })
  })
})

bot.onText(/\/localizacion$/, (msg,match)=>{
  const fromId = msg.from.id
  let keyboard = [[{'text':'Enviar localización','request_location':true}]]
  let reply_markup = {'keyboard':keyboard, 'resize_keyboard':true, 'one_time_keyboard': true, selective:true}
  let options = {'reply_markup':reply_markup}
  bot.sendMessage(fromId, 'Enviame tu localizacion',options)
})
