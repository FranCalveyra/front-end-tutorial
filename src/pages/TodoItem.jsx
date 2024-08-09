export const TodoItem = (info)=>{

    function changeIsDone(info) {
        info.isDone = !info.isDone;
    }
    const Checkbox = (info) => {
        return <div className="flex items-start items-center">
            <h4 className="text-sm ml-3 font-medium text-white-900">{info.name}</h4>
            <input id="checkbox-2" aria-describedby="checkbox-2" type="checkbox" onChange={changeIsDone}
                   className="bg-gray-50 border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded mr-40"
                   checked={info.isDone}/>
        </div>
    }
    let h4Style = "text-sm ml-3 font-medium text-white"

    return (
        <div className={"flex items-center items-start justify-between"}>
            <h4 className={h4Style}>{info.info.name}</h4>
            <Checkbox info={info}></Checkbox>
        </div>
    )

}