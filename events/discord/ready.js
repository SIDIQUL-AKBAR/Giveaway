const register = require('../../utils/slashsync');
const { ActivityType } = require('discord.js');

module.exports = async (client) => {
  await register(client, client.register_arr.map((command) => ({
    name: command.name,
    description: command.description,
    options: command.options,
    type: '1'
  })), {
    debug: true
  });
  // Register slash commands - ( If you are one of those people who read the codes I highly suggest ignoring this because I am very bad at what I am doing, thanks LMAO )
  console.log(`[ / | Slash Command ] - ✅ Loaded all slash commands!`)
  let invite = `https://discord.com/oauth2/authorize?client_id=1513767218821988492&permissions=70922291768432&integration_type=0&scope=bot`;
  console.log(`[STATUS] ${client.user.tag} is now online!\n[INFO] Bot by SIDDUZZZ https://www.youtube.com/@mastercotutorials\n[Invite Link] ${invite}`);
  client.user.setPresence({
  activities: [{ name: `MASTERCOTUTORIALS on YouTube`, type: ActivityType.Watching }],
  status: 'online',
});

};
