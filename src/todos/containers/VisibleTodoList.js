import { connect } from 'react-redux'
import * as actionCreators from 'todos/todo-action-creators'
import TodoList from 'todos/components/TodoList'
import * as selectors from 'todos/todos-selector'

const mapStateToProps = (state) => ({
  todos: selectors.getVisibleTodos(state)
})

const VisibleTodoList = connect(
  mapStateToProps,
  actionCreators
)(TodoList)

export default VisibleTodoList
