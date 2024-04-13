const item = document.getElementById("item");
const toDoBox = document.getElementById("to-do-box");


//This is about entering the data to the input
item.addEventListener("keyup",(event)=>{
    if(event.key == "Enter"){
        addToDo(item.value);
        item.value = ""
    }
     
})

const addToDo = (item) => {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
    ${item} <i class="fa-solid fa-xmark"></i>
    `
    toDoBox.appendChild(listItem);

    listItem.addEventListener("click",()=>{
        listItem.classList.toggle("done");

    })
    

    listItem.querySelector("i").addEventListener("click",()=>{
        listItem.remove();
    })

    //if instead of liststyle we do it this way : then all the li will be removed
    // document.querySelector("#to-do-box li i").addEventListener("click",()=>{
    //     listItem.remove();
    // })
}

