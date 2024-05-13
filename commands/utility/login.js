//user gets points for logging in

const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('login')
        .setDescription('User recieves points for using this command once a day'),
    async execute(interaction){
        await interaction.reply({content: '{randomized welcome}! You have recieved X points for logging in today!', ephemeral: true});
    },
};