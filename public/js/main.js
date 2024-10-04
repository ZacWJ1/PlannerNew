const deleteBtn = document.querySelectorAll('.del')
const deleteBtnOut = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
const markOutIncomplete = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
const markOutComplete = document.querySelectorAll('span.completed')



Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo)
})

Array.from(deleteBtnOut).forEach((el)=>{
    el.addEventListener('click', deleteOutTodo)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

Array.from(markOutIncomplete).forEach((el)=>{
    el.addEventListener('click', markOutingComplete)
})

Array.from(markOutComplete).forEach((el)=>{
    el.addEventListener('click',markOutingIncomplete)
})

async function deleteTodo(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function deleteOutTodo(){
    const outingId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/deleteOutTodo', {
            method: 'delete',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'outingIdFromJSFile': outingId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markComplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markOutingComplete(){
    const outingId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markOutingComplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'outingIdFromJSFile': outingId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}

async function markIncomplete(){
    const todoId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'todoIdFromJSFile': todoId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
async function markOutingIncomplete(){
    const outingId = this.parentNode.dataset.id
    try{
        const response = await fetch('todos/markOutingIncomplete', {
            method: 'put',
            headers: {'Content-type': 'application/json'},
            body: JSON.stringify({
                'outingIdFromJSFile': outingId
            })
        })
        const data = await response.json()
        console.log(data)
        location.reload()
    }catch(err){
        console.log(err)
    }
}
