(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const d="https://api.coinlore.net/api/tickers/",c=document.querySelector("#container");async function l(){try{const r=await(await fetch(d)).json();return console.log(r.data),a(r)}catch(o){console.log(o)}}function a(o){console.log(o.data);const r=o.data.map(n=>`
    <div class="coin ${n.rank}">
    
    <div > <span>${n.rank}</span></div>
    <div><h2>${n.name}</h2></div>
    <div class="h3class" ><h4>${n.symbol}<h4/></div>
    <div><span>$${n.price_usd}</span></div>
    <div><span>${n.percent_change_24h}</span></div>
    <div><span>${n.percent_change_1h}</span></div>
    <div><span>${n.percent_change_7d}</span></div>
    <div><span>${n.market_cap_usd}</span></div>
    <div><span>${n.volume24}</span></div>
    <div><span>${n.csupply}</span></div>
    </div>
    
  
    
    `);c.innerHTML=r.join("")}l();
