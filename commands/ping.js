const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let recieverMember = message.author;
    let pingRole = message.guild.roles.find(`name`, "Ping");
    let pingRoleID = pingRole.id

    if(message.member.roles.find(r => r.name == "ping")){ message.member.removeRole(message.guild.roles.find(r => r.name == "ping")) }else{ message.member.addRole(message.guild.roles.find(r => r.name == "ping"))};

    let addPRole = new Discord.RichEmbed()
    .setDescription("You have successfully been given the ping role! To remove the ping role do `.ping` again!");

    let removePRole = new Discord.RichEmbed()
    .setDescription("You have been successfully removed from the ping role. To add it back again, do `.ping`!");

    if(message.member.roles.find(r => r.name == "ping")) return message.channel.send(addPRole);

    if(!message.member.roles.find(r => r.name == "ping")) return message.channel.send(removePRole);

}

module.exports.help = {
  //name: "ping"
}