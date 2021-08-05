// imports
import { fetchMovies, searchMovies } from "./movies";
import initSortable from "./plugins/init_sortable";
import { Application } from "stimulus"
import { definitionsFromContext } from "stimulus/webpack-helpers"

// init for Stimulus
const application = Application.start()
const context = require.context("./controllers", true, /\.js$/)
application.load(definitionsFromContext(context))

// Element selections
const search = document.querySelector("#submit");

// Function calls
fetchMovies("matrix");
initSortable();

// Event listeners
search.addEventListener("click", searchMovies);


// //////////////////////
// Rehearsal
// //////////////////////

// // 1. Select the button
// const button = document.querySelector("#click-me");

// // 2. Listen to a click
// button.addEventListener("click", (event) => {
//   console.log(event);
//   // 3. Change the DOM, innerText, class disabled
//   // event.currentTarget.classList.add("disabled");
//   event.currentTarget.disabled = true;
//   event.currentTarget.innerText = "Loading...";
// });

