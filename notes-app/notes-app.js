let notes = getSavedNotes()
const timeStamp = moment().valueOf()
//text entered to the input field
const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

renderNotes(notes,filters)

console.log(notes)

document.querySelector('#create-note').addEventListener('click', function (e){
    const noteId = uuidv4()
    notes.push({
        id: noteId,
        title: '',
        body: '',
        createdAt: timeStamp,
        updatedAt: timeStamp
    })
    saveNotes(notes)
    
    location.assign(`/notes-app/edit.html#${noteId}`)
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    filters.sortBy = e.target.value
    renderNotes(notes,filters)
})


window.addEventListener('storage', function(e){
    if (e.key === 'notes'){
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)
    }
})

