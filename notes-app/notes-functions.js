'use strict'


//console.log(uuidv4())
//read exisitng notes from local storage
const getSavedNotes =  () => {
    const notesJSON = localStorage.getItem('notes')

    try{
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch(e){
        return []
    }

    
}

//Save the notes to localStorage

const saveNotes = (notes) => {
    localStorage.setItem('notes', JSON.stringify(notes))
}

//remove a note from the list

const removeNote = (id) => {
    const noteIndex = notes.findIndex((note) =>  note.id === id)
    if (noteIndex > -1){
        notes.splice(noteIndex, 1)
    }
}
//c

//generate the dom structure for a note
const generateNoteDOM = (note) =>{
    const noteElement = document.createElement('div')
    const textElement = document.createElement('a')
    
    const button = document.createElement('button')

    //setup the remove note button
    button.textContent = 'X'
    noteElement.appendChild(button)
    button.addEventListener('click', () =>{
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
    textElement.setAttribute('href', `/notes-app/edit.html#${note.id}`)
    noteElement.appendChild(textElement)

    return noteElement
}
// sort your notes by one of three ways
const sortNotes = (notes, sortBy) => {
    if(sortBy === 'byEdited'){
        return notes.sort((a,b) => {
            if(a.updatedAt > b.updatedAt){
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1 
            } else{
                return 0
            }

        })
    } else if(sortBy === 'byCreated'){
        return notes.sort((a,b) => {
            if(a.createdAt > b.createdAt){
                return -1
            } else if (a.updatedAt < b.updatedAt){
                return 1 
            } else{
                return 0
            }

        })
    } else if( sortBy === 'alphabetical'){
            return notes.sort( (a,b) => {
                if(a.title.toLowerCase() < b.title.toLowerCase()){
                    return -1
                } else if (a.title.toLowerCase() > b.title.toLowerCase()){
                    return 1
                } else{
                    return 0
                }
            })
    }else{
        return notes
    }
}


//see if note title includes searchText
//render application notes
const renderNotes =  (notes, filters) => {
    notes = sortNotes(notes, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase()))

    document.querySelector('#notes').innerHTML = ''

    filteredNotes.forEach( (note) => {
        const noteElement = generateNoteDOM(note)
        document.querySelector('#notes').appendChild(noteElement)
    })
}


// generate the last edited message

const generateLastEdited =  (timestamp) => { 
    return `Last edited ${moment(timestamp).fromNow()}`
}

