const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(message.channel.id == 465570303486197791) return message.channel.send("Here is the GDPR Contact Sheet that is required to be filled out by all staff: https://docs.google.com/spreadsheets/d/1V52wVNFxBRoK-YwxzuxARLe7HC2PtTfNx2WjhRZVhE0/edit?usp=sharing");
  else{message.channel.send("You must do this command in #staff-chat")};

}

module.exports.help = {
  name: "gdprcontact"
}
