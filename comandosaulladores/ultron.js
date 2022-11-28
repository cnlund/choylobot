const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports={
    data: new SlashCommandBuilder()
    .setName("gifs")
    .setDescription("el bot avisa de la recoleccion de gifs")
    .addUserOption(option =>option.setName("victima").setDescription("persona a la que se le ha robado el gif").setRequired(true)),
    async execute(interaction) {
        const user = interaction.user
        const usuario = interaction.options.getUser("victima")
        
        const embed = new MessageEmbed()
        .setColor("RANDOM")
        .setTitle(`${user.username} le agradece a ${usuario.username} su contribucion al bot con su gif`)
        .setImage(`https://cdn.discordapp.com/attachments/894762072024449034/954797766637420564/15355-1.png`)
        return interaction.reply({embeds: [embed]})
    }
}