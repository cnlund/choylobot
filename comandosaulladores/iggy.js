const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")


module.exports = {
    data: new SlashCommandBuilder()
    .setName("comandosecretodos")
    .setDescription("otro comando secreto segui bajando"),
    async execute(interaction) {
        const embed = new MessageEmbed()
        .setColor("NOT_QUITE_BLACK")
        .setTitle("Iggy!! Get out of here!! He is still alive")
        .setImage("https://cdn.discordapp.com/attachments/895062888409092148/897012519531610122/Iggy_OVA_muere.gif")
        .setFooter("comando secreto 2")
        return interaction.reply({embeds: [embed]})
    }
 }