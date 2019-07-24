import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import actions from '../redux/actioncreate.js';
class TodoHeader extends React.Component {
    //取得未完成的todo数量
    getUnfinishedCount() {
        //this.props.todos就是从connect传入的state数据
        console.log(this.props)
        return this.props.todos.filter((i) => {
            return i.isComplete === false;
        }).length;  
    }
    addCount(e){
        var value=document.getElementById("shuru").value;
        var newTodo ={
            id: parseInt(Math.random() * 10000000),
            isComplete: false,
            title: value
          }
          this.props.addTodo(newTodo)
        // this.props.addTodo(newTodo)
    }
    render() {
        return (
            <div>ToDoList  
                <input placeholder='请输入待办事项' id="shuru"></input>
                
                <button onClick={(e)=>{this.addCount(e)} }>确认</button>
                
                <div>您有{this.getUnfinishedCount()}件事未完成</div>
            </div>
        )
    }

}


export default connect((state) => ({
    ...state
}),actions)(TodoHeader);

