const form = document.querySelector("form");
const resultDiv = document.querySelector(".result");
const inputBox = document.getElementById("inputBox");
const submitBtn = document.getElementById("submit");

form.addEventListener("submit", (e) => {
  resultDiv.innerHTML = "";
  //It will stop the reloading of form everytime submit btn is clicked
  e.preventDefault();

  //How to run the getWordInfo( )

  //Method 1
  // getWordInfo(form.elements[0].value);

  //Method 2
  getWordInfo(inputBox.value);
  inputBox.value = "";
});

const getWordInfo = async (input) => {


  if (input === "") {
    alert("Please enter the word!");
    return;
  }
  resultDiv.style.display = "flex";

  resultDiv.innerHTML = `
  <img style="width:30px;" src="Reload@1.25x-1.0s-200px-200px.gif"></img>

  `

  const respone = await fetch(
    `https://api.dictionaryapi.dev/api/v2/entries/en/${inputBox.value}`
  );
  const data = await respone.json();
  // console.log(data)

 try{ let arr = data[0].meanings;
  let resultElem = document.createElement("div");
  console.log(arr);
    resultDiv.innerHTML = "";
  resultDiv.innerHTML += `
  <h2>Word : ${data[0].word}</h2>
  <br>

  `;

  arr.forEach((element) => {

    resultDiv.innerHTML += `
        <p><strong>${element.partOfSpeech}</strong><p>
        <p>${element.definitions[0].definition}<p>
       
        `;

    if (element.definitions[0].synonyms[0] !== undefined) {
      resultDiv.innerHTML += `<p><strong>Synonyms</strong> :</p>`;
      for (let i = 0; i < element.definitions[0].synonyms.length; i++) {
        resultDiv.innerHTML += `
                <li>${element.definitions[0].synonyms[i]}</li>
                `;
      }
    }
    resultDiv.innerHTML += `<br>`;

    if (element.definitions[0].antonyms[0] !== undefined) {
      resultDiv.innerHTML += `<p><strong>Antonyms</strong> :</p>`;
      for (let i = 0; i < element.definitions[0].antonyms.length; i++) {
        resultDiv.innerHTML += `
                <li>${element.definitions[0].antonyms[i]}</li>
                `;
      }
    }
    resultDiv.innerHTML += ``;
  });

  resultDiv.appendChild(resultElem);}
  catch{
    alert("Invalid word!")
  }
};
