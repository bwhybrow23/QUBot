const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let statusEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Status Pages")
  .addField("StenBot Development", "https://stendev.questuniverse.tk/")
  .addField("Quest Universe", "https://status.questuniverse.tk/");

  message.channel.send(statusEmbed);

}

module.exports.help = {
  name: "status"
}
