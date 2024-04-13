const APIurl = "https://api.github.com/users/";
const main = document.querySelector("#main");
const userInput = document.getElementById("search")

const getUser = async (username) => {
  const res = await fetch(APIurl + username);
  const data = await res.json();
//   console.log(data);

  const card = `
    <div class="card">
    <div>
        <img class="avatar" src="${data.avatar_url}" alt="Florin Pop">
    </div>
    <div class="user-info">
        <h2>${data.name}</h2>
        <p>${(data.bio)?data.bio:"\n"}</p>

        <ul class="info">
            <li>${data.followers}<strong>Followers</strong></li>
            <li>${data.following}<strong>Following</strong></li>
            <li>${data.public_repos}<strong>Repos</strong></li>
        </ul>

        <div id="repos" style="margin-top:25px;">
            
        </div>
    </div>
    </div>
    `;
    main.innerHTML = card;
    getRepos(username);
};

// getUser("taralshah09");


const getRepos = async(username) => {
    const repos = document.querySelector("#repos")
    const response = await fetch(APIurl + username + "/repos")
    const data = await response.json();
    data.forEach(
        (item) => {

            const elem = document.createElement("a")
            elem.classList.add("repo")
            elem.href = item.html_url
            elem.innerText = item.name
            elem.target = "_blank"
            repos.appendChild(elem)
        }
    )
}

const formSubmit = () => {
    if(userInput.value !== ""){
        getUser(userInput.value);
        userInput.value = "";
    }
    else{
        return false;
    }
}

userInput.addEventListener("focusout",()=>{
    formSubmit();
})
userInput.addEventListener("keydown",(e)=>{
    if(e.key == "Enter"){
        if(!formSubmit()){
            main.innerHTML = "";
            return;
        }
        formSubmit();
    }
})