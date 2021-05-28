const path = require('path')
const fs = require('fs')
const Discord = require("discord.js")
const config = require('./config.json');
const mongoose = require('mongoose') 
const chalk = require('chalk')

const client = new Discord.Client({
    fetchAllMembers: false,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    disableEveryone: true,
    intents: Discord.Intents.NON_PRIVILEGED,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

const disbut = require('discord-buttons')(client);


client.mongoose = require('./registries/mongoose.js');

// client.on("message", (message) => {
//   if(message.content === "!balls") {

//     let button = new disbut.MessageButton()
//     .setStyle('url') //default: blurple
//     .setLabel('You have small dick and balls!') //default: NO_LABEL_PROVIDED
//     .setID('bb')
//     .setURL("https://pornhub.com") //note: if you use the style "url" you must provide url using .setURL('https://example.com') 

//     message.channel.send("The below button is very very true", button)

//   }
// })


client.on('ready', async () => {
    console.log('Bot online')

    
    const baseFile = 'command-base.js'
    const commandBase = require(`./commands/${baseFile}`)

    const readCommands = (dir) => {
        const files = fs.readdirSync(path.join(__dirname, dir))
        for (const file of files) {
          const stat = fs.lstatSync(path.join(__dirname, dir, file))
          if (stat.isDirectory()) {
            readCommands(path.join(dir, file))
          } else if (file !== baseFile) {
            const option = require(path.join(__dirname, dir, file))
            commandBase(client, option)
          }
        }
      }
    
      readCommands('commands')
    })


client.mongoose.init
client.login(config.token);