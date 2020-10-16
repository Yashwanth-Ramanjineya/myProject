const todoReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
         return [...state, {idData: action.id, textValue: action.text}]
        case 'ADD_TO_HELLO':
            return []
        default: 
        return state

    }
}


export default todoReducer;