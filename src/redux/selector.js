import { createSelector } from "reselect";


export const todoListSelector=(state)=>state.todoList;
export const searchTextSelector=(state)=>state.filters.search;
export const selectStatusSelector=(state)=>state.filters.status;

export const todoRemaingding=createSelector(todoListSelector,
    selectStatusSelector,searchTextSelector,(todoList,status,searchText)=>{


    return(
        todoList.filter((todo)=>{
            if(status=='All'){
                return todo.name.includes(searchText);
            }
            return todo.name.includes(searchText)&&
            (status==='Completed'?todo.completed:!todo.completed)

        }
    ))
    })