const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  message.channel.send("Check out our store at: https://qus.buycraft.net!")

}

module.exports.help = {
  name: "store"
}
