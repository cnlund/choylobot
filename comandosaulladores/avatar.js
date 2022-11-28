const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("avatar")
    .setDescription("manda el avatar del usuario seleccionado")
    .addUserOption(option=> option.setName("usuario").setDescription("usuario del que quieres ver el avatar")),
    async execute(interaction){
        const user = interaction.options.getUser("usuario")
        if (user) {
            const embed = new MessageEmbed()
            .setColor("GOLD")
            .setDescription(`El avatar de ${user.username} es:`)
            .setImage(user.displayAvatarURL({ dynamic: true, size: 4096}))
            return interaction.reply({ embeds: [embed]})
        } else {
            const embed = new MessageEmbed()
            .setColor("GOLD")
            .setDescription(`Tu avatar es:`)
            .setImage(interaction.user.displayAvatarURL({ dynamic: true, size: 4096}))
            return interaction.reply({ embeds: [embed]})
        }
    }
}