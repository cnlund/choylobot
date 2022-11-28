const fs = require("fs")
const { REST } = require("@discordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, token } = require("./config.json")

const commands = []
const commandFiles = fs.readdirSync(`./comandosaulladores`).filter(file => file.endsWith(".js"))

for (const file of commandFiles) {
    const command = require(`./comandosaulladores/${file}`)
    commands.push(command.data.toJSON())
}

const rest = new REST({ version: "9"}).setToken(token)

async function createSlash() {
    try{
        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands }
        )
        console.log("los comandos se han publicado")
    } catch(e) {
        console.error(e)
    }
}

createSlash()