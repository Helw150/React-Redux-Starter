import { combineReducers } from 'redux'
import todos from 'todos/todo-reducer'

const todoApp = combineReducers({
  todos
})

export default todoApp
