'use strict'



// Fetch existing todos from localStorage 
//check if there is any data for todos in localstorage and if there is, convert it from strings to object data into todos
const getSavedTodos =  () => {
    const todosJSON = localStorage.getItem('todos')
    try{
        return todosJSON ?  JSON.parse(todosJSON) :  []
    } catch(e){
        return []
    }
    
}

//Save todos to localStorage
const saveTodos = (todos) => {
    localStorage.setItem('todos', JSON.stringify(todos))
}

//Render application todos based on filters
const renderToDos = (todos, filters) => {
    const filteredToDos = todos.filter((todo) => {
       const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
       const hideCompletedMatch =  !filters.hideCompleted || !todo.completed
        
       return searchTextMatch && hideCompletedMatch
    })
 
    const falseToDos = filteredToDos.filter((todo) => !todo.completed)
 
    document.querySelector('#search-todo').innerHTML = ''
    document.querySelector('#search-todo').appendChild(generateSummaryDOM(falseToDos))
 
    //const newParagraph = generateSummaryDOM(falseToDos)
    //document.querySelector('#search-todo').appendChild(newParagraph)

    filteredToDos.forEach((todo) => {
       document.querySelector('#search-todo').appendChild(generateTodoDOM(todo))
 
    })
 
}

const removeTodo = (id) => {
    const todoIndex = todos.findIndex((todo) => todo.id === id)
    if (todoIndex > -1){
        todos.splice(todoIndex, 1)
    }

}

//Toggle the completed value for a given todo
const toggleTodo =  (id) => {
    const todo = todos.find((todo) => todo.id === id)
    if (todo ){
        todo.completed = !todo.completed
    }
}


//Get DOM elements for an individual note
const generateTodoDOM = (todo) => {
    const divEl = document.createElement('div')
    
    // create and append a checkbox
    const checkBox = document.createElement('input')
    checkBox.setAttribute('type', 'checkbox')
    //listen for event to make the toggle featue work 
    checkBox.addEventListener('change', () => {
        toggleTodo (todo.id)
        saveTodos(todo)
        renderToDos(todos,filters)
    })

    checkBox.checked = todo.completed

    divEl.appendChild(checkBox)

    //setup todo text
    const p = document.createElement('span')
    p.textContent = todo.text
    divEl.appendChild(p)

    //setup remove todo button
    const removeButton = document.createElement('button')
    removeButton.textContent = 'X'
    divEl.appendChild(removeButton)
    removeButton.addEventListener('click', () => {
    removeTodo(todo.id)
    saveTodos(todos)
    renderToDos(todos, filters)
    })
    
    // check the checkbox if the data shows that the todo is completed
    
    return divEl
}

//Get DOM elements for list summary
const generateSummaryDOM = (falseToDos) => {
     //show and count how many todo's are undone
    const summary = document.createElement('h2')
    summary.textContent = `You have still ${falseToDos.length} todos to go.`
    return summary
}
