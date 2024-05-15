//user gets points for logging in

const { SlashCommandBuilder } = require("discord.js");

const myArray = ['Howdy', 'Good Day', 'What up dawg', 'Hello', 'Hi', 'Heya'];  
const randomElement = myArray[Math.floor(Math.random() * myArray.length)];  

module.exports = {
    data: new SlashCommandBuilder()
        .setName('login')
        .setDescription('User recieves points for using this command once a day'),
    async execute(interaction){
        await interaction.reply({content: `${randomElement}! You have recieved X points for logging in today!`, ephemeral: true});
    },
};