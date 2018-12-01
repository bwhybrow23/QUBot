const botconfig = require("./botconfig.json");
const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const bot = new Discord.Client({disableEveryone: true});
bot.commands = new Discord.Collection();

//stuff for commands folder to work
fs.readdir("./commands/", (err, files) => {

            if (err) console.log(err)

            let jsfile = files.filter(f => f.split(".").pop() === "js")
            if (jsfile.length <= 0) {
                console.log("Couldn't find commands.");
                return;
            }

            jsfile.forEach((f, i) => {
                let props = require(`./commands/${f}`);
                console.log(`${f} loaded!`);
                bot.commands.set(props.help.name, props);
            });
});

//welcome message
bot.on("guildMemberAdd", async member => {
  console.log(`${member.id} joined the server.`);

  let welcomeChannel = member.guild.channels.find(`name`, "welcome-leave");
  if (!welcomeChannel) return console.log("Could not log a member joining as the server doesn't have a log channel!");
  let generalChannel = member.guild.channels.find(`name`, "general");
  if (!welcomeChannel) return generalChannel("Cannot log the member that has joined the server. Please create a channel called #welcome-leave. :smiley:");

  let welcomeEmbed = new  Discord.RichEmbed()
  .setColor("GREEN")
  .setDescription(`Welcome ${member} to Quest Universe! \n If you're interested, apply for staff or builder by doing .apply in #bot-commands!`)
  .setFooter("User Joined")
  .setTimestamp();

  welcomeChannel.send(welcomeEmbed);
});

//roles on join
bot.on("guildMemberAdd", function(member) {
    let memberRole = member.guild.roles.find("name", "Member");
    member.addRole(memberRole).catch(console.error);
  
    let pingRole = member.guild.roles.find("name", "Ping");
    member.addRole(pingRole).catch(console.error);
});

bot.on("guildMemberAdd", function(member) {
    let role = member.guild.roles.find("name", "Ping");
    member.addRole(role).catch(console.error);
});

//leave message
bot.on("guildMemberRemove", async member => {
  console.log(`${member.id} joined the server.`);

  let leaveChannel = member.guild.channels.find(`name`, "welcome-leave");
  if (!leaveChannel) return console.log("Could not log a member leaving as the server doesn't have a log channel!");
  let generalChannel = member.guild.channels.find(`name`, "general");
  if (!leaveChannel) return generalChannel("Cannot log the member that has left the server. Please create a channel called #welcome-leave. :smiley:");

  let leaveEmbed = new  Discord.RichEmbed()
  .setColor("RED")
  .setDescription(`${member} has sadly left the server! 😢`)
  .setFooter("User Left")
  .setTimestamp();

  leaveChannel.send(leaveEmbed);
});

//online message => console
bot.on("ready", async () => {
                console.log(`${bot.user.username} is online!`);
                bot.user.setActivity('on Quest Universe!', { type: 'PLAYING' });
});

//END OF LOGGING
bot.on("message", async message => {
  if (message.author.bot) return;
  //disable DM
  if (message.channel.dm === "dm") return;

  //variables to work bot
  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if (!message.content.startsWith(prefix)) return;
  let commandfile = bot.commands.get(cmd.slice(prefix.length));
  if (commandfile) commandfile.run(bot, message, args);

});

//LOGGING
bot.on('messageDelete', msg => {

  const logs = msg.guild.channels.find(channel => channel.name === "logs");

  let deleteMSGEmbed = new Discord.RichEmbed()
  .setColor("#ff00e1")
  .setThumbnail(msg.author.displayAvatarURL)
  .setAuthor(msg.author.tag)
  .setDescription(`**Message Deleted in <#${msg.channel.id}>**`)
  .addField("Message:", msg.content)
  .setTimestamp();

  logs.send(deleteMSGEmbed);
});

bot.on('messageUpdate', (omsg, nmsg) => {

  const logs = nmsg.guild.channels.find(channel => channel.name === "logs");

  let editMSGEmbed = new Discord.RichEmbed()
  .setColor("#ff00e1")
  .setThumbnail(nmsg.author.displayAvatarURL)
  .setAuthor(nmsg.author.tag)
  .setDescription(`**Message Edited in <#${nmsg.channel.id}>**`)
  .addField("Before:", omsg.content)
  .addField("After:", nmsg.content)
  .setTimestamp();

  logs.send(editMSGEmbed);
});

//so it actually works
bot.login(botconfig.token)
