const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("manda el ping del bot"),
    async execute(interaction){
        const embed = new MessageEmbed()
        .setDescription(`${Date.now() - interaction.createdTimestamp} ms`)
        return interaction.reply({embeds: [embed]})
    }
}