const quote = document.getElementById("quote");
const author = document.getElementById("author");
const generate = document.getElementById("generate");
const quoteBox = document.querySelector(".quote-box")

const getQuote = async() => {
    const res = await fetch("https://api.quotable.io/random?tags=famous-quotes");
    const data = await res.json()
    console.log(data)

    quote.textContent = data.content;
    author.textContent = data.author;
    console.log(quoteBox.textContent)
   
}

getQuote();

generate.addEventListener("click",()=>{
getQuote();
})


