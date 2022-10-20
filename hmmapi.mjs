import fetch from "node-fetch";
import express from "express";
import cors from "cors";

const HMCAddress = "0xdab9d64a07d5cad715692b1a7fb6e32d1a069c23";

const getHmmCoinToMatic = () =>
  fetch("https://api.fura.org/subgraphs/name/quickswap", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      operationName: "pairs",
      variables: {
        allPairs: [HMCAddress],
      },
      query:
        "fragment PairFields on Pair {\n  id\n  token0 {\n    id\n    symbol\n    name\n    totalLiquidity\n    derivedETH\n    __typename\n  }\n  token1 {\n    id\n    symbol\n    name\n      totalLiquidity\n    derivedETH\n    __typename\n  }\n  reserve0\n  reserve1\n  reserveUSD\n  totalSupply\n  trackedReserveETH\n  reserveETH\n  volumeUSD\n  untrackedVolumeUSD\n  token0Price\n  token1Price\n  createdAtTimestamp\n  __typename\n}\n\nquery pairs($allPairs: [Bytes]!) {\n  pairs(first: 500, where: {id_in: $allPairs}, orderBy: trackedReserveETH, orderDirection: desc) {\n    ...PairFields\n    __typename\n  }\n}\n",
    }),
  })
    .then((response) => response.json())
    .then((result) => result?.data?.pairs?.[0]?.token0Price)
    .catch((error) => console.log("error", error));

const getMaticToUSD = () =>
  fetch("https://min-api.cryptocompare.com/data/price?fsym=MATIC&tsyms=USD", {
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => data?.USD);

/*
express()
  .use(cors())
  .get('/', (req, res) => {  //changed '/price' to '/'
    Promise.all([
      getHmmCoinToMatic(),
      getMaticToUSD()
    ])
      .then(([hmmCoinToMatic, maticToUSD]) => hmmCoinToMatic * maticToUSD)
      .then(price => {res.send(JSON.stringify(price))})
  })
  .listen(5000) //changed port to 400 as it was bugging (You really want to use port 80/443 for best interoperability for REST APIs)
*/

function getprices() {
  return [getHmmCoinToMatic(), getMaticToUSD()];
}


Promise.all([
  getHmmCoinToMatic(),
  getMaticToUSD()
])
  .then(([hmmCoinToMatic, maticToUSD]) => hmmCoinToMatic * maticToUSD)
  .then(price => console.log("I got it to work" + price)) //return price to a method called in main.js
  

