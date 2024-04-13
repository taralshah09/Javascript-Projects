const upperCaseList = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCaseList = "abcdefghijklmnopqrstuvwxyz";
const numbersList = "0123456789";
const symbolsList = "\"'\/,.?:;{[}]_-+=)(*&^%$#@!~`"

const passwordBox = document.getElementById("password");
let password = "";
const passwordLength = document.getElementById("password-length");

const upperCase = document.getElementById("upper-case");
const lowerCase = document.getElementById("lower-case");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const button = document.getElementById("btn")

if(symbols.checked){
    console.log("Yes!")
}

const getRandom = (dataset) => {
    return dataset[Math.floor(Math.random() * dataset.length)];
}

const getPassword = (password = "") => {
    if(upperCase.checked){
        password += getRandom(upperCaseList);
    }
    if(lowerCase.checked){
        password += getRandom(lowerCaseList);
    }
    if(numbers.checked){
        password += getRandom(numbersList);
    }
    if(symbols.checked){
        password += getRandom(symbolsList);
    }
    
    if(password.length <= passwordLength.value){
        return getPassword(password);
    }

    passwordBox.textContent = truncateString(password,passwordLength.value); 
    // console.log(password)
    return password
    
}


const truncateString = (str,num) => {
    if(str.length > num){
        let subStr = str.substring(0,num);
        return subStr;
    }
}
