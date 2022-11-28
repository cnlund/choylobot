const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
     data: new SlashCommandBuilder()
     .setName("dance")
     .setDescription("¡El usuario no se puede aguantar las ganas de bailar!")
     .addUserOption(option => option.setName("pareja").setDescription("persona con la que queres bailar")),
     async execute(interaction){
     const usuario = interaction.options.getUser("pareja")
     const user = interaction.user
     const imagenes = [
         "cdn.discordapp.com/attachments/895518748008656896/895518815117537340/giphy_21.gif",
         "cdn.discordapp.com/attachments/895518748008656896/895523537132068874/giphy_33.gif",
         "cdn.discordapp.com/attachments/895518748008656896/895523537132068874/giphy_33.gif",
         "cdn.discordapp.com/attachments/895518748008656896/895526826082959380/cf9.gif",
         "cdn.discordapp.com/attachments/895518748008656896/895883930706800720/giphy_45.gif",
         "cdn.discordapp.com/attachments/895518748008656896/895886078580514836/kikurage-dance.gif",
         "cdn.discordapp.com/attachments/880231941499129896/1032451309409935390/Denji_y_Power_Bailando.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        if (usuario) {
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} baila acompañado de ${usuario.username}`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
        } else {
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} baila con mucha pasion`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
        }
    }
}