const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("cumpleaños")
    .setDescription("el usuario le desea feliz cumpleaños a alguien")
    .addUserOption(option => option.setName("cumpleañero").setDescription("persona a la que se le festeja el cumpleaños").setRequired(true)),
    async execute(interaction) {
        const user = interaction.user
        const usuario = interaction.options.getUser("cumpleañero")
        const imagenes =  [
            "cdn.discordapp.com/attachments/721418619040432229/895179879820181574/unknown.png",
            "cdn.discordapp.com/attachments/895487437252481024/895487629531938906/cumpleanos.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895488504505704518/cumpleanos_1.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895503885488250940/giphy_8.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895504625225068624/giphy_9.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895506167403536415/giphy_12.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895506345485287434/giphy_13.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895506363873112124/giphy_14.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895507270740373524/giphy_15.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895507581458591794/giphy_16.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895508192719675422/giphy_19.gif",
            "cdn.discordapp.com/attachments/895487437252481024/895508351708987462/giphy_18.gif",
            "cdn.discordapp.com/attachments/895487437252481024/896466358123003924/gif_para_cnlund.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} le desea un muy feliz cumple a ${usuario.username}`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }