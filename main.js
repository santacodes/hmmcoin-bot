import getprices from "./hmmapi.mjs";
import { Client, GatewayIntentBits, Message } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  const hmmGuilds = client.guilds.cache.map((guild) => guild.id);
  console.log("hmmguilds = "+hmmGuilds);
  console.log("members of guilds "+ hmmGuilds.members)
  let price = String(getprices());
  let member = client.user.id;
  member.setNickname(price));
  fetchAllGuildMembers()
  //client.user.setPresence({ activities: [{ name: 'Getting the Price of HMM' }], status: 'idle' });
  //const bot_username = client.user.tag;
  //let member = client.guild.members.getcache
//function changenickname() {

//}

const fetchAllGuildMembers = () => {
  members = hmmGuilds.members;
  console.log("These are the members "+members)
  getfetch();
  let guilds = client.guilds.fetch(819572193796292678);
  
  console.log("this is from fetchall"+guilds);
  for (let i = 0; i < guilds.length; i += 1) {
  const guild = bot.guilds.cache.get(guilds[i].id); guild.members.fetch(); console.log("Guild members fetched for - ${guilds[i].name}(${guilds[i].id})")
  };
};

async function getfetch(){
  let gg = await client.guilds.fetch(819572193796292678);
  console.log("this is from getfetch"+gg);
  return gg.toArray();
}

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
