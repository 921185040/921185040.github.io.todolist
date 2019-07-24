import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import actions from '../redux/actioncreate.js';
import "./all.css"
class DoneList extends React.Component {
    //取得已经完成的todo数量
    getUnfinishedCount() {
        //this.props.todos就是从connect传入的state数据
        console.log(this.props)
        return this.props.todos.filter((i) => {
            return i.isComplete === true;
        }).length;  
    }
    deleteTodo = (e) =>{
        var val =e.target.getAttribute("data_id")
         this.props.deleteTodo(val)
    }
    getdone() {
        return this.props.todos.map((todo, index) => {
            if (todo.isComplete) {
                return (
                    <li key={index}>
                        <input type="checkbox" value={todo.id} checked={todo.isComplete} onChange={this.todoChange} />
                        <span>{todo.title}</span>
                        <button type="button" data_id={todo.id} onClick={this.deleteTodo} className='but'>-</button>
                    </li>);
            }

        });
    }

    render() {
        return (
            <div className='todo'>
                
                <div>您已完成{this.getUnfinishedCount()}件事</div>
                {this.getdone()}
            </div>
        )
    }

}


export default connect((state) => ({
    ...state
}),actions)(DoneList);

