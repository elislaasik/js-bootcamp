
console.log(uuidv4())
//read exisitng notes from local storage
const getSavedNotes = function (){
    const notesJSON = localStorage.getItem('notes')

    if(notesJSON !== null){
       return JSON.parse(notesJSON)
    } else {
        return []
    }
}

//Save the notes to localStorage

const saveNotes = function(notes){
    localStorage.setItem('notes', JSON.stringify(notes))
}

//remove a note from the list

const removeNote = function(id){
    const noteIndex = notes.findIndex(function(note){
        return note.id === id
    })
    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}
//comment

//generate the dom structure for a note
const generateNoteDOM = function(note){
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    textElement.setAttribute('href', '/edit.html')
    const button = document.createElement('button')

    //setup the remove note button
    button.textContent = 'X'
    noteElement.appendChild(button)
    button.addEventListener('click', function(){
        removeNote(note.id)
        saveNotes(notes)
        renderNotes(notes,filters)
    })

    //set up the note title text
    if(note.title.length > 0){
        textElement.textContent = note.title
    } else {
        textElement.textContent = 'Unnamed note'
    }
    noteElement.appendChild(textElement)

    return noteElement
}


//see if note title includes searchText
//render application notes
const renderNotes = function (notes, filters){
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach(function(note){
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}

