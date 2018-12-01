const Discord = require("discord.js")

  module.exports.run = async (bot, message, args) => {
    message.guild.fetchBans()
      .then(bans => message.channel.send(`Quest Universe has ${bans.size} bans in total!`))
      .catch(console.error);

      message.delete().catch(O_o => {});

  }

  module.exports.help = {
    name: "bans"
  }
