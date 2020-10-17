const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
         return [...state, {myData: action.data}]
        case 'ADD_MY_STATIC': 
         return [...state, {myStatic: action.data}]
        case 'LOAD_MY_DATA': 
        return [...state, {loadDataContent: action.data}]
        case 'ADD_TO_HELLO':
            return []
        default: 
        return state

    }
}


export default todoReducer;