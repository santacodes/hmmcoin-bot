import getprices from "./hmmapi.mjs";
import { Client, GatewayIntentBits, Message } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });



client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
  let price = String(getprices());
  //client.user.setPresence({ activities: [{ name: 'Getting the Price of HMM' }], status: 'idle' });
});

client.on("message", (msg) => {
  console.log(msg);
  if (msg.content === "hello") {
    return msg.reply("hey");
  }
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "ping") {
    await interaction.reply("Pong!");
  }
});

//console.log(process.env.DISCORD_TOKEN)
client.login("ODI2MDc4MjcyMTQzMDk3OTA2.Gn84w2.ww4FTfDzXDFJjbHDA3Kj-avalvKVFAcGZJItxo");
