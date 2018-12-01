const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let ipEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription("The server is still in development so you will not be able to join.")
  .addField("IP", "play.questuniverse.tk")
  .addField("Version", "Currently we will only be supporting 1.12.2 on release due to lack of compatibilty with some plugins but hopefully in the future we will be able to go all the way back to 1.8.9!")
  .addField("Rules", "`.rules server`");

  message.channel.send(ipEmbed);

}

module.exports.help = {
  name: "ip"
}
