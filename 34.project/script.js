const addBtn = document.getElementById('add')

addBtn.addEventListener('click', () => addNewNote())
function addNewNote(text = ''){
    const note = document.createElement('div')
    note.classList.add('note')
    note.innerHTML = `
    <div class="tools">
        <button class="edit">
            <i class="fa-solid fa-file-pen"></i>
        </button>
        <button class="delete">
            <i class="fa-solid fa-trash"></i>
        </button>
    </div>

    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
    `
    const editBtn = note.querySelector('.edit')
    const deleteBtn = note.querySelector('.delete')
    const main = note.querySelector('.main')
    const textArea = note.querySelector('textarea')

    deleteBtn.addEventListener('click', () =>{ 
        note.remove()
})
    
    editBtn.addEventListener('click', () =>{
        main.classList.toggle('hidden')
        textArea.classList.toggle('hidden')

        updateLS()      
    })
    
    document.body.appendChild(note)
}

function updateLS(){
    const notesText = document.querySelectorAll('textarea')
    const notes = []

    notesText.forEach(note => notes.push(note.value))
    console.log(notes)
}

