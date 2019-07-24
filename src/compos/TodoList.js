import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';

import actions from '../redux/actioncreate.js';
class TodoHeader extends React.Component {
    todoChange = (event) => {
        //当onChange事件发生时，调用toggleComplete动作
        this.props.toggleComplete(event.target.value);
    }
    deleteTodo = (e) =>{
        var val =e.target.getAttribute("data_id")
        
       this.props.deleteTodo(val)
    }

    getTodos() {
        return this.props.todos.map((todo, index) => {
            if (!todo.isComplete) {
                return (
                    <li key={index}>
                        <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange} />
                        <span>{todo.title}</span>
                        
                        <button type="button" data_id={todo.id} onClick={this.deleteTodo}>删除</button>
                    </li>);
            }

        });
    }
    render() {
        return (<div>
            <ul>
                {this.getTodos()}
            </ul>
        </div>);
    }


}


export default connect((state) => ({
    ...state
}), actions)(TodoHeader);
