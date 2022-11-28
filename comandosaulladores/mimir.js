const { SlashCommandBuilder }  = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("mimir")
    .setDescription("El usuario se va a mimir"),
    async execute(interaction) {
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/895062888409092148/896241998657355776/pal_choy.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896244117598789652/pal_choy_pero_del_cowboy_beebop.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896244466724241408/pal_choy.2.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896244591542554634/pal_choy_y_ya_no_se_que_mas_poner.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896252577711284244/giphy_14.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896254576234213407/giphy_16.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896257240825204756/sleep-yagi.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896257470492708864/tumblr_per1ehQ4FB1ry6qnl_540.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896257539342204928/98ffc4914aa5d982d9233aed35618ab6.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896257544069193798/196317.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896257631340089354/deku-sleeping.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896257768007290890/my-hero-academia-nejire-hado.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896258159100960808/bnha-sleep.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896266955001065492/cowboy-bebop-anime.gif",
            "cdn.discordapp.com/attachments/896241999110344745/896267057476276294/cowboy-bebop-yawn.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896607974406107156/Mimir_donald.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896609488327569468/ed_dormida.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896609671610261545/Itadori_dormido.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896609942616805386/takeo_dormido.gif"
        ]
        const random = imagenes[Math.floor(Math.random()*imagenes.length)]
        const image = [random]
        const embed =new MessageEmbed()
        .setColor ("RANDOM")
        .setTitle(`${user.username} esta tan cansado que se ha ido a mimir`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}