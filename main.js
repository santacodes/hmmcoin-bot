import getprices from "./hmmapi.mjs";
import { Client, GatewayIntentBits, Message } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  const hmmGuilds = client.guilds.cache.map((guild) => guild.id);
  console.log(hmmGuilds);
  let price = String(getprices());
  //client.user.setPresence({ activities: [{ name: 'Getting the Price of HMM' }], status: 'idle' });
});
for (var i = 0; i < length(hmmGuilds); i++) {
  const mem = hmmGuilds[i].members;
  for (j = 0; j < Number(mem.length); i++) {
    if (mem[j] === client.id) {
      mem[j].setNickname("Test Nickname");
    }
  }
}
//function changenickname() {

//}

client.on("message", (msg) => {
  console.log(msg);
  if (msg.content === "hello") {
    return msg.reply("hey");
  }
});

setInterval(function () {
  //client.channels.get("Channel Id").send("I will send it every 6 hours")
  for (i = 0; i < length(hmmGuilds); i++) {
    const mem = hmmGuilds[i].members;
    for (j = 0; j < length(mem); i++) {
      if (mem[j] === client.id) {
        mem[j].setNickname("Test Nickname");
      }
    }
  }
}, 60000); //changes nickname every minute

//console.log(process.env.DISCORD_TOKEN)
client.login(
  "ODI2MDc4MjcyMTQzMDk3OTA2.Gn84w2.ww4FTfDzXDFJjbHDA3Kj-avalvKVFAcGZJItxo"
);
