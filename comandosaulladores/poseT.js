const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
     data: new SlashCommandBuilder()
     .setName("poset")
     .setDescription("El bot manda poses T"),
     async execute(interaction){
     const user = interaction.user
     const imagenes = [
         "cdn.discordapp.com/attachments/896596304795414588/896596354598567946/ec55cc22bae4f5f8227072417f441e38.jpg",
         "cdn.discordapp.com/attachments/896596304795414588/896596355500351518/hrr4tbllgnu61.png",
         "cdn.discordapp.com/attachments/896596304795414588/896596965519921222/maxresdefault.jpg",
         "cdn.discordapp.com/attachments/896596304795414588/896598714033000529/DdbZWydVAAAFKyJ.jpg",
         "cdn.discordapp.com/attachments/896596304795414588/896598727870021713/descarga.jpg",
         "cdn.discordapp.com/attachments/896596304795414588/896598739303682078/8c01c67e987a479c0fc5b86787884419.jpg",
         "cdn.discordapp.com/attachments/896596304795414588/896618525295255572/Pose_T_dragonas-min.gif",
         "cdn.discordapp.com/attachments/896596304795414588/896618973020442624/250-2502424_download-zip-archive-pokemon-t-pose-png-transparent.png",
         "cdn.discordapp.com/attachments/896596304795414588/896619334053543937/tumblr_inline_pap2v9W75x1tsiidb_1280.png",
         "cdn.discordapp.com/attachments/896596304795414588/896620396546240512/EVmnIm_WkAovcVg.png",
         "cdn.discordapp.com/attachments/896596304795414588/896621660164223026/unknown.png",
         "cdn.discordapp.com/attachments/896506018048114719/897129338149949470/sylveon_pose_t.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("DARK_AQUA")
        .setTitle(`${user.username} quiere actuar con naturalidad`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
    }
}