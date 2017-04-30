import React from 'react'
import PropTypes from 'prop-types'
import Todo from 'todos/components/Todo'

const TodoList = ({ todos, toggleTodo }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.get("id")}
        text={todo.get("text")}
        completed={todo.get("completed")}
        onClick={() => toggleTodo(todo.get("id"))}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  toggleTodo: PropTypes.func.isRequired
}

export default TodoList
