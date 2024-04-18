const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const recipeContainer = document.querySelector(".recipe-container");
const recipeDetailsContent = document.querySelector(".recipe-details-content");
const recipeDetails = document.querySelector(".recipe-details");
const recipeCloseBtn = document.querySelector(".recipe-close-btn");
const viewRecipeBtn = document.querySelector(".view-recipe-btn");

const getRecipes = async () => {
  const res = await fetch(
    `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchBox.value}`
  );
  const data = await res.json();

  const meals = data.meals;
  console.log(meals);
  // const mealName = meals.map(meal=>meal.strMeal)
  // console.log(mealName);
  recipeContainer.innerHTML = "<h2>Fetching Recipes....<h2>";

  setTimeout(() => {
    displayRecipe(meals);
  }, 1000);

  // if(!data.length){
  // 	recipeContainer.innerHTML = "";
  // 	alert("Please enter valid keyword!");
  // 	recipeContainer.innerHTML = "<h2>Please enter a valid keyword</h2>";
  // 	return ;
  // }
};

searchBtn.addEventListener("click", getRecipes);

const displayRecipe = (meal) => {
  recipeContainer.innerHTML = "";
  meal.forEach((element) => {
    let recipeDiv = document.createElement("div");
    recipeDiv.classList.add("recipe-div");
    recipeDiv.innerHTML = `
			<h2>${element.strMeal}</h2>
			<img src="${element.strMealThumb}" style="width:90%;border-radius:10px;">
			<p>Belongs to ${element.strCategory} category</p>
			<p>${element.strArea} dish</p>
		`;
	const button = document.createElement("button");
	button.textContent = "View Recipe";
	recipeDiv.appendChild(button);

	button.addEventListener("click",()=>{
		openRecipePopUp(element)
	});

	recipeCloseBtn.addEventListener("click",()=>{
		recipeDetails.style.display = "none";
	})

    recipeContainer.appendChild(recipeDiv);
  });
};


const openRecipePopUp = (mealElem) => {
	// recipeDetails.textContent = "";
  recipeDetails.style.display = "flex";
  recipeDetailsContent.innerHTML = `
	<h2>${mealElem.strMeal}</h2>
	<h3 style="margin-top:25px;">Ingredients: </h3>
	<ul type="none">${fetchIngredients(mealElem)}</ul>
	<h3 style="margin-top:25px;">Method to prepare: </h3>
	<p>${mealElem.strInstructions}</p>
  `;


};

const fetchIngredients = (meal) => {

	let ingredients_list = "";

	for(let i = 1;i<=20;i++){
		const ingredient = meal[`strIngredient${i}`];

		if(ingredient){
			const measurement = meal[`strMeasure${i}`];
			ingredients_list += `<li>  ${ingredient} : ${measurement}</li>`
		}
		else{
			break;
		}
	}
	
	return ingredients_list;
}

