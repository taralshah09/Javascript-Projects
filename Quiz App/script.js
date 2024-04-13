const questions = [
  {
    que: "Which of the following is the markup language ?",
    a: "CSS",
    b: "HTML",
    c: "JAVA",
    d: "JavaScript",
    correct: "b",
  },
  {
    que: "Which of the following is suitable for DSA ?",
    a: "HTML",
    b: "JavaScript",
    c: "JAVA",
    d: "CSS",
    correct: "c",
  },
  {
    que: "Which of the following is browser language? ?",
    a: "CSS",
    b: "JavaScript",
    c: "JAVA",
    d: "HTML",
    correct: "b",
  },
];

let index = 0;
let total= questions.length;
let right = 0;
let wrong = 0;

const questionNumber = document.getElementById("question-number")
const question = document.getElementById("question");
const questionsInput = document.querySelectorAll(".options");
console.log(questionsInput)

const loadQuestion = (index) =>{

    if(index === questions.length){
       return quizEnd();
    }

    const data = questions[index];
    questionNumber.innerText = (index+1) + ". ";
    question.innerText = data.que;
    questionsInput[0].nextElementSibling.innerText = data.a;
    questionsInput[1].nextElementSibling.innerText = data.b; 
    questionsInput[2].nextElementSibling.innerText = data.c; 
    questionsInput[3].nextElementSibling.innerText = data.d; 
}

const submitQuestion = () =>{ 
    
    const data = questions[index]
    let ans = getAnswer();
    
    if(data.correct === ans){
        right++;
    }
    else{
        console.log(ans)
        console.log(data.correct)
        wrong++;
    }
    index++;
    loadQuestion(index);
    reset();
}

const getAnswer = () => {
    let ans;
   questionsInput.forEach((input)=>{
    if(input.checked){
        ans =  input.value;
    }
   })
   return ans;
}

const reset = () => {
    questionsInput.forEach((inputEL)=>{
        inputEL.checked = false;
    })
}

const quizEnd = () => {
    document.getElementById("box").innerHTML = `
    <style>
    #box{
        display:flex;
        align-items:center;
        justify-content:center;
        font-size:25px;
        
    }
    </style>
    <h3>Thank you for playing</h3>
    <h3>You have scored  : <span style="color:blueviolet">${right}</span> / ${total}</h3>
    `
}

loadQuestion(index);


// document.getElementById("btn").addEventListener("click",getAnswer)
document.getElementById("btn").addEventListener("click",submitQuestion)