let todos = getSavedTodos()

const filters = {
   searchText: '',
   hideCompleted : false
}


renderToDos(todos,filters)
console.log(todos)
document.querySelector('#search-text').addEventListener('input', function(e){
   filters.searchText = e.target.value
   renderToDos(todos,filters)
})

//add a new todo with this
document.querySelector('#todo-form').addEventListener('submit', function(e){
   e.preventDefault()
   todos.push({
      id: uuidv4(),
      text: e.target.elements.text.value,
      completed: false
   })
   saveTodos(todos)
   renderToDos(todos,filters)
   e.target.elements.text.value = ''
})

//update filter and tell the list to rerender it self
 document.querySelector('#hide-me').addEventListener('change', function(e){
   filters.hideCompleted = e.target.checked
   renderToDos(todos,filters)

})
