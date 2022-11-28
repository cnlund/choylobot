const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("elegir")
    .setDescription("el bot elige por ti")
    .addStringOption(option =>option.setName("opcion1").setDescription("primera de las opciones").setRequired(true))
    .addStringOption(option =>option.setName("opcion2").setDescription("segunda de las opciones").setRequired(true))
    .addStringOption(option =>option.setName("opcion3").setDescription("tercera de las opciones"))
    .addStringOption(option =>option.setName("opcion4").setDescription("cuarta de las opciones"))
    .addStringOption(option =>option.setName("opcion5").setDescription("quinta de las opciones")),
    async execute(interaction) {
        const opcion1 = interaction.options.getString("opcion1")
        const opcion2 = interaction.options.getString("opcion2")
        const opcion3 = interaction.options.getString("opcion3")
        const opcion4 = interaction.options.getString("opcion4")
        const opcion5 = interaction.options.getString("opcion5")
        if(!opcion3, !opcion4, !opcion5){
            const eleccion2 = [ `${opcion1}`, `${opcion2}`]
            const random2 = eleccion2[Math.floor(Math.random()*eleccion2.length)]
            const elegido2 = [random2]
            const embed = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setTitle("Yo elijo la opcion")
            .setDescription(`${elegido2}`)
            return interaction.reply({embeds: [embed]})
        }
        if(!opcion4, !opcion5){
            const eleccion3 = [ `${opcion1}`, `${opcion2}`, `${opcion3}`]
            const random3 = eleccion3[Math.floor(Math.random()*eleccion3.length)]
            const elegido3 = [random3]
            const embed = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setTitle("Yo elijo la opcion")
            .setDescription(`${elegido3}`)
            return interaction.reply({embeds: [embed]})
        }
        if(!opcion5){
            const eleccion4 = [ `${opcion1}`, `${opcion2}`, `${opcion3}`, `${opcion4}`]
            const random4 = eleccion4[Math.floor(Math.random()*eleccion4.length)]
            const elegido4 = [random4]
            const embed = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setTitle("Yo elijo la opcion")
            .setDescription(`${elegido4}`)
            return interaction.reply({embeds: [embed]})
        }
        else {
            const eleccion5 = [ `${opcion1}`, `${opcion2}`, `${opcion3}`, `${opcion4}`, `${opcion5}`]
            const random5 = eleccion5[Math.floor(Math.random()*eleccion5.length)]
            const elegido5 = [random5]
            const embed = new MessageEmbed()
            .setColor("LUMINOUS_VIVID_PINK")
            .setTitle("Yo elijo la opcion")
            .setDescription(`${elegido5}`)
            return interaction.reply({embeds: [embed]})
        }
    }
 }