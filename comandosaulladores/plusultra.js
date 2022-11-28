const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("plusultra")
    .setDescription("el usuario quiere dar lo maximo de si"),
    async execute(interaction) {
        const user = interaction.user
        const imagenes =  [
        `media.giphy.com/media/5OiTFxFzEmVY6kJiMi/giphy.gif`, 
        `cdn.discordapp.com/attachments/880231941499129896/894662349334642758/PlusUltra_1.gif`, 
        "cdn.discordapp.com/attachments/895377236557971456/897316841402290247/Plus_ultraaa.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle(`${user.username} quiere ir más allá **¡PLUS ULTRA!**`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }
