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
