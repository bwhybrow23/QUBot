const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (bot, message, args) => {
  
  let staffRole = message.guild.roles.find("name", "Staff");
  let seniorStaffRole = message.guild.roles.find("name", "Senior Staff");

  let toUnmute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!toUnmute) return message.channel.send("You need to mention a user to be unmuted!");
  let muterole = message.guild.roles.find(`name`, "muted");
  
  if(!message.member.roles.has(staffRole)) return message.channel.send("Insufficient Permissions");

    if(!toUnmute.hasRole(muterole.id)) return message.channel.send(`${toUnmute.id} isn't muted!`);

    await(toUnmute.removeRole(muterole.id));
    message.reply(`<@${toUnmute.id}> has been unmuted by <@${message.author.id}>`);

    await(toUnmute.removeRole(muterole.id));
    message.reply(`<@${toUnmute.id}> has been unmuted by <@${message.author.id}>`);

};

module.exports.help = {
  name: "unmute"
}
