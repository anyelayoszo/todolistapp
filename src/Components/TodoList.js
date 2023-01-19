import React, { useEffect } from "react";
import '../App.css';
import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function TodoList() {
    const [todos, setTodos] = useState("")
    const [todosList, setTodosList] = useState([])
    const [edittedTodo, setEdittedTodo] = useState('')

    const addTodos = () => {
        if (todos.length > 0) {
            setTodosList(prevTodosList => [...prevTodosList, {
                id: uuidv4(),
                todos: todos,
                
                isCompleted: false
            }])
        }
        setTodos("");
    }

    const checkTodos = (id) => {
        setTodosList(prevTodosList => prevTodosList.map(todosItem => todosItem.id === id ?
            ({ ...todosItem, isChecked: !todosItem.isChecked }) :
            todosItem));
    }
    const deleteTodos = (id) => {
        setTodosList(prevTodosList => prevTodosList.filter(todosItem => todosItem.id !== id));
    }
    const editTodos = (id) => {
        setTodosList(prevTodosList => prevTodosList.map(todosItem => todosItem.id === id ?
            ({ ...todosItem, isEditable: true }) :
            todosItem));
    }
    const saveTodos = (id) => {
        setTodosList(prevTodosList => prevTodosList.map(todosItem => todosItem.id === id ?
            ({ ...todosItem, todos: edittedTodo, isEditable: false }) :
            todosItem));
    }

    const checkedStyle = {
        fontSize: "18px",
        float: "left",
        width: "500px",
        textAlign: "start",
        marginLeft: "15px",
        marginRight: "15px",
        textDecoration: "line-through"
    }

    const notCheckedStyle = {
        fontSize: "18px",
        float: "left",
        width: "500px",
        textAlign: "start",
        marginLeft: "15px",
        marginRight: "15px"
    }

    useEffect(() => console.log("todos", todosList, "edittedTodo", edittedTodo, "checkTodos", checkTodos, "deleteTodos", deleteTodos, "editTodos", editTodos, "saveTodos", saveTodos))
   
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
            <div>
                {todosList.map(
                    (todosItem) =>
                        <div key={todosItem}>
                            <div style={{
                                display: "flex",
                                flexDirection: "row",
                                padding: "10px 200px",
                                flex: "center"
                            }} >
                                <input
                                    type={"checkbox"}
                                    id={todosItem.id}
                                    onChange={() => checkTodos(todosItem.id)}
                                    checked={todosItem.isChecked}
                                    style={{
                                        float: "left"
                                    }} />
                                {todosItem.isEditable ?
                                    <input
                                        type="text"
                                        placeholder={todosItem.todos}
                                        onChange={(event) => setEdittedTodo(event.target.value)}
                                        value={todosItem.edittedTodo}
                                        style={{
                                            fontSize: "15px",
                                            float: "left",
                                            width: "496px",
                                            textAlign: "start",
                                            margin: "15px 5px"
                                        }} /> :
                                    <label
                                        key={todosItem.id}
                                        style={todosItem.isChecked ? checkedStyle : notCheckedStyle}
                                        >
                                        {todosItem.todos}</label>
                                }
                                <div style={{ display: "flex", flexDirection: "row", float: "right", alignItems: "center" }}>
                                    <FaTrash
                                        onClick={() => deleteTodos(todosItem.id)}
                                        style={{ width: "25", height: "25", marginRight: "10px" }} />
                                    {todosItem.isEditable ?
                                        <FaSave
                                            onClick={() => saveTodos(todosItem.id)}
                                            style={{ width: "25", height: "25" }} /> :
                                        <FaEdit
                                            onClick={() => editTodos(todosItem.id)}
                                            style={{ width: "25", height: "25", marginRight: "10px" }} />

                                    }
                                </div>
                            </div>
                        </div>)}
            </div>
        </div >
    )
};

export default TodoList;