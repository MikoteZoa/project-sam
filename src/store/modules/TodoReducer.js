/* Action 정의 */
const ADD = 'ADD_TODO';
const REMOVE = 'REMOVE_TODO';
const CLEAR = 'CLEAR';

/* 초기 상태 정의 */
export const initialState = {
  todoList: JSON.parse(localStorage.getItem('todoList')) || [],
  doneList: JSON.parse(localStorage.getItem('doneList')) || [],
};

/* Reducer 정의 */
export function addTodo(task) {
  return {
    type: ADD,
    payload: task,
  }
}

export function removeTodo(task) {
  return {
    type: REMOVE,
    payload: task,
  }
}

export function clear() {
  return {
    type: CLEAR,
  }
}

export function TodoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };

    case REMOVE:
      return {
        todoList: state.todoList.filter(data => data.title !== action.payload.title),
        doneList: [...state.doneList, action.payload],
      };

    case CLEAR:
      return {
        ...state,
        doneList: [],
      }
      
    default:
      return {
        ...state,
      };
  }
}