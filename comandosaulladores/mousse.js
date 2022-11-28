const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports ={
    data: new SlashCommandBuilder()
    .setName("mousse")
    .setDescription("Manda imagenes de mousse"),
    async execute(interaction){
        const imagenes = [
            "cdn.discordapp.com/attachments/907458829724307496/907458836170944603/Screenshot_2021-11-08-23-27-23-274_com.instagram.android.jpg",
            "cdn.discordapp.com/attachments/907458829724307496/907458836405813258/Screenshot_2021-11-08-23-27-32-803_com.instagram.android.jpg",
            "cdn.discordapp.com/attachments/907458829724307496/907458836623921202/Screenshot_2021-11-08-23-27-57-515_com.instagram.android.jpg",
            "cdn.discordapp.com/attachments/907458829724307496/907458836833656842/Screenshot_2021-11-08-23-28-05-018_com.instagram.android.jpg",
            "cdn.discordapp.com/attachments/907458829724307496/907458837060157482/Screenshot_2021-11-08-23-28-35-945_com.instagram.android.jpg",
            "cdn.discordapp.com/attachments/907458829724307496/907458837349552128/Screenshot_2021-11-08-23-28-48-915_com.instagram.android.jpg"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Aqui esta Mousse la mas panquesita")
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}