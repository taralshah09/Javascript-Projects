const apiURL = "https://api.qrserver.com/v1/create-qr-code/?&data="
const inputBox = document.getElementById("input");
const qrCodeBox = document.querySelector(".qrcode-box");
const qrCode = document.getElementById("qrCode");
const generate = document.getElementById("generate");

const getQRCode = async(url) => {
    const res = await fetch(apiURL + url);
    // const data = await res.json()
    console.log(res)
    qrCode.src = apiURL + url;
    qrCodeBox.style.display = "flex";
    inputBox.value = ""
}



generate.addEventListener("click",()=>{
    getQRCode(inputBox.value);
})

inputBox.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        getQRCode(inputBox.value)
    }
})