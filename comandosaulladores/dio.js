const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("comandosecreto")
    .setDescription("un comando cualquiera tu sigue pasando"),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor("YELLOW")
        .setTitle("creiste que era un comando cualquiera pero era YO, DIO")
        .setImage("https://cdn.discordapp.com/attachments/894762072024449034/895930754595446834/JoJos-Bizarre-Adventure-Dio-Brando.png")
        .setFooter("comando secreto")
        return interaction.reply({embeds: [embed]})
    }
 }