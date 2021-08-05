const input = document.querySelector("#keyword");
const results = document.querySelector("#results");

const displayMovies = (movies) => {
  movies.forEach((movie) => {
    results.insertAdjacentHTML(
      "beforeend", 
      `<li class='list-inline-item'>
        <img width="120" src="${movie.Poster}" alt="poster" />
      </li>`);
  });
};

const fetchMovies = (keyword) => {
  const url = `https://www.omdbapi.com/?s=${keyword}&apikey=adf1f2d7`;
  fetch(url)
  .then(response => response.json())
  .then((data) => {
    const movies = data.Search;
    results.innerHTML = "";
    displayMovies(movies);
  });
};

const searchMovies = (event) => {
  event.preventDefault();
  fetchMovies(input.value);
}

export { fetchMovies, searchMovies };