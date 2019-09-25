import React from "react"

function DoItem(props) {
    return (
        <div className="todo-item">
            <input 
                type="checkbox" 
                checked={props.item.completed} 
                //3. Can not take {props.handleChange} as it would not receive an id property, it calls props.handleChange, then calls the properties 'item' prop.item.id
                onChange={() => props.handleChange(props.item.id)}
            />
            <p>{props.item.text}</p>
        </div>
    )
}

export default DoItem