//API to get the 24h volume

import fetch from "node-fetch";

function contents() {
  fetch("https://nomics.com/_next/data/2ztKxC_zLgSwCcRmO7GeP/assets/hmc2-hmmcoin.json?currency=hmc2-hmmcoin", {
    method: "GET",
    headers: {
      Accept: "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => console.log(JSON.stringify(response)));
}

contents();