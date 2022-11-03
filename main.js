import getprices from "./hmmapi.mjs";
import { readFile } from "fs";
import { Client, GatewayIntentBits, Message } from "discord.js";

const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  getprices();
  let member = client.user.id;
  setInterval(function(){
    priceUpdate()
  }, 5000)
});

const priceUpdate = async () => {
  console.log("updating price");
  /*fs.readFile('data.json', 'utf8', function (err, data) {
    if (err) {
      console.log(err);
    } else {
      console.log(JSON.stringify(JSON.parse(data), null, 4));
    }
  });*/
  const server = await client.guilds.fetch("819572193796292678")
  const bot = await server.members.fetch(client.user.id)
  await getprices();

  readFile('./data.json', 'utf8', function (err, price) {
    if (err) {
      console.log(err);
    } else {
        console.log("got data from json")
       console.log(JSON.parse(price));
      let pr = price["price"];
      console.log(pr);
    }
  });
  console.log("current price is " + pr)
  bot.setNickname("$ " + pr);
  console.log("updated price! ");
  //client.user.setActivity(`Bid: ${token.Bid}  Ask: ${token.Ask}`);
}

//console.log(process.env.DISCORD_TOKEN)
client.login(
  "NzA3MDc4NDQ5NzM0NjE1MDcx.GZuYj8.W4ltYT-6tG8bcW2nnThXnYuyrT9AGiw2SOJFBs")
  