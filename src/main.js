const URL = "https://api.coinlore.net/api/tickers/";
const container = document.querySelector("#container");

async function getData() {
  try {
    const request = await fetch(URL);
    const coinsData = await request.json();
    addHtml(coinsData), chartJs(coinsData);
  } catch (e) {
    console.log(e);
  }
}
function chartJs(coinsData) {
  const date = new Date();
  const day = date.getDay();
  console.log(day);

  const tokens = coinsData.data[0];
  const symbol = tokens.symbol;
  const percent_change_1h = tokens.percent_change_1h;
  const price_usd = tokens.price_usd;
  const percent_24 = tokens.percent_change_24h;
  console.log(symbol, percent_change_1h, price_usd, percent_24);
  const ctx = document.getElementById("myChart");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "# of Votes",
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
function addHtml(coinsData) {
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
