const initState={
    filters:{
        search:'',
        status:'All',
        priority:[]
    },
    todoList:[
        {id:1,name:'Learn PHP',completed:false,prioriry:'Medium'},
        {id:2,name:'Learn Redux11',completed:true,prioriry:'Low'},
        {id:3,name:'Learn Javascript',completed:false,prioriry:'Hight'},
    ]
}
const rootReducer=(state=initState,action)=>{
    switch(action.type){
        case 'TodoList/addTodo':
            return{
                ...state,
                todoList:[
                    ...state.todoList,
                    action.payload
                
                ]
            }
        case 'filtters/searchTodo':
            console.log(`day la stats cua search ${action.payload}`)
            return{
                ...state,
                filters:{
                    ...state,
                    search:action.payload
                }
            }
        case 'filtters/selectStatus':
            console.log(`day la stats cua status ${action.payload}`)

            return{
                ...state,
                filters:{
                    ...state,
                    status:action.payload
                }
            }
        default:
            return state;
    }
}
export default rootReducer;