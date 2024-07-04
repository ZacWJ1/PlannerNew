const deleteBtn = document.querySelectorAll('.del')
const todoItem = document.querySelectorAll('span.not')
//const outingItem = document.querySelectorAll('span.not')
const todoComplete = document.querySelectorAll('span.completed')
//const outingComplete = document.querySelectorAll('span.completed')

Array.from(deleteBtn).forEach((el)=>{
    el.addEventListener('click', deleteTodo, deleteOutings)
})

Array.from(todoItem).forEach((el)=>{
    el.addEventListener('click', markComplete)
})

Array.from(todoComplete).forEach((el)=>{
    el.addEventListener('click', markIncomplete)
})

/*Array.from(outingItem).forEach((el)=>{
    el.addEventListener('click', markOutingsComplete)
})

Array.from(outingComplete).forEach((el)=>{
    el.addEventListener('click',markOutingsIncomplete)
})*/

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

/*async function deleteOutings(){
    const outingId = this.parentNode.dataset.id
    try{
        const response = await fetch('outings/deleteOuting', {
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
}*/

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

/*async function markOutingsComplete(){
    const outingId = this.parentNode.dataset.id
    try{
        const response = await fetch('outings/markOutingsComplete', {
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
}*/

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
/*async function markOutingsIncomplete(){
    const outingId = this.parentNode.dataset.id
    try{
        const response = await fetch('outings/markOutingsIncomplete', {
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
}*/