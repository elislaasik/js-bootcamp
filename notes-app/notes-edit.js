const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')
const editedText = document.querySelector('#last-edited')
const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find(function(note){
    return note.id === noteID
})

if (note === undefined){
    location.assign('/notes-app/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body
editedText.textContent = generateLastEdited(note.updatedAt)

//input event for the title
titleElement.addEventListener('input', function(e){
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    editedText.textContent = generateLastEdited(note.updatedAt)
    //e.target.value - kasuta seda kindlasti
    saveNotes(notes)

})

//input event for the body
bodyElement.addEventListener('input', function(e){
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    editedText.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notes)
})

removeElement.addEventListener('click', function(e){
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/notes-app/index.html')
})


window.addEventListener('storage', function(e){
    if(key === notes){
        notes = JSON.parse(e.newValue)
        note = notes.find(function(note){
            return note.id === noteID
        })
        
        if (note === undefined){
            location.assign('/notes-app/index.html')
        }
        titleElement.value = note.title
        bodyElement.value = note.body
        editedText.textContent = generateLastEdited(note.updatedAt)

    }
})
