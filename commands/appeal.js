const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.send("I'm afraid that there is no way to appeal a ban at the moment. If you think this is wrong please contact Stentorian#1202");
}

module.exports.help = {
  name: "appeal"
}
