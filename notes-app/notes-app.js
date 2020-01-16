const notes = getSavedNotes()

//text entered to the input field
const filters = {
    searchText: ''
}

renderNotes(notes,filters)

console.log(notes)

document.querySelector('#create-note').addEventListener('click', function (e){
    notes.push({
        id: uuidv4(),
        title: '',
        body: ''
    })
    saveNotes(notes)
    renderNotes(notes,filters)
})



document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value
    renderNotes(notes,filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e){
    console.log(e.target.value)
})