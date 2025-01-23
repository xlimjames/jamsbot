const axios = require('axios');

const commandCategories = {
  "Admin": ['addadmin', 'adminlist', 'removeadmin', 'removeuser', 'ban', 'viplist'],
  "Ai": ['ai', 'cid'],
  "System": ['compile', 'restart', 'shadowgarden', 'uptime'],
  "Utilities": ['help', 'notify', 'prefix', 'sendmessage',],
  "User": ['unban', 'waifu', 'developer'],

};

module.exports = {
  name: 'help',
  category: 'Info',
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    const { threadID } = event;

    let menuMessage = "━━━━━━━━━━━━━━\n𝙰𝚟𝚊𝚒𝚕𝚊𝚋𝚕𝚎 𝙲𝚘𝚖𝚖𝚊𝚗𝚍𝚜:\n";
    for (const category in commandCategories) {
      if (commandCategories[category].length > 0) { //Only add categories with commands
          menuMessage += `╭─╼━━━━━━━━╾─╮\n│ ${category}│\n`;
          for (const command of commandCategories[category]) {
              menuMessage += `│ > ${command}\n`;
          }
          menuMessage += `╰─━━━━━━━━━╾─╯\n`;
      }
    }

    menuMessage += `Meesage the developer if there's error on our Cid Kagenou Bot.\n`;
    menuMessage += `Cid Kagenou Bot\n`;
    menuMessage += `━━━━━━━━━━━━━━\nDeveloper; Aljur Pogoy \nAdmin; Ana sophia\n━━━━━━━━━━━━━━`;

    try {
      await sendMessage(api, { threadID, message: menuMessage });
    } catch (error) {
      console.error("Error sending help message:", error);
      await sendMessage(api, { threadID, message: "Error sending help. Check console logs." });
    }
  },
};
  
