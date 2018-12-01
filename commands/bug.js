const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let bug = args.slice(0).join(" ");

    let bugHelpEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Command: Bug")
    .addField("Description:", "Report any bugs for the developers to fix!", true)
    .addField("Usage", ".bug <bug>", true)
    .addField("Example", ".bug Member role has Admin permissions")
    .addField("Note", "All bugs will be reported to high staff and will be fixed as soon as possible. We are grateful for all reports of bugs and exploits and any abuse of this command will result in a punishment!");
  
    if (args.length === 0)
    return message.channel.send(bugHelpEmbed);
  
    message.delete().catch(O_o => {});
  
    let suggestEmbed = new Discord.RichEmbed()
    .setDescription(`Bug from ${message.author}!`)
    .setColor(RED)
    .addField("Bug",`${bug}`)
    .addField("Bug Reported By", `${message.author.username}`);
  
    let bugChannel = message.guild.channels.find(`name`, "bugs");

}

module.exports.help = {
  name: "bug"
}
