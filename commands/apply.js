const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let applyEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Open Applications")
  .setDescription("We have 2 applications open! Helper and Builder")
  .addField("Helper Application", "https://goo.gl/forms/blcjGC8JRw0Nf7f73")
  .addField("Builder Application", "https://goo.gl/forms/Mt8Ozj4qHSRsPE5L2");

  message.channel.send(applyEmbed);

}

module.exports.help = {
  name: "apply"
}
