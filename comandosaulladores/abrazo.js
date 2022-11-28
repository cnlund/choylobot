const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
     data: new SlashCommandBuilder()
     .setName("abrazo")
     .setDescription("El usuario abraza a otro")
     .addUserOption(option => option.setName("amigo").setDescription("persona a ser abrazada").setRequired(true)),
     async execute(interaction){
     const user = interaction.user
     const usuario = interaction.options.getUser("amigo")
     const imagenes = [
         "cdn.discordapp.com/attachments/895882207204372493/895882319502659584/giphy_42.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897014052323229757/mulan_hug.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897015017134780447/gif_wall-e.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897015329631375370/gif_endeavor_chillando.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897019884024766534/abachogenshin.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897020195070173194/genshinabacho.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897025247704916018/jj_kaisen_hug.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897027701158846464/hug_ochako.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897028451578564668/abrazo_brujitas.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897029261435752508/abachobakusquad.gif",
         "cdn.discordapp.com/attachments/897013027600212028/897029756376219668/abrazo_hanako.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897280285048197150/Hug_primal.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897280505089773639/abacho_genshin.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897281124538138624/abrazo_borderlands.gif",
         "cdn.discordapp.com/attachments/896506018048114719/897281319690715186/abacho_genshin1.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("DARK_GREEN")
        .setTitle(`${user.username} abraza fuertemente a ${usuario.username}`)
        .setImage(`https://${image}`)
        return interaction.reply ({embeds: [embed]})
    }
}