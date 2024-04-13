const addBtn = document.getElementById("addBtn");
const main = document.getElementById("main");


addBtn.addEventListener("click", () => {
  addNote();
});



const saveNotes = () => {
    const notes = document.querySelectorAll(".note textarea");
    console.log(notes);

    const data = [];
    notes.forEach((note)=>data.push(note.value));

    localStorage.setItem("notes",JSON.stringify(data))
    

}



const addNote = () => {
  let note = document.createElement("div");
  note.classList.add("note");
  note.innerHTML = `
    <div class="tool">
    <i class="save fa-solid fa-floppy-disk" style="color: #ffffff;"></i>
    <i class="delete fa-solid fa-trash" style="color: #ffffff;"></i>
    </div>
    <textarea>

    </textarea>
    `;

    main.appendChild(note)

    note.querySelector(".delete").addEventListener("click",()=>{
        note.remove()
    })

    note.querySelector(".save").addEventListener("click",()=>{
        saveNotes();
    })
};
