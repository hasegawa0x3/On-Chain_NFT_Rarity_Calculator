
const result= document.getElementById("result");

const scoreButton= document.getElementById("score");
const rankButton= document.getElementById("rank");
const normalizeButton= document.getElementById("normalize");
const independenceButton= document.getElementById("independence");
const cramersvButton= document.getElementById("cramersv");

scoreButton.addEventListener("click", function() {
  const canisterId= document.getElementById("name").value;
  fetch(`http://127.0.0.1:8000/get_canister_data?canister_id=${canisterId}`)
  .then(data=> {document.getElementById("result").innerText = JSON.parse(data.body); console.log(data.body);})
  .catch(err=>console.log(err.response))
});

rankButton.addEventListener("click", function() {
  const canisterId= document.getElementById("name").value;
  fetch(`http://127.0.0.1:8000/get_rarity_score?canister_id=${canisterId}`)
  .then(data=> document.getElementById("result").innerText = data)
  .catch(err=>console.log(err.response))
});

normalizeButton.addEventListener("click", function() {
  const canisterId= document.getElementById("name").value;
  fetch(`http://127.0.0.1:8000/get_rarity_score?canister_id=${canisterId}`)
  .then(data=> document.getElementById("result").innerText = data)
  .catch(err=>console.log(err.response))
});

independenceButton.addEventListener("click", function() {
  const canisterId= document.getElementById("name").value;
  fetch(`http://127.0.0.1:8000/get_rarity_score?canister_id=${canisterId}`)
  .then(data=> document.getElementById("result").innerText = data)
  .catch(err=>console.log(err.response))
});

cramersvButton.addEventListener("click", function() {
  const canisterId= document.getElementById("name").value;
  fetch(`http://127.0.0.1:8000/get_rarity_score?canister_id=${canisterId}`)
  .then(data=> document.getElementById("result").innerText = data)
  .catch(err=>console.log(err.response))
});