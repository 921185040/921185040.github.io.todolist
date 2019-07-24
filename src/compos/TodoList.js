import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import  "./all.css"
import actions from '../redux/actioncreate.js';
class TodoHeader extends React.Component {
    todoChange = (event) => {
        //当onChange事件发生时，调用toggleComplete动作
        this.props.toggleComplete(event.target.value);
    }
    deleteTodo = (e) => {
        var val = e.target.getAttribute("data_id")

        this.props.deleteTodo(val)
    }
    getUnfinishedCount() {
        //this.props.todos就是从connect传入的state数据
        console.log(this.props)
        return this.props.todos.filter((i) => {
            return i.isComplete === false;
        }).length;
    }
    getTodos() {
        return this.props.todos.map((todo, index) => {
            if (!todo.isComplete) {
                return (

                    <div >
                        <li key={index}>
                            <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange} />
                            <span>{todo.title}</span>

                            <button type="button" data_id={todo.id} onClick={this.deleteTodo} className='but'>-</button>
                        </li>
                    </div>

                );
            }

        });
    }
    render() {
        return (<div className="todo">
                您有{this.getUnfinishedCount()}件事未完成
                {this.getTodos()}
            
        </div>);
    }


}


export default connect((state) => ({
    ...state
}), actions)(TodoHeader);
