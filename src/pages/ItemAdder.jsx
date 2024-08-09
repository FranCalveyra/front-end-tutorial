import {useEffect, useState} from "react";
import {TodoItem} from "./TodoItem";

export const ItemAdder = ()=>{
    const [todoItems, setTodoItems] = useState(()=>{
        const localValue = localStorage.getItem("ITEMS")
        if(localValue === null) return []
        return JSON.parse(localValue)
    })
    const [itemName, setItemName] = useState("");


    useEffect(() => {
        localStorage.setItem("ITEMS", JSON.stringify(todoItems))
    }, [todoItems]);

    function setInputValue(data) {
        setItemName(data.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if(!e || !itemName) return;
        todoItems.push({id: crypto.randomUUID(),name: itemName, isDone: false})
        setItemName("")
    }


    function deleteItem(itemInfo) {
        console.log(itemInfo)
        console.log("ID: " + itemInfo.id);
        setTodoItems(currentTodos=> {
            return currentTodos.filter(todoItem => todoItem.id !== itemInfo.id)
        })
    }

    function showComponent(itemInfo) {
        if(!itemInfo) return null;

        return (<div>
            <TodoItem info={itemInfo}/>
            <button onClick={()=>deleteItem(itemInfo)}>Delete Item</button>
        </div>);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>New Item</h1>
                <label htmlFor="item"></label>
                <input value={itemName} type="text" onChange={setInputValue}></input>
                <button>Add Item</button>
            </form>
            <h2>List</h2>
            <div>
                {todoItems.length === 0 ? <h3>No Todos</h3> : todoItems.map(itemInfo => showComponent(itemInfo))}
            </div>
        </div>
    )

}