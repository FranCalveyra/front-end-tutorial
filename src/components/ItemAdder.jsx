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

        return (
            <div className={"flex flex-col p-8 bg-gray-800 shadow-md hover:shodow-lg rounded-2xl"}>
                <div className={"flex items-center justify-between"}>
            <TodoItem info={itemInfo}/>
            <button
            className={"flex-no-shrink bg-red-500 px-5 ml-4 py-2 text-sm shadow-sm hover:shadow-lg font-medium tracking-wider border-2 border-red-500 text-white rounded-full"}
                onClick={()=>deleteItem(itemInfo)}>Delete Item</button>
        </div>
            </div>
                );
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-[#00e4de] p-4">
            <h1 className="font-black text-gray-800 md:text-3xl text-xl">New Item</h1>

            <form onSubmit={handleSubmit} className="flex rounded-full bg-[#0d1829] px-2 w-full max-w-[600px] mb-8">
                <input
                    value={itemName}
                    type="text"
                    onChange={setInputValue}
                    className="w-full bg-[#0d1829] flex bg-transparent pl-2 text-[#cccccc] outline-0"
                    placeholder="Enter item"
                />
                <button
                    className="self-center flex items-center p-2 cursor-pointer bg-[#0d1829] text-white rounded-full ml-2">
                    Add Item
                </button>
            </form>

            <h2 className="font-black text-gray-800 md:text-3xl text-xl">List</h2>

            <div className="w-full max-w-[600px] bg-[#0d1829] rounded-lg p-4 shadow-md">
                {todoItems.length === 0 ? (
                    <h3 className="text-center text-[#666666]">No Todos</h3>
                ) : (
                    todoItems.map(itemInfo => showComponent(itemInfo))
                )}
            </div>
        </div>

    )

}