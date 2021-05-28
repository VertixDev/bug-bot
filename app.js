const path = require('path')
const fs = require('fs')
const Discord = require('discord.js')
const config = require('./config.json');
const mongoose = require('mongoose') 
const chalk = require('chalk')

const client = new Discord.Client({
    fetchAllMembers: false,
    restTimeOffset: 0,
    restWsBridgetimeout: 100,
    disableEveryone: true,
    partials: ['MESSAGE', 'CHANNEL', 'REACTION']
});

client.mongoose = require('./registries/mongoose.js');

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