import getprices from "./hmmapi.mjs";
import { readFileSync } from "fs";
import { Client, GatewayIntentBits, Message } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const botmsg = "[HMC] ";
let previous_price = null;
const up_arrow = "↗️";
const down_arrow = "↘️";

client.on("ready", () => {
  console.log(botmsg + `Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  getprices();
  let member = client.user.id;
  setInterval(function(){
    priceUpdate()
  }, 5000) //1 - minute event loop 60000
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
  if(price < previous_price){
    bot.setNickname("HMC " +  '(' + down_arrow + ') ' + "$" + price);
  }
  else{
    bot.setNickname("HMC " +  '(' + up_arrow + ') ' + "$" + price);
  }
  //bot.setNickname("HMC $" + price);
  previous_price = price;
  //client.user.setActivity(`Bid: ${token.Bid}  Ask: ${token.Ask}`);
}

//console.log(botmsg + process.env.DISCORD_TOKEN)
client.login(
  "NzA3MDc4NDQ5NzM0NjE1MDcx.GZuYj8.W4ltYT-6tG8bcW2nnThXnYuyrT9AGiw2SOJFBs")
  