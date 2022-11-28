const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
     data: new SlashCommandBuilder()
     .setName("comer")
     .setDescription("El usuario ha empezado a tener hambre"),
     async execute(interaction){
     const user = interaction.user
     const imagenes = [
         "cdn.discordapp.com/attachments/895881354800148490/895881440267501578/giphy_37.gif",
         "cdn.discordapp.com/attachments/895881354800148490/895881676297732116/giphy_38.gif",
         "cdn.discordapp.com/attachments/895881354800148490/895881969492176936/giphy_39.gif",
         "cdn.discordapp.com/attachments/895881354800148490/895882074718896138/giphy_40.gif",
         "cdn.discordapp.com/attachments/895881354800148490/895882219992776745/giphy_41.gif",
         "cdn.discordapp.com/attachments/895881354800148490/895884137234333726/giphy_46.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897350683668414464/pato_comiendo.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897350994831216640/c_esta_comiendo.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897352917684731914/spike_comiendo.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897353520309731328/jet_comiendo.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897353701503688745/hugo_comiendo.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897353818730278952/comiendo.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897353945666715658/Rosita_comiendo.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} ha decidido que es hora de comer`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
    }
}