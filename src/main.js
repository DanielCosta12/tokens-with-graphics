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
    
    <div > <span>${coinsData.rank}</span></div>
    <div><h2>${coinsData.name}</h2></div>
    <div class="h3class" ><h4>${coinsData.symbol}<h4/></div>
    <div><span>$${coinsData.price_usd}</span></div>
    <div><span>${coinsData.percent_change_24h}</span></div>
    <div><span>${coinsData.percent_change_1h}</span></div>
    <div><span>${coinsData.percent_change_7d}</span></div>
    <div><span>${coinsData.market_cap_usd}</span></div>
    <div><span>${coinsData.volume24}</span></div>
    <div><span>${coinsData.csupply}</span></div>
    </div>
    
  
    
    `;
  });
  container.innerHTML = tokens.join("");
}
getData();
