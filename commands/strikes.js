const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  
  let staffRole = message.guild.roles.find("name", "Staff");
  let srMod = message.guild.roles.find("name", "Sr. Mod");

  let strikesEmbed = new Discord.RichEmbed()
  .setDescription("You can check out the Strikes sheet here! https://docs.google.com/spreadsheets/d/1QtlvkX5FCj2f8jzsm7svDpfQEWGSKxmDBOKHkdVtZfE/edit?usp=sharing")
  .setColor("GREEN");
  
  if(message.channel.id == 465570721398128651) return message.author.send(strikesEmbed);
  else{message.channel.send("You must do this command in #high-staff-chat")};

}

module.exports.help = {
  name: "strikes"
}
