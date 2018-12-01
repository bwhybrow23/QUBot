const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let partnerEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription("Any server size accepted and 50+ members get @Ping and 100+ members get @everyone. Contact Stentorian#1202 to partner!");

  message.channel.send(partnerEmbed);
  
}

module.exports.help = {
  name: "partner"
}
