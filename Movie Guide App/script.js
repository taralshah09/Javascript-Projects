//API_KEY = "570a9cd"
//https://www.omdbapi.com/?t=${searchBox.value}&apikey=${API_KEY}

const API_KEY = "570a9cd";
const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const resultContainer = document.querySelector(".result-container");

const getMovies = async(item) => {
    const res = await fetch(`https://www.omdbapi.com/?t=${item}&apikey=${API_KEY}`);
    const data = await res.json();
    console.log(data);
    addMovie(data);
}

searchBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    getMovies(searchBox.value); 
})

const addMovie = (data) => {
    resultContainer.innerHTML = `
    <div class="img-box">
        <img src="${data.Poster}" >
    </div>
    <div class="movie-details">
        <h2 class="title">${data.Title}</h2>
        <p class="rating">Rating : ${data.Ratings[0].Value}</p>
        <div class="buttons-div">
            ${printButtons(data.Genre.split(","))}
        </div>
        <p class="released-date"><strong>Released Date : </strong>${data.Released}</p>
        <p class="duration"><strong>Duration : </strong>${data.Runtime}</p>
        <p class="cast"><strong>Cast : </strong>${data.Actors}</p>
        <p class="plot"><strong>Plot:</strong>${data.Plot}</p>
    </div>
    
    `
}

const printButtons = (array) => {
    array.forEach(element => {
        return `<p>${element}</p>`
    });
}

/*
${data.Genre.forEach(element => {
                resultContainer.innerHTML += `
                <button class="genre-type">${element}</button>
                `
            })}
*/

/*
<div class="genre-box">
            ${
                data.Genre.split(",").forEach(item => {
                `<p>${item}</p>`    
                })
            }
        </div>
*/