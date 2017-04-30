import React from 'react'
import AddTodo from 'todos/containers/AddTodo'
import VisibleTodoList from 'todos/containers/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
  </div>
)

export default App
