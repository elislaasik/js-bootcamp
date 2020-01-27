let notes = getSavedNotes()

//text entered to the input field
const filters = {
    searchText: ''
}

renderNotes(notes,filters)

console.log(notes)

document.querySelector('#create-note').addEventListener('click', function (e){
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: ''
    })
    saveNotes(notes)
    
    location.assign(`/notes-app/edit.html#${noteId}`)
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})


window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})