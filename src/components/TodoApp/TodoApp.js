import React,{useEffect,useState} from 'react'
import  '../../App.css';
import CreateTask from '../Modals/CreateTask';
import Card from '../Card/Card';

function TodoApp() {

    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] =useState([]);
    
    useEffect(()=>{
        let arr = localStorage.getItem('taskList');
        if(arr){
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
    },[])

    const deleteTask = (index)=>{
        let tempList = taskList
        tempList.splice(index,1)
        setTaskList(tempList)
        localStorage.setItem('taskList',JSON.stringify(tempList))
        window.location.reload()
    }

    const updateListArray = (obj,index)=>{
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem('taskList',JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    }

    const toggle = ()=>{
        setModal(!modal);
    }

    const saveTask = (taskObj)=>{
        let tempList = taskList;
        tempList.push(taskObj)
        localStorage.setItem('taskList',JSON.stringify(tempList))
        setTaskList(taskList)
        setModal(false)
    }

    return (
        <>
        <div className='header text-center'>
            <h3>Todo App</h3>
            <button className='btn btn-danger mt-2' onClick={()=> setModal(true)}>Create Task</button>
        </div>
        <div className="task-container">
        { taskList.map((obj,index)=><Card taskObj = {obj} index = {index} deleteTask = {deleteTask} updateListArray = {updateListArray} />)}
        </div>
        <CreateTask toggle={toggle} modal={modal} save={saveTask}/>
        </>
    )
}

export default TodoApp
