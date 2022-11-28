const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("pelea")
    .setDescription("para agarrarte a piñas con tus enemigos")
    .addUserOption(option=> option.setName("enemigo").setDescription("persona a la que vas a madrear").setRequired(true)),
    async execute(interaction) {
        const user = interaction.user
        const usuario = interaction.options.getUser("enemigo")
        const imagenes =  [
            "cdn.discordapp.com/attachments/895885481441632316/895885553512366110/giphy_47.gif",
            "cdn.discordapp.com/attachments/895885481441632316/895894885339631616/giphy_76.gif",
            "cdn.discordapp.com/attachments/895885481441632316/895895156841136209/giphy_78.gif",
            "cdn.discordapp.com/attachments/895885481441632316/895895217377529876/giphy_79.gif",
            "cdn.discordapp.com/attachments/895885481441632316/895896431498514452/giphy_84.gif",
            "cdn.discordapp.com/attachments/895885481441632316/895897194673094686/giphy_92.gif",
            "cdn.discordapp.com/attachments/895885481441632316/896044838993137724/Cage_pelea.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896506107554590780/gif_mortal_kombat.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896510687155716157/gif_genshin_ok.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896511296151883836/diluc_ok.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896529344426561586/peleacowboybebop.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896530012382052412/gif_vinland_saga_1.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896530221757501451/gif_vinland_saga_2.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896530439047630858/gif_vinland_saga_3.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896530604156395591/gif_vinland_saga_4.gif",
            "cdn.discordapp.com/attachments/896506018048114719/896531263236739142/gif_vinland_saga_5.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("BLURPLE")
        .setTitle(`${user.username} se ha agarrado a madrazos contra ${usuario.username}`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }