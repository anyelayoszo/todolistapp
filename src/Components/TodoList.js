import React, { useEffect } from "react";
import '../App.css';
import { useState } from "react";
import { FaTrash, FaEdit, FaSave } from 'react-icons/fa';
import { v4 as uuidv4 } from 'uuid';

function TodoList(props) {

    return (
        <div>
            {props.list.map(
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
                                onChange={() => props.check(todosItem.id)}
                                checked={todosItem.isChecked}
                                style={{
                                    float: "left"
                                }} />
                            {todosItem.isEditable ?
                                <input
                                    type="text"
                                    placeholder={todosItem.todos}
                                    onChange={(e) => props.seteditted(e.target.value)}
                                    value={todosItem.props.editted}
                                    style={{
                                        fontSize: "15px",
                                        float: "left",
                                        width: "496px",
                                        textAlign: "start",
                                        margin: "15px 5px"
                                    }} /> :
                                <label
                                    key={todosItem.id}
                                    style={{
                                        fontSize: "18px",
                                        float: "left",
                                        width: "500px",
                                        textAlign: "start",
                                        marginLeft: "15px",
                                        marginRight: "15px",
                                        ...(todosItem.isChecked ? { textDecoration: "line-through" } : {})
                                    }}
                                >
                                    {todosItem.todos}</label>
                            }
                            <div style={{ display: "flex", flexDirection: "row", float: "right", alignItems: "center" }}>
                                <FaTrash
                                    onClick={() => props.delete(todosItem.id)}
                                    style={{ width: "25", height: "25", marginRight: "10px" }} />
                                {todosItem.isEditable ?
                                    <FaSave
                                        onClick={() => props.save(todosItem.id)}
                                        style={{ width: "25", height: "25" }} /> :
                                    <FaEdit
                                        onClick={() => props.edit(todosItem.id)}
                                        style={{ width: "25", height: "25", marginRight: "10px" }} />

                                }
                            </div>
                        </div>
                    </div>)}
        </div>
    )
};

export default TodoList;