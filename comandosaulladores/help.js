const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("help")
    .setDescription("El bot responde con la lista de comandos"),
    async execute(interaction){
        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("Comandos de lobobot")
        .setDescription("**/abrazo:** EL usuario abraza fuertemente a otro\n**/alo:** EL usuario manda a llamar a la polisia\n**/angry:** El usuario esta enojado\n**/antifunas:** El usuario saca su licencia antifunas\n**/aullido:** EL usuario manda un aullido de bienvenida\n**/avatar:** El bot manda el avatar del usuario seleccionado\n**/caramelo:** El bot manda gifs de caramelo\n**/chocalas:** El usuario choca los cinco con un amigo\n**/comer:** El usuario empieza a comer\n**/correr:** El usuario corre desesperadamente\n**/cumpleaños:** El usuario le desea feliz cumpleaños a otro usuario\n**/dance:** El usuario se pone a bailar\n**/ein:** Manda imagenes de ein de cowboy bebop\n**/elegir:** El bot elige por ti\n**/encuesta:** El bot manda una encuesta\n**/gatomon:** Manda imagenes de gatomon\n**/gifs:** Agradece por el gif\n**/happy:** EL usuario esta muy feliz\n**/hi:** El usuario saluda al chat\n**/jojopose:** El usuario posa como los jojos\n**/mimir:** El usuaria se va a mimir\n**/mocca** Manda imagenes de mocca\n**/mousse:** Manda imagenes de mousse\n**/pat:** El usuario hace pat pat a otro\n**/pelea:** El usuario se agarra a piñas con otro\n**/ping:** El bot manda su ping\n**/plusultra:** El usuario quiere ir mas alla\n**/poseheroica:** El usuario posa como los personajes de my hero academia\n**/poset:** El usuario se pone en pose T\n**/shocked:** El usuario se sorprende\n**/smash:** El usuario envia un smash con todas sus fuerzas")
        interaction.reply({embeds: [embed]})
    }
}