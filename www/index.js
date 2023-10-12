
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
    let result = "";
    result += `Harmonic Algorithm\n\n`  
    result += `[${res[2]}],\n\n`  
    result += `Geometric Algorithm\n\n`  
    result += `[${res[3]}],\n\n`  
    result += `Arithmetic Algorithm\n\n`  
    result += `[${res[4]}],\n\n`  
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
    result += `Harmonic Algorithm\n\n`  
    result += `[${res[2]}],\n\n`  
    result += `Geometric Algorithm\n\n`  
    result += `[${res[3]}],\n\n`  
    result += `Arithmetic Algorithm\n\n`  
    result += `[${res[4]}],\n\n` 
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
    result += `Normalized Harmonic\n\n`  
    result += `[${res[1]}],\n\n`  
    result += `Normalized Geometric by Frequencies\n\n`  
    result += `[${res[2]}],\n\n`  
    result += `Normalized Geometric by Counts\n\n`  
    result += `[${res[3]}],\n\n`  
    result += `Normalized Arithmetic\n\n`  
    result += `[${res[4]}],\n\n`
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
   let result = "<table>";
    res.map((row, row_index)=>{
      result += "<tr>"
      row.map((col, col_index) =>{
        result += `<td>${res[col_index][row_index]}</td>`  
      })
      result += `</tr>`  
    })
    result += `</table>`  
    document.getElementById("result").innerHTML = result
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
    let result = "<table>";
    res.map((row, row_index)=>{
      result += "<tr>"
      row.map((col, col_index) =>{
        result += `<td>${res[col_index][row_index]}</td>`  
      })
      result += `</tr>`  
    })
    result += `</table>`  
    document.getElementById("result").innerHTML = result
  })
  .catch(err=>{
    document.getElementById("result").innerText = "Error : " + err.response;
  })
});
