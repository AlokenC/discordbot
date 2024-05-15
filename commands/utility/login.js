//user gets points for logging in

const { SlashCommandBuilder } = require("discord.js");

const myArray = ['Howdy', 'Good Day', 'What up dawg', 'Hello', 'Hi', 'Heya'];  

//want to collect variables: consectiveLoginStreak, totalLoginDays, totalPoints

module.exports = {
    cooldown: 5,
    data: new SlashCommandBuilder()
        .setName('login')
        .setDescription('User recieves points for using this command once a day'),
    async execute(interaction){

        //if newDay == false then
        //return message: 'Try again tommorrow'

        // const userId = interaction.user.id;        
        // if (!profiles[userId]) {
        //     profiles[userId] = {
        //         totalPoints: 0,
        //         totalDays: 0,
        //         consecutiveDays: 0,
        //         lastLoginDate: null,
        //     };
        // }

        // const userProfile = profiles[userId];

        // const currentDate = new Date();
        // if (userProfile.lastLoginDate && userProfile.lastLoginDate.getDate() === currentDate.getDate()) {
        //     userProfile.consecutiveDays++;
        // } else {
        //     userProfile.consecutiveDays = 1;
        // }
        
        // userProfile.totalDays++;

        // const points = userProfile.consecutiveDays * 10;
        // userProfile.totalPoints += points;

        // userProfile.lastLoginDate = currentDate;

        const randomElement = myArray[Math.floor(Math.random() * myArray.length)];  
        await interaction.reply({content: `${randomElement}! You have received ${points} points for logging in today! Total points: ${userProfile.totalPoints}`, ephemeral: true});
    },
};