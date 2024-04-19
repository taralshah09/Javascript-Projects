const userInput = document.getElementById("user-input");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const resultsDiv = document.getElementById("results-div");
const resultsDiv2 = document.getElementById("results-div");

checkBtn.addEventListener("click", () => {
  checkNumber();
});

userInput.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        checkNumber();
    }
})

//It processes on the input taken from the user and returns the new telephone number
const takeInputNumber = (input) => {
  let telephoneNumber = "";

  if (input === "") {
    alert("Please enter a valid phone number!");
  } else {
    let arr = input.split("");
    arr.forEach((elem) => {
      if (
        elem == "1" ||
        elem == "2" ||
        elem == "3" ||
        elem == "4" ||
        elem == "5" ||
        elem == "6" ||
        elem == "7" ||
        elem == "8" ||
        elem == "9" ||
        elem == "0" ||
        elem == "+"
      ) {
        telephoneNumber += elem;
      }
    });
    return telephoneNumber;
  }
};

const checkNumber = () => {
  const number = takeInputNumber(userInput.value);
  let ans = "Valid";
  if (number.length === 11 || number.length === 12) {
    if (number.charAt(0) === "1") {
      ans = "Valid";
      console.log("Valid Number - 11");
      return createResult(userInput.value, ans);
    }
    
  }
  if (number.length === 10) {
    ans = "Valid";
    console.log("Valid Number");
    return createResult(userInput.value, ans);

  } else {
    ans = "Invalid";
    console.log("Invalid");
    
    return createResult(userInput.value, ans);

  }
};

const createResult = (num, ans) => {
  const resultEl = document.createElement("div");
  resultEl.classList.add("result-el");
  resultEl.innerHTML = `
    <p>${ans} US number:<br>${num}
    </p>`;
  resultsDiv.appendChild(resultEl);
  userInput.value = ""
  
  return;
};

clearBtn.addEventListener("click",()=>{
    resultsDiv.innerHTML= ""
})

