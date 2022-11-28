const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("shocked")
    .setDescription("El usuario se sorprende"),
    async execute (interaction){
        const user = interaction.user
        const imagenes =[
            "cdn.discordapp.com/attachments/895893510018985997/895893709713993778/giphy_72.gif",
            "cdn.discordapp.com/attachments/895893510018985997/895896534560964628/giphy_86.gif",
            "cdn.discordapp.com/attachments/895893510018985997/896249994363940864/giphy_4.gif",
            "cdn.discordapp.com/attachments/895893510018985997/896261258674831391/mha-my-hero-academia.gif",
            "cdn.discordapp.com/attachments/895893510018985997/896261821311361034/anime-mha.gif",
            "cdn.discordapp.com/attachments/895893510018985997/896263253045415947/midoriya-izuku-deku_1.gif",
            "cdn.discordapp.com/attachments/895893510018985997/896263428379918376/ururaka-mha.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896611199108665384/spike_wtf.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896613562976464986/Shoked_genshin_1.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896613800936099880/Shoked_genshin_2.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896614017999728740/Shoked_genshin_3.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896614306102276116/Shoked_genshin_4.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896614841232543754/Shoked_Genshin_6.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896614935407259719/Shoked_Genshin_7.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896615064075911218/Shoked_Genshin_8.gif"
        ]
        const random = imagenes [Math.floor(Math.random()* imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed ()
        .setColor("RANDOM")
        .setTitle (`¡${user.username} se encuentra totalmente sorprendido!`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
    }
}