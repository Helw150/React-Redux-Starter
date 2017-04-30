import * as actionTypes from "todos/todo-action-types"

let nextTodoId = 0
export const addTodo = (text) => ({
  type: actionTypes.ADD_TODO,
  id: nextTodoId,
  content : {
      completed: false,
      id: nextTodoId++,
      text
  }
})

export const toggleTodo = (id) => ({
  type: actionTypes.TOGGLE_TODO,
  id
})
