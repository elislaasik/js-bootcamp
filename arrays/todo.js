const todos = [{
    text:'finish JS bootcamp course',
    completed: false
}, {
    text:'look into Filips freelance project',
    completed: false,
}, {
    text: 'get Christmas gifts',
    completed: true
}, {
    text: 'write excuses for school project',
    completed:true
}, {
    text:'write content for Estonia project',
    completed: false
}]


// 1. convert to array of objects -> text, completed property true or false
// 2. create function to remove todo by text value

const deleteTodo = function (todos, todoText){
    const index = todos.findIndex(function(todo){
        return todo.text.toLowerCase() === todoText.toLowerCase()
    })
    if(index > -1){
    todos.splice(index,1)
    }
    
}

const todo = deleteTodo(todos, 'write excuses for school project')

//find index of the to do, delete to do 
//console.log(todos)


const getThingsToDo = function (todos){
// get the todos that are not doe yet 
    return filteredToDos = todos.filter(function(todo){
        return !todo.completed
         
    })
    
}

const sortToDos = function (todos){
    todos.sort(function(a,b){
        if (!a.completed  && b.completed){
            return -1
        }
        else if (!b.completed && a.completed){
            return 1
        }
        else{
            return 0
        }
        
    })
}

//console.log(getThingsToDo(todos))
sortToDos(todos)
console.log(todos)
