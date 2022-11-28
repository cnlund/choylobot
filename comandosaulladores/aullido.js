const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("aullido")
    .setDescription("el usuario manda un aullido para saludar"),
    async execute(interaction) {
        const user = interaction.user
        const imagenes =  [
            "cdn.discordapp.com/attachments/895330777284366387/895333458132471828/giphy.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895330988945715241/LittleUnfoldedArieltoucan-size_restricted.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895331023028637716/howling-wolf-35.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895331825319288873/wolf-howl.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895332209916018719/howl-breaking-dawn.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895332777770237992/tumblr_c4f9f6edb026e74865ce2408ffb55963_40ef042b_540.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895333033106898964/wolves-howling-tumblr-gif.gif",
            "cdn.discordapp.com/attachments/895330777284366387/895333146004971630/AnnualWellgroomedBeardeddragon-size_restricted.gif",
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("GREY")
        .setTitle(`${user.username} manda un aullido de bienvenida`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }