const seacrh = document.getElementById("search");
const searchBtn = document.getElementById("search-btn")
const result = document.getElementById("result-div") 
const showMore = document.getElementById("show-more")
const searchForm = document.getElementById("search-form")


const API_KEY = "HO5c0GrIiA4buzSRneqEIZuWcImn8oSdDyV1MTmgP6E";
let keyword = "";
let page = 1;


async function getImages() {
    keyword = seacrh.value;
    const url = ` https://api.unsplash.com/search/collections?page=${page}&query=${search.value}&client_id=${API_KEY}&per_page=12`

    const res = await fetch(url);
    const data = await res.json();

    try{console.log(data);}
    catch{
        alert("Invalid!");
    }
}

