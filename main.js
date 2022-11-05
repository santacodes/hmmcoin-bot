import getprices from "./hmmapi.mjs";
import { readFileSync } from "fs";
import { Client, GatewayIntentBits, Message } from "discord.js";
import fetch from "node-fetch";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const botmsg = "[HMC] ";

client.on("ready", () => {
  console.log(botmsg + `Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  getprices();
  let member = client.user.id;
  setInterval(function(){
    priceUpdate()
  }, 60000) //1 - minute event loop 
});

const priceUpdate = async () => {
  console.log(botmsg + "updating price");

  const server = await client.guilds.fetch("819572193796292678")
  const bot = await server.members.fetch(client.user.id)
  await getprices();

  let fileText = readFileSync('./data.json');
  let jsonParsed = JSON.parse(fileText);
  
  console.log(botmsg + "Current Price : " + jsonParsed["price"]);
  let price = jsonParsed["price"];

  bot.setNickname("HMC $" + price);
  //client.user.setActivity(`Bid: ${token.Bid}  Ask: ${token.Ask}`);
}

//console.log(botmsg + process.env.DISCORD_TOKEN)
client.login(
  "NzA3MDc4NDQ5NzM0NjE1MDcx.GZuYj8.W4ltYT-6tG8bcW2nnThXnYuyrT9AGiw2SOJFBs")
  