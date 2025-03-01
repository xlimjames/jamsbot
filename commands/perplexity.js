const axios = require('axios');
const PerplexityAI = require('perplexityai');

module.exports = {
  name: 'prx',
  category: 'Cid Bot',
  execute: async (api, event, args, commands, prefix, admins, appState, sendMessage) => {
    const { threadID } = event;
    const prompt = args.join(' ');

    try {
      
      const encodedPrompt = encodeURIComponent(prompt);

      const response = await PerplexityAI.search(prompt);
      
      sendMessage(api, { threadID, message: response });
    } catch (error) {
      console.error('error', error);
      sendMessage(api, { threadID, message: 'Sorry, I couldn\'t process that request. Please try again.' });
    }
  }
};
