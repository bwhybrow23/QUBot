const Discord = require("discord.js")

  module.exports.run = async (bot, message, args) => {
    
    //EMBEDS
    let listEmbed = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Quest Universe Rules List")
    .addField("Forum Rules", "`.rules forum`", true)
    .addField("Discord Rules", "`.rules discord`", true)
    .addField("Server Rules", "`.rules server`", true);

    let forumRules = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Forum Rules")
    .setDescription(":small_blue_diamond: - __Use the appropriate sections when making a post__ \n :small_orange_diamond: - Don't really comment on any threads older than 1 month old \n :small_blue_diamond: - Do not double-post or cross-post \n :small_orange_diamond: - Do not make discriminatory posts \n :small_blue_diamond: - **__Use your common sense__** \n :small_orange_diamond: - Use common etiquette when making a post; don't make it all in caps, or neon orange text etc. \n :small_blue_diamond: - **__Follow the guidelines of certain sections__**")

    let discordRules = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Discord Server Rules")
    .setDescription(":small_blue_diamond: - Do not advertise without permission. Permission can only be granted from Head Admin and above \n :small_orange_diamond: - Do not be a toxic person. Minor jokes are allowed but anything serious will be taken into consideration. \n :small_blue_diamond: - Do not spam in any of the channels \n :small_orange_diamond: - No NSFW content otherwise it will be an instant ban! \n :small_blue_diamond: - Respect other members of the community and staff members! \n :small_orange_diamond: - Always listen to staff, any arguing with staff will result in a punishment \n :small_blue_diamond: - Use the appropriate channels for the appropriate content. An example is to use commands in #bot-commands \n :small_orange_diamond: - We do not tolerate homphobia, sexism, racism or any discriminatory behaviour \n :small_blue_diamond: - No serious threats such as **kill yourself** or **i will ddos you** \n :small_orange_diamond: - Just take the punishment. It's a Discord server not real life. If you think a punishment was wrongly given, talk to a higher ranked staff member \n :small_blue_diamond: - When asking for help, ask a lower staff member first. \n :small_orange_diamond: - Use your common sense, even if it isn't listed here, certain things just aren't tolerated. \n :small_blue_diamond: - We do not condone DM advertising at all - if you are caught doing so, you will be **__permanently banned from the Discord; it is unnaceptable and a violation of Discord's terms of services.__** \n :small_orange_diamond: - Be responsible and don't do things like 'ear rapes' in voice channels \n :small_blue_diamond: - Do not ask for serious or a lot of personal information or give it out to others.");

    let serverRules = new Discord.RichEmbed()
    .setColor("GREEN")
    .setTitle("Minecraft Server Rules")
    .setDescription(":small_blue_diamond: - Use your common sense. \n :small_orange_diamond: - No spamming **ANYWHERE** \n :small_blue_diamond: - No impersonation of **STAFF OR OTHER MEMBERS** \n :small_orange_diamond: - When asking for help, ask a lower staff member first. \n :small_blue_diamond: - Ignorant statements such as homophobia are not tolerated. \n :small_orange_diamond: - Be polite to everyone. \n :small_blue_diamond: - Do not be rude to staff members - listen to them. \n :small_orange_diamond: - **__Do not advertise.__** \n :small_blue_diamond: - Do not scam in real-life, however in-game scamming is allowed \n :small_orange_diamond: All of the forum and Discord rules still apply!")


    //delete command message
    message.delete().catch();

    //send list of categories
    if(!args[0]) return message.channel.send(listEmbed);

    //checks for specified help menu
    if(args[0] === "discord") return message.channel.send(discordRules);
    if(args[0] === "server") return message.channel.send(serverRules);
    if(args[0] === "forum") return message.channel.send(forumRules);

    //send list of categories again
    if(!args[0]) return message.channel.send(listEmbed)
    
  }

  module.exports.help = {
    name: "rules"
  }
