'use strict'
var usuario = require('./usuarios.js')
var token = require('./token')
var TelegramBot = require('node-telegram-bot-api')
var bot = new TelegramBot(token, {polling: true})

let keyboard = [['A'],['E']]
let reply_markup = {'keyboard':keyboard, 'resize_keyboard':true, 'one_time_keyboard': true, 'selective': true}
let options = {'reply_markup':reply_markup}

usuario.find({},(error,users)=>{
  for(var i=0;i < users.length;i++){
    bot.sendMessage(users[i]._id, 'En las proximas elecciones si fueras vocal de mesa ¿Cual serias?',options)
  }
})
