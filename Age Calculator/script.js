const userInput = document.getElementById("input-age");
userInput.max = new Date().toISOString().split("T")[0];
const calculateBtn = document.getElementById("calculate");
const result = document.querySelector(".results-box")

const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years"); 

calculateBtn.addEventListener("click", () => {
  let birthDate = new Date(userInput.value);
  let d1 = birthDate.getDate();
  let m1 = birthDate.getMonth() + 1;
  let y1 = birthDate.getFullYear();

  let current = new Date();
  let d2 = current.getDate();
  let m2 = current.getMonth() + 1;
  let y2 = current.getFullYear();

  console.log(d2-d1);
  console.log(m2-m1);
  console.log(y2-y1);

  let d3 ,m3 ,y3;
   y3 = y2-y1;

   if(m2>=m1){
    m3 = m2-m1;
   }
   else{
    m3 = m2 - m1 + 12;
    y3--;
   }

   if(d2>=d1){
    d3 = d2 - d1;
   }
   else{
    d3 = d2 - d1 + 30;
    m3--;
   }

   days.textContent = d3;
   months.textContent = m3;
   years.textContent = y3;
    
   result.style.display = "block";
   
});
