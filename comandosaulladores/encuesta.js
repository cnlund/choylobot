const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("encuesta")
    .setDescription("el bot publica una encuesta")
    .addStringOption(option =>option.setName("pregunta").setDescription("pregunta a realizarse").setRequired(true))
    .addStringOption(option =>option.setName("opcion1").setDescription("primera de las opciones").setRequired(true))
    .addStringOption(option =>option.setName("opcion2").setDescription("segunda de las opciones").setRequired(true))
    .addStringOption(option =>option.setName("opcion3").setDescription("tercera de las opciones"))
    .addStringOption(option =>option.setName("opcion4").setDescription("cuarta de las opciones"))
    .addStringOption(option =>option.setName("opcion5").setDescription("quinta de las opciones")),
    async execute(interaction) {
        const pregunta = interaction.options.getString("pregunta")
        const opcion1 = interaction.options.getString("opcion1")
        const opcion2 = interaction.options.getString("opcion2")
        const opcion3 = interaction.options.getString("opcion3")
        const opcion4 = interaction.options.getString("opcion4")
        const opcion5 = interaction.options.getString("opcion5")
        if(!opcion3, !opcion4, !opcion5){
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${pregunta}`)
            .setDescription(`1️⃣${opcion1}\n2️⃣${opcion2}`)
            interaction.reply({embeds: [embed]})
        }
        if(!opcion4, !opcion5){
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${pregunta}`)
            .setDescription(`1️⃣${opcion1}\n2️⃣${opcion2}\n3️⃣${opcion3}`)
            interaction.reply({embeds: [embed]})
        }
        if(!opcion5){
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${pregunta}`)
            .setDescription(`1️⃣${opcion1}\n2️⃣${opcion2}\n3️⃣${opcion3}\n4️⃣${opcion4}`)
            interaction.reply({embeds: [embed]})
        }
        else {
            const embed = new MessageEmbed()
            .setColor("RANDOM")
            .setTitle(`${pregunta}`)
            .setDescription(`1️⃣${opcion1}\n2️⃣${opcion2}\n3️⃣${opcion3}\n4️⃣${opcion4}\n5️⃣${opcion5}`)
            interaction.reply({embeds: [embed]})
        }
    }
 }