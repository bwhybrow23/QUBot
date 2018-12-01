const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    let memberCountEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField('Members', `**${message.guild.memberCount}**`, true)
    .addBlankField(true)
    .addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
    .addField('Bots', `**${message.guild.members.filter(member => member.user.bot).size}**`, true)
    .addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`);
    
    message.channel.send(memberCountEmbed);

}

module.exports.help = {
  name: "membercount"
}
