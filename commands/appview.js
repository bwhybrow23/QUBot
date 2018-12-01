const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let appviewEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("View Applications")
  .addField("Helper", "https://docs.google.com/forms/d/1lzodQEnQUXJgoTMbeIybJBFJctVJYV_3U9ptB63lZ14/edit?usp=sharing")
  .addField("Builder", "https://docs.google.com/forms/d/1N387JBpKWQ496fgEFMOK-tgEE6zszEwgnlW-OCmgfKU/edit?usp=sharing");

  if(message.channel.id == 465570721398128651) return message.author.send(appviewEmbed);
  else{message.channel.send("You must do this command in #high-staff-chat")};

}

module.exports.help = {
  name: "appview"
}
