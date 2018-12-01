const Discord = require("discord.js")

  module.exports.run = async (bot, message, args) => {
    
    //EMBEDS
    let categoriesEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .addField("QU Bot's Commands", "QU Bot's Prefix is `.`")
    .addField("Staff Commands", "`.help staff`", true)
    .addField("General Commands", "`.help general`", true)
    .addField("Fun Commands", "`.help fun`", true)
    .addField("Higher Staff Commands", "`.help hstaff`", true)
    .addField("Bot Owner Commands", "`.help botowner`", true);

    let staffEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Staff Commands")
    .setDescription("These commands are for Staff members or anyone that has permission on the server!")
    .addField("`.ban {@user} {reason}`", "Bans mentioned user from the server!")
    .addField("`.clear {number}`", "Clears the inputted amount of messages from the chat.")
    .addField("`.gdprcontact`", "Displays the spreadsheet for signing the GDPR Contact Form to keep us legal")
    .addField("`.kick @{user} {reason}`", "Kicks mentioned user from the server!")
    .addField("`.tempmute @{user} {time} {reason (optional)}`", "Mutes mentioned player for the specified time!")
    .addField("`.unmute @{user}`", "Unmutes a user from whatever mute punishment they have.")
    .addField("`.warn {@user} {reason`}", "Warns the mentioned member with a reason!")
    .addField("`.warns {@user}`", "Displays number of warns for the mentioned user!");

    let generalEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("General Commands")
    .setDescription("These are general commands that can be done on any server")
    .addField("`.appeal`", "Appeal any punishments.")
    .addField("`.apply`", "Application links.")
    .addField("`.bans`", "Displays the number of Discord bans on the server")
    .addField("`.botinfo`", "Displays all information about the bot")
    .addField("`.botping`", "Displays the API Latency and Ping of the bot.")
    .addField("`.bug`", "Report any bugs or exploits on the network.")
    .addField("`.donate`", "Help support the bot and donate to keep it going!")
    .addField("`.forum`", "Links to the forum.")
    .addField("`.help`", "Displays the Default Help Message")
    .addField("`.ip`", "Displays the IP for the Minecraft Server.")
    .addField("`.membercount`", "Displays the member count and status of all the members.")
    .addField("`.partner`", "Displays information on how to partner with Quest Universe.")
    .addField("`.paypal`", "Displays the PayPal link to donate to us.")
    .addField("`.report`", "Report a player to the staff")
    .addField("`.serverinfo`", "Displays information about the server")
    .addField("`.status`", "Links to the status pages of StenBot Development and Quest Universe.")
    .addField("`.store`", "Links to the Buycraft Store to buy things in game.")
    .addField("`.suggest`", "Suggest anything to be added to the network and allow the public to vote on it.");

    let funEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Fun Commands")
    .setDescription("These are commands just for fun!")
    .addField("`.8ball {question}`", "Ask the bot a question and it will give you an answer")
    .addField("`.cat`", "Sends a randomised photo of a CUTE LIL CAT!")
    .addField("`.dog`", "Sends a randomised photo of a CUTE LIL DOGGO!");

    let hstaffEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Higher Staff Commands")
    .setDescription("These commands are for Head Staff **ONLY** (Admin+)")
    .addField("`.appview`", "Views the current applications from `.apply`")
    .addField("`.embed`", "Embed any message of your choice.")
    .addField("`.strikes`", "Displays the strikes spreadsheet.");
  
    let botownerEmbed = new Discord.RichEmbed()
    .setColor("#303fc9")
    .setTitle("Bot Owner Commands")
    .setDescription("These commands can only be used by the Bot Owner (Stentorian#1202)")
    .addField("`.eval`", "Insert any JavaScript code and an output will be given.")
    .addField("`.reload`", "Reload any command if it is not functioning properly.");

    //delete command message
    message.delete().catch();

    //send list of categories
    if(!args[0]) return message.channel.send(categoriesEmbed);

    //checks for specified help menu
    if(args[0] === "staff") return message.channel.send(staffEmbed);
    if(args[0] === "general") return message.channel.send(generalEmbed);
    if(args[0] === "fun") return message.channel.send(funEmbed);
    if(args[0] === "hstaff") return message.channel.send(hstaffEmbed);
    if(args[0] === "botowner") return message.channel.send(botownerEmbed);

    //send list of categories again
    if(!args[0]) return message.channel.send(categoriesEmbed)
    
  }

  module.exports.help = {
    name: "help"
  }
