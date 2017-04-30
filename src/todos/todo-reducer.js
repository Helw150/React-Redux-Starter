import Immutable from 'immutable'

import * as actionTypes from "todos/todo-action-types"

const initialState = Immutable.fromJS({})

const todos = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return state.set(action.id, Immutable.fromJS(action.content))
    case actionTypes.TOGGLE_TODO:
      return state.update(action.id, id => id.set("completed", !id.get("completed")))
    default:
      return state
  }
}

export default todos
