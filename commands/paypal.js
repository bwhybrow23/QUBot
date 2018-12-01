const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {
  message.delete().catch(O_o => {});
  message.channel.send("If you would like to help support Quest Universe then consider donating to our PayPal. All donations are greatly appreciated and are used to help make Quest Universe amazing! https://paypal.me/qumc");

}

module.exports.help = {
  name: "paypal"
}
