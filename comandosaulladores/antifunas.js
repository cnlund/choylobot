const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("antifunas")
    .setDescription("licencia para evitar ser funado"),
    async execute(interaction) {
        const user = interaction.user
        const embed = new MessageEmbed()
        .setColor("DARK_RED")
        .setTitle(`${user.username} quiere evitar ser funado`)
        .setImage("https://cdn.discordapp.com/attachments/894736044245782588/898257051535413288/unknown.png")
        .setFooter("dibujo hecho por yolcatl")
        return interaction.reply({embeds: [embed]})
    }
 }