const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("alo")
    .setDescription("El usuario manda a llamar a la policia"),
    async execute(interaction){
        const user = interaction.user
        const embed = new MessageEmbed()
        .setColor("WHITE")
        .setTitle(` ${user.username} nesecita su aiuda polisia`)
        .setImage("https://cdn.discordapp.com/attachments/894736044245782588/895516596771119135/unknown.png")
        return interaction.reply({embeds: [embed]})
    }
}