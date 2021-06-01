const { DiscordAPIError } = require("discord.js")

module.exports = {
    commands: ['zeekz'],
    // permissions: 'ADMINISTRATOR',
    // permissionError: 'This command is restricted due to us being in the development phase.',
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
        let user = '587499208937046036'

        const Discord = require('discord.js')

        const client = new Discord.Client ()

        client.users.cache.get(user).send('Under the direction of a staff/management member you have been required create a ticket to answer questions abour your presence in the server.\n\n*Vertix Management Team*')


    },
  }