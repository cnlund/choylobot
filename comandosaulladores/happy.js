const { SlashCommandBuilder }  = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("happy")
    .setDescription("El usuario se encuentra muy feliz"),
    async execute(interaction) {
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/895880275949678612/895880319872426024/giphy_34.gif",
            "cdn.discordapp.com/attachments/895880275949678612/895896605205618788/giphy_87.gif",
            "cdn.discordapp.com/attachments/895880275949678612/895896855064502312/giphy_89.gif",
            "cdn.discordapp.com/attachments/895880275949678612/895896942603825152/giphy_90.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896249192454950982/giphy.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896249708538916914/giphy_2.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896252466788716544/giphy_10.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896254545385115658/giphy_18.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896260039126421504/aizawa-shouta.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896260973017591849/deku.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896261485678964736/anime-my-hero-academia.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896261689593446400/midoriya-izuku-deku.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896262908932157470/izuku-midoriya-smile.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896263399154024478/eri-boku-no-hero-academia.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896264249574293524/my-hero-academia-eri.gif",
            "cdn.discordapp.com/attachments/895880275949678612/896264316653817856/eri-candy-apple.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970659488469084/Cowboy_bebop_gif_1.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970669122809866/Cowboy_bebop_gif_2.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970677498810418/Cowboy_bebop_gif_3.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970684432023572/Cowboy_bebop_gif_4.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970692241817630/Cowboy_bebop_gif_5.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970707173507093/GIF_genshin_1.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970720599482378/GIF_genshin_2.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970732591022140/GIF_genshin_3.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896970744087593030/GIF_primal_1.gif"
        ]
        const random = imagenes[Math.floor(Math.random()*imagenes.length)]
        const image = [random]
        const embed =new MessageEmbed()
        .setColor ("RANDOM")
        .setTitle(`${user.username} esta que explota de alegria`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}