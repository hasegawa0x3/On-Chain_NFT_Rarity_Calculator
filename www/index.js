
const result= document.getElementById("result");

const scoreButton= document.getElementById("score");
const rankButton= document.getElementById("rank");
const normalizeButton= document.getElementById("normalize");
const independenceButton= document.getElementById("independence");
const cramersvButton= document.getElementById("cramersv");

scoreButton.addEventListener("click", function() {
  document.getElementById("result").innerText = "Loading...";
  const canisterId= document.getElementById("name").value;
  fetch(`http://188.34.206.205:5001/get_rarity_score?canister_id=${canisterId}`)
  .then(data=> data.json())
  .then(res=>{
    let result = "";
    res.map(row=>
      result += `[${row}],\n\n`  
    )
    document.getElementById("result").innerText = result
  })
  .catch(err=>{
    document.getElementById("result").innerText = "Error : " + err.response;
  })
});

rankButton.addEventListener("click", function() {
  document.getElementById("result").innerText = "Loading...";
  const canisterId= document.getElementById("name").value;
  fetch(`http://188.34.206.205:5001/get_rarity_rank?canister_id=${canisterId}`)
  .then(data=> data.json())
  .then(res=>{
    let result = "";
    res.map(row=>
      result += `[${row}],\n\n`  
    )
    document.getElementById("result").innerText = result
  })
  .catch(err=>{
    document.getElementById("result").innerText = "Error : " + err.response;
  })
});

normalizeButton.addEventListener("click", function() {
  document.getElementById("result").innerText = "Loading...";
  const canisterId= document.getElementById("name").value;
  fetch(`http://188.34.206.205:5001/get_trait_normalize?canister_id=${canisterId}`)
  .then(data=> data.json())
  .then(res=>{
    let result = "";
    res.map(row=>
      result += `[${row}],\n\n`  
    )
    document.getElementById("result").innerText = result
  })
  .catch(err=>{
    document.getElementById("result").innerText = "Error : " + err.response;
  })
});

independenceButton.addEventListener("click", function() {
  document.getElementById("result").innerText = "Loading...";
  const canisterId= document.getElementById("name").value;
  fetch(`http://188.34.206.205:5001/get_trait_independence?canister_id=${canisterId}`)
  .then(data=> data.json())
  .then(res=>{
    let result = "";
    res.forEach(row => {
      result += `[${row}],` + "\n\n" 
    })
    document.getElementById("result").innerText = result
  })
  .catch(err=>{
    document.getElementById("result").innerText = "Error : " + err.response;
  })
});

cramersvButton.addEventListener("click", function() {
  document.getElementById("result").innerText = "Loading...";
  const canisterId= document.getElementById("name").value;
  fetch(`http://188.34.206.205:5001/get_trait_cramersv?canister_id=${canisterId}`)
  .then(data=> data.json())
  .then(res=>{
    let result = "";
    res.map(row=>
      result += `[${row}],\n\n`  
    )
    document.getElementById("result").innerText = result
  })
  .catch(err=>{
    document.getElementById("result").innerText = "Error : " + err.response;
  })
});