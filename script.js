function addNote() {
  const input = document.getElementById("noteInput");
  const note = input.value.trim();
  if (note) {
    let notes = JSON.parse(localStorage.getItem('notes') || "[]");
    notes.push(note);
    localStorage.setItem('notes', JSON.stringify(notes));
    input.value = "";
    renderNotes();
  }
}

function renderNotes() {
  const notes = JSON.parse(localStorage.getItem('notes') || "[]");
  const notesList = document.getElementById("notesList");
  notesList.innerHTML = "";
  notes.forEach((note, i) => {
    const li = document.createElement("li");
    li.textContent = note;
    notesList.appendChild(li);
  });
}

window.onload = renderNotes;
