import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from 'todos/todo-action-creators'

let AddTodo = ( props ) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        props.addTodo(input.value)
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Add Todo
        </button>
      </form>
    </div>
  )
}

const mapStateToProps = (state) => ({})

AddTodo = connect(mapStateToProps, actionCreators)(AddTodo)

export default AddTodo
