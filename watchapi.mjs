//API to get the 24h volume
import {readFile, readFileSync, writeFile} from "fs";
import fetch from "node-fetch";

const botmsg = "[HMC] ";

export default function contents() {
    let price = null;
    let fileText = readFileSync('./data.json');
    let jsonParsed = JSON.parse(fileText);
    price = jsonParsed["price"];

    fetch("https://nomics.com/_next/data/2ztKxC_zLgSwCcRmO7GeP/assets/hmc2-hmmcoin.json?currency=hmc2-hmmcoin", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => response["pageProps"]["data"]["ticker"]["1d"]["price_change_pct"])
    .then((response) => console.log(JSON.stringify(response, null, "\t")))
    .then((response) => {writeFile("./data.json", JSON.stringify({"price":price,"24h":response}, null, 2), (err) => {
        if (err) { console.error(botmsg + err); };
        console.log(botmsg + "Updated the 24h percentage in JSON file");
    });});
}

contents(); //for testing (only runs when this file is called)