//displays login infor for a user
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName('profile')
        .setDescription('Displays the points and consective days logged in, as well as the overall total days logged in')
};