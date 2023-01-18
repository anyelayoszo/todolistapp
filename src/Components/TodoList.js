import React, { useEffect } from "react";
import '../App.css';
import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function TodoList(props) {
    const [todos, setTodos] = useState("")
    const [todosList, setTodosList] = useState([])

    const addTodos = () => {
        if (todos.length !== 0) { setTodosList(prevTodosList => [...prevTodosList, todos])}
        setTodos("");
    }

    useEffect(() => { console.log("todo", todosList) }, [todosList])

    return (
        <div style={{ margin: "50p 50px", padding: "10px 10px", backgroundColor: "aliceblue", textAlign: "center" }}>
            <p style={{ marginRight: "50px", fontSize: "18px", fontWeight: "bold" }}>TODOS</p>
            <div>
                <input
                    type="text"
                    placeholder="Input Todo"
                    value={todos}
                    onChange={(e) => setTodos(e.target.value)}
                    style={{
                        width: "200px",
                        height: "25px",
                        marginRight: "25px"
                    }} />
                <button
                    onClick={() => addTodos()}
                    style={{
                        width: "50px",
                        height: "30px"
                    }}>
                    Add
                </button>
            </div>
            <div style={{ display: "flex", flexDirection: "column", padding: "30px 200px" }} >
                {todosList.map(
                    (todosItem) =>
                        <div key={todosItem}>
                            <div >
                                <input type={"checkbox"} style={{
                                    float: "left"
                                }} />
                                <label
                                    style={{
                                        fontSize: "18px",
                                    }}>
                                    {todosItem}</label>
                                <div style={{ display: "flex", float: "right" }}>
                                    <FaTrash onClick={() => addTodos()} style={{ width: "25", height: "25", marginRight: "10px" }} />
                                    <FaEdit onClick={() => addTodos()} style={{ width: "25", height: "25", marginRight: "10px" }} />
                                    <FaSave onClick={() => addTodos()} style={{ width: "25", height: "25" }} />
                                </div>
                            </div>
                        </div>)}
            </div>
        </div >
    )
};

export default TodoList;