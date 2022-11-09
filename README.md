# HMC Bot
<img alt="HMC" width="180px" src="https://hmmcoin.com/img/logo-hq.png" />

### A [Hmmcoin](https://hmmcoin.com/) live price discord bot build with [discord.js](https://discord.js.org/#/)

# Requirements 
1. [Node.js](https://nodejs.org/en/download/)
2. [Discord Bot Token](https://discordjs.guide/preparations/setting-up-a-bot-application.html#creating-your-bot)
3. Enable GuildPresences, MessageContent and GuildMembers intents in [Discord Developer Portal](https://discord.com/developers/applications)

## 🚀 Getting Started

```sh
git clone https://github.com/santacodes/hmmcoin-bot.git
cd hmmcoin-bot
npm install -g
```
## ⚙️ Configuration

Replace *YOUR_TAKEN_HERE* with the Bot token 

⚠️ **Note: Never commit or share your token or api keys publicly** ⚠️

```js
client.login("YOUR_BOT_TOKEN")
```

Replace the Guild ID to your Server ID with the Bot

```js 
const server = await client.guilds.fetch("817821642554212362")
```

**Tweaking other settings -** 

Change the second parameter (_in this case 4_) to the number of digits you want to round off

```js
price = roundTo(price, 4);
```
