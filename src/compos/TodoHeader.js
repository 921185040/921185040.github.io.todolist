import React from 'react';
// import ReactDOM from 'react-dom';
import { connect } from 'react-redux';
import actions from '../redux/actioncreate.js';
import  "./all.css"

class TodoHeader extends React.Component {
    //取得未完成的todo数量
    
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
            <div className='bigbox'>ToDoList  
                <input placeholder='请输入待办事项' id="shuru" className='do'></input>
                
                <button onClick={(e)=>{this.addCount(e)} }>确认</button>
                
                
            </div>
        )
    }

}


export default connect((state) => ({
    ...state
}),actions)(TodoHeader);

