const { Client, Intents, Collection} = require("discord.js")
const config = require("./config.json")
const fs = require("fs")
const client = new Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILD_EMOJIS_AND_STICKERS,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS
    ]
});
client.on("ready", () => {
    console.log("AUUUUUUUUUUUU")
})

client.commands = new Collection()
const commandFiles = fs.readdirSync("./comandosaulladores").filter(file => file.endsWith(`.js`))
for (const file of commandFiles) {
    const command = require(`./comandosaulladores/${file}`)
    client.commands.set(command.data.name, command)
}
client.on("interactionCreate", async interaction => {
    if (!interaction.isCommand()) return
    const command = client.commands.get(interaction.commandName)
    if (!command) return
    try{
        await command.execute(interaction)
    } catch(e) {
        console.error(e)
        return interaction.reply({ content: "Ha surgido un error al ejecutar el comando"})
    }
})
client.login(config.token);