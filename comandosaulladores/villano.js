const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("villania")
    .setDescription("El usuario busca cometer crimenes"),
    async execute(interaction){
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/736849935085076580/1045805024296566894/dabi.gif",
            "cdn.discordapp.com/attachments/736849935085076580/1045805045175832637/mucular.gif",
            "cdn.discordapp.com/attachments/736849935085076580/1045805061365837895/toga.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} ha decidido empezar una hola de crimenes`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}