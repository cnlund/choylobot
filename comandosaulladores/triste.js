const {  SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("triste")
    .setDescription("El usuario esta triste"),
    async execute(interaction){
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/1032504142708625418/1032504258983100517/CryBrujitas01.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032504259511603230/Crybrujitas02.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032504259842940938/Crybrujitas03.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032504569919438898/Crymha01.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032530421835124807/Crymha03.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032530476709183528/Crymha05.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032530547106381845/Crymha06.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032530763876417556/Crymha09.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032530810533855292/Crymha10.gif",
            "cdn.discordapp.com/attachments/1032504142708625418/1032530810974261248/Crymha11.gif"
        ]
        const random = imagenes [Math.floor(Math.random()*imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor('DARK_RED')
        .setTitle(`${user.username} se ha deprimido`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds:[embed]})
    }
}