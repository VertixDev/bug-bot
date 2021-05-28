 module.exports = {
    commands: ['report', 'newbug'],
    permissions: 'ADMINISTRATOR',
    expectedArgs: '<bug> <message>',
    permissionError: 'This command is restricted due to us being in the development phase.',
    minArgs: 0,
    maxArgs: 0,
    callback: async (message, arguments, text) => { 
    
    const config = require('../../config.json')

    let bug = arguments.splice(1).join(" ")

    const bugReportSchema = require("../../schema/bug-report-schema")
    
    if (bug == null) {
      return message.author.send('Please be sure to include a valid bug type. Valid bug types:\n```\nWebsite\nDiscord Bot\nHosting\nPartnerd Bot```');
    } else {
    
      let bugMessage = message.content.slice(config.prefix + 22 + 7) || null;

      if (bugMessage == null) {
        return message.author.send('Please include a description for this bug, eg: `Bug found <where> <when> <what you were doing> <date>` ')
      }

      let Avatar = message.author.displayAvatarURL({ dynamic: true, size: 512 });
      let clientAvatar = 'https://cdn.discordapp.com/attachments/713720334347534387/847968570239221790/bug-bot-profile-pic.png'
      

      let Channel = message.guild.channels.cache.find(
        (ch) => ch.name === "bug-reports"
      );
      if (!Channel)

        

      var puncode = "";
      var characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      var charactersLength = characters.length;
      for (var i = 0; i < 10; i++) {
        puncode += characters.charAt(Math.floor(Math.random() * charactersLength));
      }

      var pundate = new Date()
      var month = pundate.getMonth() + 1;
      pundate = month + "/" + pundate.getDate() + "/" + pundate.getFullYear() + " " + pundate.getHours() + ":" + pundate.getMinutes() + "(UTC+0)";

      await new bugReportSchema({
        authorId: message.author.id,
        code: puncode,
        type: "Bug Report",
        date: pundate,
        reason: bugMessage,
      }).save();

      var resultCode = await infractionsSchema.find({
        code: puncode,
      })

      let devTeamMessage = new Discord.MessageEmbed()
      .setTitle(`User Report`)
      .setDescription(
        `A Bug has been reported. `
      )
      .setColor('#2F3136')
      .setFooter(`${message.author.tag}`, clientAvatar)
      .addFields(
        { name: "Bug Type", value: `${bug}`, inline: false },
        { name: "Message", value: `\`${bugMessage.slice(1)}\``, inline: false },
        { name: "Sender", value: ` ${message.author} \n> \`Tag\` - ${message.author.tag}`, inline: false },
        { name: "Code", value: resultCode, inline: false},
        {
          name: "Date (M/D/Y)",
          value: `> ${new Intl.DateTimeFormat("en-US").format(Date.now())}`,
          inline: false,
        }
      )``
    
      
    Channel.send(Embed)
    message.author.send(`Bug has been reported with the code: \`${resultCode}\``)
    }
  },
}