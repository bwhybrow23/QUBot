const Discord = require("discord.js");

exports.run = (bot, message, args) => {
  message.delete();
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send("Insufficient Permissions to do this!");

  const customEmbed = new Discord.RichEmbed()
    .setDescription(args.join(" "))
    .setColor("#26ff00");
    
  message.channel.send(customEmbed);
};

exports.help = {
  name: 'embed'
};
