import { createSelector } from 'reselect'

const getTodos = state => state.todos

export const getVisibleTodos = createSelector(
  getTodos,
  state => state
)
