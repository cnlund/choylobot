const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pat")
    .setDescription("para dar caricias a otro")
    .addUserOption(option => option.setName("amigo").setDescription("persona a dar pat pat").setRequired(true)),
    async execute(interaction) {
        const user = interaction.user
        const usuario = interaction.options.getUser("amigo")
        const imagenes = [
            "cdn.discordapp.com/attachments/898671742564831232/898723687325397022/giphy_2.gif",
            "cdn.discordapp.com/attachments/898671742564831232/898724120555032616/Kx0WwnH.gif",
            "cdn.discordapp.com/attachments/900147314813968387/900147359378444328/flygon-pokemon.gif",
            "cdn.discordapp.com/attachments/900147314813968387/900147369297969172/genshin-genshin-impact.gif",
            "cdn.discordapp.com/attachments/900147314813968387/900147462646427708/genshin-razor.gif",
            "cdn.discordapp.com/attachments/900147314813968387/900149906512179250/pat_stich.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} le da caricias a ${usuario.username}`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}