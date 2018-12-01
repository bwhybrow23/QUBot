const Discord = require("discord.js");

module.exports.run = async (bot, message, args, level) => {

  let suggestion = args.slice(0).join(" ");

  let suggestHelpEmbed = new Discord.RichEmbed()
  .setColor("GREEN")
  .setTitle("Command: Suggest")
  .addField("Description:", "Suggest something to be added to the server!", true)
  .addField("Usage", ".suggest <suggestion>", true)
  .addField("Example", ".suggest Cool Commands for the Bot")
  .addField("Note", "People can vote on your suggestion in #suggestions and which ever has the most votes will be added!");

  if (args.length === 0)
  return message.channel.send(suggestHelpEmbed);

  message.delete().catch(O_o => {});

  let suggestEmbed = new Discord.RichEmbed()
  .setDescription(`Suggestion from ${message.author}!`)
  .setColor("GREEN")
  .addField("Suggestion",`${suggestion}`)
  .setFooter(`Suggestion From: ${message.author.username}`, `${message.author.avatarURL}`)

  let suggestionChannel = message.guild.channels.find(`name`, "suggestions-and-polls");

  suggestionChannel.send(suggestEmbed).then(msg => {
    msg.react(`494946973112074251`)
    msg.react(`494946974228021248`)
});
};

module.exports.help = {
    name: "suggest"
}