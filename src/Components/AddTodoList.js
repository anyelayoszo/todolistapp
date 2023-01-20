import React from "react";
import '../App.css';

function AddTodoList(props) {

    return (
        <div style={{
            margin: "50p 50px",
            padding: "10px 10px",
            backgroundColor: "aliceblue",
            textAlign: "center"
        }}>
            <p style={{
                marginRight: "50px",
                fontSize: "18px",
                fontWeight: "bold"
            }}>TODOS</p>
            <input
                type="text"
                placeholder="Input Todo"
                value={props.todovalue}
                onChange={(e) => props.settodovalue(e.target.value)}
                style={{
                    width: "200px",
                    height: "25px",
                    marginRight: "25px"
                }} />
            <button
                onClick={() => props.addtodo()}
                style={{
                    width: "50px",
                    height: "30px"
                }}>
                Add
            </button>
        </div >
    )
};

export default AddTodoList;