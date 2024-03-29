/**
 * Let's make it so our checkbox can actually mark our todo as complete or incomplete!
 * This challenge is a little more involved than some of the past ones. Check the comments 
 * in the code for some help on accomplishing this one
 * 
 * Challenge: 
 * 1. Create an event handler in the App component for when the checkbox is clicked (which is an `onChange` event)
 *    a. This method will be the trickest part. Check the comments in the stubbed-out method below for some pseudocode to help guide you through this part
 * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, it calls the `handleChange` method and passes the id of the todo into the function
 *   
 * Part 3 explained: In the TodoItem component -(Open TodoItem.js), make it so when the `onChange` event happens-(create the onChange event), it calls the `handleChange` method and passes the id of the todo into the function-(looking for the id, you use {() => props.handleChange(props.item.id)}, as you are using the properties of handleChange(id), )
 *  * 2. Pass the method down to the TodoItem component
 * 3. In the TodoItem component, make it so when the `onChange` event happens, 
 */

import React from "react"
import TodoItem from "./TodoItem"
import todosData from "./todosData"


class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange  = this.handleChange.bind(this)
    }
    
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todos: updatedTodos
            }
        })
    }
    
    render() {
        const todoItems = this.state.todos.map(item => <TodoItem key={item.id} item={item} handleChange={this.handleChange}/>)
        // 2. Pass the method down to the ToDoItem component. This is passed down above here ^^^^
        // 2. change in the ToDoItem.js - It is receiving a prop called handleChange, it is taking the id as parameter
        return (
            <div className="todo-list">
                {todoItems}
            </div>
        )    
    }
}

export default App