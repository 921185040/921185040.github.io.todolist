import {ADD_TODO,TOGGLE_COMPLETE,DELETE_TODO} from './actiontypes';

let actions = {
  addTodo: function(payload) {
    return {type: ADD_TODO, payload};
  },
  toggleComplete: function(payload) {
    return {type: TOGGLE_COMPLETE, payload};
  },
  deleteTodo: function(payload) {
    return {type: DELETE_TODO, payload};
  }
};

export default actions;//导出ActionCreators