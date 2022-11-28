const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("correr")
    .setDescription("El usuario corre hacia la libertad")
    .addUserOption(option => option.setName("perseguidor").setDescription("Usuario que te persigue")),
    async execute(interaction) {
        const user = interaction.user
        const usuario = interaction.options.getUser("perseguidor")
        const imagenes = [
            "cdn.discordapp.com/attachments/898671569851809873/898723577539489792/cowboy-bebop-fast.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898724566594117662/cowboy-bebop-anime.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898725414837567488/giphy_3.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898725515836391505/giphy_7.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898725529153331200/giphy_4.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898725565232730123/giphy_8.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898725672636264479/giphy_6.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898728461881982996/giphy_13.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898728620879646750/giphy_10.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898728665192468610/giphy_12.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898728883375992852/giphy_14.gif",
            "cdn.discordapp.com/attachments/898671569851809873/898729021439881216/giphy_16.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899904631134625812/ducktales-ducktales2017.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899904635614162954/donald-duck-ducktales.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899904643885334558/webbie-webbigail-vanderquack.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899904649409200148/louie-duck-ducktales2017.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899904659232284732/della-duck-ducktales.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        if (usuario) {
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username} corre desesperadamente de ${usuario.username}`)
            .setImage(`https://${image}`)
        }else {
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username} corre hacia el infinito`)
            .setImage(`https://${image}`)
            return interaction.reply({embeds: [embed]})
        }
    }
}