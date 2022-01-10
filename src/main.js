let cute = 0;
const button = document.getElementById('countButton');
const display = document.getElementById('displayCount');

// button.onclick = function incrementCount() {
//   cute++;
// //   display.innerHTML = count;
// };

//fetching from CAT API// WHY DOESN'T MY API FETCH?
async function getCat() {
  const response = await fetch('https://api.thecatapi.com/v1/images/search');
  let data = await response.json();
  console.log(data);
  updateCatImage(data[0].url);
}

function updateCatImage(url) {
  document.getElementById('random-cat').src = url;
}
// getCat();
// console.log(response);
