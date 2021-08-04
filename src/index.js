const input = document.querySelector("#keyword");
const search = document.querySelector("#submit");
const results = document.querySelector("#results");

search.addEventListener("click", (event) => {
  event.preventDefault();
  const url = `https://www.omdbapi.com/?s=${input.value}&apikey=adf1f2d7`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    const movies = data.Search;
    results.innerHTML = "";
    movies.forEach((movie) => {
      results.insertAdjacentHTML(
        "beforeend", 
        `<li class='list-inline-item'>
          <img src="${movie.Poster}" alt="poster" />
          <p>${movie.Title}</p>
        </li>`);
    });
  });
});


// //////////////////////
// Rehearsal
// //////////////////////

// 1. Select the button
// const button = document.querySelector("#click-me");

// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, innerText, class disabled
//   // event.currentTarget.classList.add("disabled");
//   event.currentTarget.disabled = true;
//   event.currentTarget.innerText = "Loading...";
// });