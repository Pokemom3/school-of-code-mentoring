let cute = 0;
const button = document.getElementById("countButton");
const display = document.getElementById("displayCount");

button.onclick = function incrementCount() {
  cute++;
  display.innerHTML = count;
};

//fetching from CAT API// WHY DOESN'T MY API FETCH?
async function getCat() {
  const response = await fetch("https://docs.thecatapi.com/");
  let data = await response.json();
  return data;
  console.log(response);
}

getCat();
console.log(response);
