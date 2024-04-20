const addBtn = document.getElementById("add-note");
const main = document.getElementById("main");
const deleteBtn = document.getElementById("delete");
const saveBtn = document.getElementById("save");

addBtn.addEventListener("click", () => {
  addNote();
});

const addNote = (text ="") => {
  const note = document.createElement("div");
  note.innerHTML = `
  <div class="note">
            <div class="tool-bar">
                <i class="fa-solid fa-floppy-disk"id="save"></i>
                <i class="fa-solid fa-trash" id="delete"></i>
            </div>
            <textarea placeholder="Enter your text here..." autofocus="true">${text}</textarea>
        </div>
  `;
  main.appendChild(note);
  saveNotes();


  note.querySelector("#delete").addEventListener("click", () => {
    note.remove();
    saveNotes();
  });

  note.querySelector("#save").addEventListener("click", () => {
    saveNotes();
  });

};

const saveNotes = () => {
  const notes = document.querySelectorAll(".note textarea");
  const data = [];

  notes.forEach((note) => {
    data.push(note.value);
  });
  // console.log(data)

  //Here we are assigning notes the value of data which is converted to string using .stringify()
  localStorage.setItem("notes", JSON.stringify(data));
  // localStorage.clear()
};

(
  function(){
    const lsnotes = JSON.parse(localStorage.getItem("notes"));
    // console.log(lsnotes);
    lsnotes.forEach(
      (lsnote) => {
        addNote(lsnote);
      }
    )
  }
)()
