const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports ={
    data: new SlashCommandBuilder()
    .setName("comandosecretotres")
    .setDescription("es otro comando secreto"),
    async execute(interaction){
        const user = interaction.user
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} tenia ganas de funar a nubo`)
        .setImage("https://static.wikia.nocookie.net/dark-souls/images/5/5a/Hoguera.jpg/revision/latest?cb=20180303201654&path-prefix=es")
        return interaction.reply({embeds: [embed]})
    }
}