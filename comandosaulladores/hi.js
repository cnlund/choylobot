const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports ={
    data: new SlashCommandBuilder()
    .setName("hi")
    .setDescription("saluda a todo el chat")
    .addUserOption(option=>option.setName("amigo").setDescription("persona a saludar")),
    async execute(interaction){
        const usuario = interaction.options.getUser("amigo")
        const user = interaction.user
        const imagenes = [
            "cdn.discordapp.com/attachments/901172920351621130/901173469914468412/tumblr_inline_o5qhwwBh8f1r5ight_500.gif",
            "cdn.discordapp.com/attachments/901172920351621130/901173517809242172/deku-hi.gif",
            "cdn.discordapp.com/attachments/901172920351621130/901173559261544468/camie-my-hero-academia.gif",
            "cdn.discordapp.com/attachments/901172920351621130/901502872880021504/ore-monogatari-yamato.gif",
            "cdn.discordapp.com/attachments/901172920351621130/901513618955317268/tumblr_565088cc68d5c8dc42092cebfd10e9c8_6708e035_540.gif",
            "cdn.discordapp.com/attachments/901172920351621130/906276003662397540/hi_moomin.gif",
            "c.tenor.com/BxECPLeSf2UAAAAM/komi-cant-communicate-komi.gif"
        ]
        const random = imagenes[Math.floor(Math.random()*imagenes.length)]
        const image = [random]
        if(usuario){
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username} le manda un saludo a ${usuario.username}`)
            .setImage(`https://${image}`)
            return interaction.reply({embeds: [embed]})
        }else{
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username} le manda un saaludo a todo el chat`)
            .setImage(`https://${image}`)
            return interaction.reply({embeds: [embed]})
        }
    }
}