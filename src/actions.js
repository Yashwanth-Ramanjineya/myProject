let nextToDo = 0;


export const addToDo = text => ({
    type: 'ADD_TODO',
    id: nextToDo++,
    text
})