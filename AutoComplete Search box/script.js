let availableKeywords = [
    "HTML",
    "CSS",
    "Web development",
    "Javascript",
    "Where to learn coding online from",
    "Web design tutorials"
]

const resultBox = document.querySelector(".result-box")
const inputBox= document.getElementById("input-box")

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
            return keyword.toLowerCase().includes(input.toLowerCase());
        })
        console.log(result)
        display(result)
    }
}

function display(result){
    const content = result.map((list)=>{
        return `<li onclick="selectInput(this)" onkeydown="selectInput(this)    "> ${list} </li>`
    }).join("")
    resultBox.innerHTML = `<ul type="none"> ${content} </ul>`;
}

function selectInput(item){
    inputBox.value = item.textContent;
    resultBox.innerHTML = ""
}