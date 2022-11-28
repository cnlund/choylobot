const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("caramelo")
    .setDescription("manda imagenes de caramelo"),
    async execute(interaction){
        const imagenes =[
            "cdn.discordapp.com/attachments/895097298391031898/895097390925746246/236010575_348298927011208_6442745651654088410_n.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097419342151700/236118976_299500388589549_572620725294747383_n.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097444457676840/236338300_556049748854833_3579796247322966220_n.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097553807360031/image0_1.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097610518540308/image0_5.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097736737751080/image0_4.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097737949884416/image0_3.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097784326307850/image0_2.jpg",
            "cdn.discordapp.com/attachments/895097298391031898/895097837153558528/image0.jpg",
            "cdn.discordapp.com/attachments/894762072024449034/896426902145867847/unknown.png"
        ]
        const random = imagenes[Math.floor(Math.random()*imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("ORANGE")
        .setTitle("Ahi viene caramelo ¡cuidado que muerde!")
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}