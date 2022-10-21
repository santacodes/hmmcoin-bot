import { getprices } from "./hmmapi.mjs";

const { Client, GatewayIntentBits, Message } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
  const botid = client.user.id;
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

client.login(
  "ODI2MDc4MjcyMTQzMDk3OTA2.Gn84w2.ww4FTfDzXDFJjbHDA3Kj-avalvKVFAcGZJItxo"
);
