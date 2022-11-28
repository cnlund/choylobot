const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("ein")
    .setDescription("envia imagenes de ein de cowboy bebop"),
    async execute(interaction) {
        const user = interaction.user
        const imagenes =  [
            "cdn.discordapp.com/attachments/895886345929625651/895886570752704542/giphy_48.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895886588695957524/giphy_49.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887062568419358/giphy_51.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887368161226762/giphy_52.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887434418618368/giphy_53.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887528517840936/giphy_54.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887605168754718/giphy_55.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887671027720272/giphy_56.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887872631132160/giphy_57.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887908978974749/giphy_58.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895887996421820426/giphy_59.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895888082870620190/giphy_60.gif",
            "cdn.discordapp.com/attachments/895886345929625651/895888275712147487/giphy_62.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("GOLD")
        .setTitle(`${user.username} ha invocado a Ein ¡EL perro mas tierno!`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }