const { SlashCommandBuilder } = require("@discordjs/builders")
const { MessageEmbed } = require("discord.js")

module.exports = {
    data: new SlashCommandBuilder()
    .setName("mocca")
    .setDescription("envia imagenes de mocca"),
    async execute(interaction) {
        const imagenes =  [
            "cdn.discordapp.com/attachments/895084741685051433/895093159808339978/76788274_174106467034241_5954937733194103369_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093163994267729/76924013_457023225219986_6119409524162720734_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093167647506452/125913528_862456087831234_4088024049679464736_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093168171798528/126397553_216188343194971_1479688012940995096_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093173272068186/127172715_807665166469095_6306549299427368103_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093175545364531/132198749_389938905635094_4313384683573926094_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093183908835378/142637293_190811889446996_7828414372992837800_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093219279396884/234452757_568927197587228_3920431656981504819_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093224337711164/197872320_189802386365690_7590775422348456427_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093241672785941/210088680_138550541696319_2280266600069135573_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895093248811483166/203567081_779414105991670_1652005011346949569_n.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895096821603528744/Michi_mocca_2.png",
            "cdn.discordapp.com/attachments/895084741685051433/895096840238817330/jhbv.png",
            "cdn.discordapp.com/attachments/895084741685051433/895096862946787368/bv.png",
            "cdn.discordapp.com/attachments/895084741685051433/895096877073203230/Micha_mocca_3.jpg",
            "cdn.discordapp.com/attachments/895084741685051433/895096958505586758/hgbv.png"
        ]
        const random = imagenes[Math.floor(Math.random() * imagenes.length)]
        const image = [random]
        const embed = new MessageEmbed()
        .setColor("DARK_NAVY")
        .setTitle(`its Mocca time`)
        .setImage(`https://${image}`)
        return interaction.reply({embeds: [embed]})
    }
 }