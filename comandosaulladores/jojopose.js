const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports ={
    data: new SlashCommandBuilder()
    .setName("jojopose")
    .setDescription("El usuario posa como los jojos"),
    async execute(interaction){
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/907155191617429584/907155272601055232/polnareff_pose.gif",
            "cdn.discordapp.com/attachments/907155191617429584/907155275054731295/Jojo_pose_joseph.gif",
            "cdn.discordapp.com/attachments/907155191617429584/907200675283337226/jonathan_pose_1.gif",
            "cdn.discordapp.com/attachments/907155191617429584/907527741522464789/jonathan_pose_2.gif",
            "cdn.discordapp.com/attachments/907155191617429584/907767896573362186/josuke_pose_1.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912488492435636324/star_platinum.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912587555671801917/okuyasu_pose_1.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912588448630734918/josuke_pose_2.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912606699658047518/Jotaro_pose_1.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912614986537402368/awaken_my_masters.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912639148853170176/Giorno_Pose_1.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912639149524254740/Giorno_Pose_2.gif",
            "cdn.discordapp.com/attachments/907155191617429584/912832108177801257/Joseph_Pose_1.gif",
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} se ha puesto a posar como los jojos`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}