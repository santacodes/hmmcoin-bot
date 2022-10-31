import getprices from "./hmmapi.mjs";
import { Client, GatewayIntentBits, Message } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  const hmmGuilds = client.guilds.cache.map((guild) => guild.id);
  console.log("hmmguilds = "+hmmGuilds);
  let price = String(getprices());
  let member = client.user.id;
  console.log(hmmGuilds[0])
  //priceUpdate();
  client.guilds.cache.forEach(guild => {
    guild.members.me.setNickname("Updated Nickname");
  }); 
});

const priceUpdate = async () => {
  token.UpdatePrice()
  const server = await client.guilds.fetch("819572193796292678")
  const bot = await server.members.fetch(client.user.id)
  bot.setNickname("changed the price")
  //client.user.setActivity(`Bid: ${token.Bid}  Ask: ${token.Ask}`);
}

client.on("message", (msg) => {
  console.log(msg);
  if (msg.content === "hello") {
    return msg.reply("hey");
  }
});

//console.log(process.env.DISCORD_TOKEN)
client.login(
  "NzA3MDc4NDQ5NzM0NjE1MDcx.GZuYj8.W4ltYT-6tG8bcW2nnThXnYuyrT9AGiw2SOJFBs")
  