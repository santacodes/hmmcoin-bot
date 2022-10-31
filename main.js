import getprices from "./hmmapi.mjs";
import { Client, GatewayIntentBits, Message } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  let price = String(getprices());
  let member = client.user.id;
  setInterval(function(){
    priceUpdate()
  }, 5000)
});

const priceUpdate = async () => {
  console.log("updating price");
  const server = await client.guilds.fetch("819572193796292678")
  const bot = await server.members.fetch(client.user.id)
  const price = String(getprices());
  console.log("current price is " + price)
  bot.setNickname("$ " + price);
  console.log("updated price! ");
  //client.user.setActivity(`Bid: ${token.Bid}  Ask: ${token.Ask}`);
}

//console.log(process.env.DISCORD_TOKEN)
client.login(
  "NzA3MDc4NDQ5NzM0NjE1MDcx.GZuYj8.W4ltYT-6tG8bcW2nnThXnYuyrT9AGiw2SOJFBs")
  