const URL = "https://api.coinlore.net/api/tickers/";
const container = document.querySelector("#container");
async function getData() {
  try {
    const request = await fetch(URL);
    const coinsData = await request.json();
    console.log(coinsData.data);
    return addHtml(coinsData);
  } catch (e) {
    console.log(e);
  }
}
function addHtml(coinsData) {
  console.log(coinsData.data);
  //   const {data} = coinsData verificar
  const tokens = coinsData.data.map((coinsData) => {
    return `
    <div class="coin ${coinsData.rank}">
    <p>${coinsData.rank}</p>
    <p>${coinsData.name}</p>
    <p>${coinsData.symbol}<p/>
    <p>$${coinsData.price_usd}</p>
    <p>${coinsData.percent_change_24h}</p>
    <p>${coinsData.percent_change_1h}</p>
    <p>${coinsData.percent_change_7d}</p>
    <p>${coinsData.market_cap_usd}</p>
    <p>${coinsData.volume24}</p>
    <p>${coinsData.csupply}</p>
    </div>
    
  
    
    `;
  });
  container.innerHTML = tokens.join("");
}
getData();
