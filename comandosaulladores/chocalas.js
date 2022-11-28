const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("chocalas")
    .setDescription("El usuario choca las palmas con otro")
    .addUserOption(option => option.setName("amigo").setDescription("usuario con quien chocar las palmas").setRequired(true)),
    async execute(interaction) {
        const user = interaction.user
        const amigo = interaction.options.getUser("amigo")
        const imagenes = [
            "cdn.discordapp.com/attachments/898671461550661652/898680312475815956/hifive_1.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899555081500885022/Highfive_DekurarakaGOD.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899881159704600576/ducklett-pokemon.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883931564920832/ducktales-mark-beaks.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883936468054086/eevee-pikachu.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883941706752020/grookey-pokemon.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883945951387648/huey-duck-dewey-duck.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883950762262568/louie-duck-ducktales.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883957435392060/michipuno.gif",
            "cdn.discordapp.com/attachments/896602900057428008/899883989303705630/storkules-donald-duck.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} choca los cinco con ${amigo.username}`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
}