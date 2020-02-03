'use strict'

const titleElement = document.querySelector('#note-title')
const bodyElement = document.querySelector('#note-body')
const removeElement = document.querySelector('#remove-note')

const editedText = document.querySelector('#last-edited')

const noteID = location.hash.substring(1)
let notes = getSavedNotes()
let note = notes.find((note) =>  note.id === noteID)

if (!note){
    location.assign('/notes-app/index.html')
}

titleElement.value = note.title
bodyElement.value = note.body

editedText.textContent = generateLastEdited(note.updatedAt)


//input event for the title
titleElement.addEventListener('input', (e) =>{
    note.title = e.target.value

    note.updatedAt = moment().valueOf()
    editedText.textContent = generateLastEdited(note.updatedAt)

    //e.target.value - kasuta seda kindlasti
    saveNotes(notes)

})

//input event for the body
bodyElement.addEventListener('input', (e) => {
    note.body = e.target.value

    note.updatedAt = moment().valueOf()
    editedText.textContent = generateLastEdited(note.updatedAt)

    saveNotes(notes)
})

removeElement.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/notes-app/index.html')
})


window.addEventListener('storage', (e) => {
    if(key === notes){
        notes = JSON.parse(e.newValue)
        note = notes.find((note) => note.id === noteID )
        
        if (!note){
            location.assign('/notes-app/index.html')
        }

        titleElement.value = note.title
        bodyElement.value = note.body
        editedText.textContent = generateLastEdited(note.updatedAt)

    }
})


