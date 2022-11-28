const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("smash")
    .setDescription("manda un poderoso smash")
    .addUserOption(option =>option.setName("victima").setDescription("persona destinada a recibir el smash")),
    async execute(interaction) {
        const user = interaction.user
        const usuario = interaction.options.getUser("victima")
        const imagenes =  [
            "cdn.discordapp.com/attachments/895065812807876659/895795046572490792/smash_2.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895764697175957585/smash_1.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895747587162927115/smash_1.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895512852901789757/giphy_20.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895134008885780480/St._Louis_Smash.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895133820280508416/Detroit_Smash_All_Might.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895133818757980200/Texas_Smash_con_nomu.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895133752299241482/10025_Detroit_Smash_Deku.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895133592156512296/Oklahoma_Smash.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895102814542499860/3a6dd32c95f5b6dd2a6b4edc90249d86c3c6c693_hq.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895071939285123112/semi-might_vs_afo.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895069814891110410/Delaware_Smash.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895066247614582825/UNITED_STATES_SMASH.gif",
            "cdn.discordapp.com/attachments/895065812807876659/895066077720092682/California_Smash_Sopiler.gif"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const smashes = [ "Detroit", "Delaware", "Texas", "California", "Carolina", "Tlaxcala", "Oklahoma" ]
        const aleatorio = smashes[Math.floor(Math.random()*smashes.length)]
        const smash = [aleatorio]
        if (usuario){
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username} le manda un ${smash} smash con todas sus fuerzas a ${usuario.username}`)
            .setImage(`https://${image}`)
            return interaction.reply({embeds: [embed]})
        } else {
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${user.username} manda un ${smash} smash con todas sus fuerzas`)
            .setImage(`https://${image}`)
            return interaction.reply({embeds: [embed]})
        }
    }
 }