const {  SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("angry")
    .setDescription("El usuario esta muy enojado"),
    async execute(interaction){
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/895882482820481036/895882573279010856/giphy_44.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895893469325852672/giphy_71.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895893943227678730/giphy_73.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895895357815410719/giphy_80.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895896174400274432/giphy_83.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895896282936279080/giphy_84.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895896367061418014/giphy_85.gif",
            "cdn.discordapp.com/attachments/895882482820481036/895896978624495616/giphy_91.gif",
            'cdn.discordapp.com/attachments/895882482820481036/896259750474444850/anime-aizawa.gif',
            "cdn.discordapp.com/attachments/895882482820481036/896260410519482378/shota-aizawa.gif",
            "cdn.discordapp.com/attachments/895882482820481036/896261468813660180/watchout-angry.gif",
            "cdn.discordapp.com/attachments/895882482820481036/896261719976968212/bnha-boku.gif",
            "cdn.discordapp.com/attachments/895882482820481036/896262950740971520/bakugo-katsuki-shut-up.gif",
            "cdn.discordapp.com/attachments/895882482820481036/896270328035172352/fe42dc4b0c82f44284de30b09239730a.gif",
            "cdn.discordapp.com/attachments/896506018048114719/897284492929171506/monita_enojada.gif",
            "cdn.discordapp.com/attachments/896506018048114719/897285409908871188/primal_enojado.gif",
            "cdn.discordapp.com/attachments/896506018048114719/897285662649241640/paimon_hehe_que_cabron.gif",
            "cdn.discordapp.com/attachments/895882482820481036/897294248813150258/Bakugo_enojado.gif",
            "cdn.discordapp.com/attachments/896506018048114719/897295882658127922/genshin_enojado.gif",
            "cdn.discordapp.com/attachments/896506018048114719/897296080406999040/hera_enojada.gif",
            "cdn.discordapp.com/attachments/896506018048114719/897296178729861120/genshin_emputado.gif"
        ]
        const random = imagenes [Math.floor(Math.random()*imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor('DARK_RED')
        .setTitle(`${user.username} ha sufrido un ataque de ira`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds:[embed]})
    }
}
