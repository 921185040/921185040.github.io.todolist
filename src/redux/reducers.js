import { ADD_TODO, TOGGLE_COMPLETE, DELETE_TODO } from './actiontypes.js';

let initState = {
  todos: [
    {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: '学习redux'
    }, {
      id: parseInt(Math.random() * 10000000),
      isComplete: true,
      title: '学习react'
    }, {
      id: parseInt(Math.random() * 10000000),
      isComplete: false,
      title: '学习node'
    }
  ]
};

function reducer(state = initState, action) {
  let newState;
  switch (action.type) {
    case ADD_TODO:
      newState = {
        todos: [
          ...state.todos,
          action.payload
        ]
      };
      break;
    case TOGGLE_COMPLETE:
      newState = {
        //循环每一条待办，把要修改的记录更新
        todos: state.todos.map(item => {
          if (item.id == action.payload) {
            item.isComplete = !item.isComplete;
          }
          return item;
        })
      };
      break;
    case DELETE_TODO:
      console.log("wwwwwwwwwww", action.payload)
      newState = {
        todos: state.todos.filter(item => {
          return item.id != action.payload
        })
      };
      break;
    default:
      newState = state;
      break;
  }
  return newState;
}
export default reducer;