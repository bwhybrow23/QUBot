const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let warns = JSON.parse(fs.readFileSync("./warnings.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  
  let staffRole = message.guild.roles.find("id", "465556876935954442");
  console.log(staffRole);
  let seniorStaffRole = message.guild.roles.find("name", "Senior Staff");

  let warnHelpEmbed = new Discord.RichEmbed()
      .setColor("GREEN")
      .setTitle("Command: Warn")
      .addField("Description:", "Warns the specified user", true)
      .addField("Usage", ".warn @<user> <reason>", true)
      .addField("Example", ".warn @Stentorian#1202 Spamalam")
      .addField("Note", "Warning does nothing to the user, it just keeps a record of the warnings.");

  //.warn @user <reason>
  if (!message.member.roles.has(staffRole)) return message.channel.send ("Insufficient permissions");
  let wUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0])
  if(!wUser) return message.channel.send(warnHelpEmbed);
  if(wUser.roles.has(staffRole)) return message.reply("They cannot be warned! Tough luck!");
  let reason = args.join(" ").slice(22);

  if(!warns[wUser.id]) warns[wUser.id] = {
  warns: 0
};

  warns[wUser.id].warns++;

  fs.writeFile("./warnings.json", JSON.stringify(warns), (err) => {
    if (err) console.log(err);
  });

  let warnEmbed = new Discord.RichEmbed()
  .setDescription("Warns")
  .setColor("RED")
  .addField("Warned by", `<@${message.author.id}> with ID: ${message.author.id}`)
  .addField("Warned User", `${wUser} with ID ${wUser.id}`)
  .addField("Warned In", message.channel)
  .addField("Number of Warnings", warns[wUser.id].warns)
  .addField("Reason", reason || "Not given");

  let warnchannel = message.guild.channels.find(`name`, "logs");
  if(!warnchannel) return message.reply("Logs channel needs to be created! #logs")

  message.delete().catch(O_o => {});
  warnchannel.send(warnEmbed);
  message.channel.send(`${wUser} has been warned for **${reason || "No reason given"}**`);
}

module.exports.help = {
  name: "warn"
}
