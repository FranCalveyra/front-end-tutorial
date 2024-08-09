export const TodoItem = (info)=>{

    function changeIsDone(info) {
        info.isDone = !info.isDone;
    }
    const Checkbox = (info) => {
        return <label>
            <input type="checkbox" checked={info.info.isDone} onChange={changeIsDone}/>
        </label>
    }


    return (
        <div>
            <h4>{info.info.name}</h4>
            <Checkbox info={info}></Checkbox>
        </div>
    )

}