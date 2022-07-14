export const addTodoName=payload=>{
    return{
        type:"TodoList/addTodo",
        payload:payload
    }
}

export const searchTodo=payload=>{
    return{
        type:"filtters/searchTodo",
        payload:payload
    }
}

export const selectStatus=payload=>{
    console.log('acton'+payload)
    return{
        type:"filtters/selectStatus",
        payload:payload
    }
}