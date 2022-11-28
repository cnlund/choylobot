const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("gatomon")
    .setDescription("envia imagenes de gatomon"),
    async execute(interaction) {
        const imagenes =  [
            "cdn.discordapp.com/attachments/895098811603640330/895098939638972426/michi_gatomon_2.png",
            "cdn.discordapp.com/attachments/895098811603640330/895098947939475466/michi_gatomon_5.png",
            "cdn.discordapp.com/attachments/895098811603640330/895099248117440512/54732403_371325930388998_5646643161677171431_n.jpg",
            "cdn.discordapp.com/attachments/895098811603640330/895099250327838782/66131277_2186843618081025_1651778504725190245_n.jpg",
            "cdn.discordapp.com/attachments/895098811603640330/895099300990816306/28429980_977023809128614_2671724469931737088_n.jpg",
            "cdn.discordapp.com/attachments/895098811603640330/895157727653928960/unknown.png",
            "cdn.discordapp.com/attachments/895098811603640330/895099310096646164/26866165_169200567035144_5190621732750229504_n.jpg"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("NOT_QUITE_BLACK")
        .setTitle(`Un gatomon salvaje a aparecido`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }