module.exports = {
    commands: ['start', 'help', 'info'],
    minArgs: 0,
    maxArgs: 0,
    callback: (message, arguments, text) => {
      message.author.send('Here are some helpful links on getting started with the Vertix Bug Report System:\n\nHow do I submit a query?\nhttps://support.vertixstudios.com/en-us/articles/9781234567897\n\nBug Bot Commands:\nhttps://support.vertixstudios.com/en-us/articles/9781234567897\n')
    },
  }