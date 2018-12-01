const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  let bicon = bot.user.avatarURL;
  let botembed = new Discord.RichEmbed()
      .setDescription("Bot Information")
      .setColor("GREEN")
      .setThumbnail(bicon)
      .addField("Bot Name", bot.user.username)
      .addField("Owned By", "Stentorian#1202")
      .addField("Created On", bot.user.createdAt)
      .addField("Created For", "Quest Universe");

      message.channel.send(botembed);
}

module.exports.help = {
  name: "botinfo"
}
