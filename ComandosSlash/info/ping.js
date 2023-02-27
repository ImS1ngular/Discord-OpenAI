const { ApplicationCommandType } = require("discord.js")
module.exports = {
  name: "ping",
  description: "vê o ping do bot",
  type: ApplicationCommandType.ChatInput,
  run: async (client, interaction) => {
    const ping = client.ws.ping

  interaction.reply(`**O ping do bot é ${client.ws.ping}**`)
  }
}