const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
     data: new SlashCommandBuilder()
     .setName("poseheroica")
     .setDescription("El bot manda diversas poses heroicas"),
     async execute(interaction){
     const user = interaction.user
     const imagenes = [
         "cdn.discordapp.com/attachments/895062888409092148/895711564240388096/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895718041025925131/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895718256734773258/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895718783744892938/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895718807778234408/unknown-1.png",
         "cdn.discordapp.com/attachments/895717863954972773/895718827411767326/unknown-2.png",
         "cdn.discordapp.com/attachments/895717863954972773/895718840816771142/unknown-3.png",
         "cdn.discordapp.com/attachments/895717863954972773/895720310148571146/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895720541355397150/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895720722293485568/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895721403020611644/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895721593467203584/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895721838120931328/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895722119382589481/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895722323368378388/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895722462438899802/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895722731490902016/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895722969156972604/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895723188028321863/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895723313731612772/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895723711636836362/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895723859754487808/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895723957590847538/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895724143780175892/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895724250474897428/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895724411045445683/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895724560836599828/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895724822577971200/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895724933836066826/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895726959651336263/unknown.png",
         "cdn.discordapp.com/attachments/895717863954972773/895731271353921557/Heropose.gif",
         "cdn.discordapp.com/attachments/895717863954972773/895734221501526066/Heropose_1.gif",
         "cdn.discordapp.com/attachments/879934300886269982/912482088089968670/Grape_Rush_GIF.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} quiere posar como un heroe`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
    }
}