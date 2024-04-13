const getColor = () => {
    const randomNumber = Math.floor(Math.random() * 16777215)
    const randomCode = "#" + randomNumber.toString(16);
    return randomCode;
    // console.log(randomNumber)
}

const clickBtn = document.getElementById("click");
const color = document.getElementById("color");
const colorCode = document.getElementById("color-code");
const colorBox = document.querySelector(".color-box");

clickBtn.addEventListener("click", ()=>{
    color.style.background = getColor();
    colorCode.textContent = getColor();
})

colorBox.addEventListener("click",()=>{
        color.style.background = getColor();
    colorCode.textContent = getColor();
})

