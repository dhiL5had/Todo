import React,{useState} from 'react';
import EditTask from '../Modals/EditTask';


function Card({ taskObj, index, deleteTask, updateListArray }) {
    const [modal,setModal] = useState(false)
    const colors = [
        {
            primaryColor: "#5D93E1",
            secondaryColor: "#ECF3FC"
        },
        {
            primaryColor: "#F9D288",
            secondaryColor: "#FEFAF1"
        },
        {
            primaryColor: "#5DC250",
            secondaryColor: "#F2FAF1"
        },
        {
            primaryColor: "#F48687",
            secondaryColor: "#FDF1F1"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#F3F0FD"
        }
    ]

    const toggle = ()=>{
        setModal(!modal)
    }

    const handleDelete = (index) => {
        deleteTask(index)
    }

    const updateTask = (obj)=>{
        updateListArray(obj,index)
    }

    return (
        <div class="card-wrapper" style={{'margin-left':'40px'}}>
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor ,'padding':'5px'}}></div>
            <div class="task-holder">
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor, "border-radius": "10px" }}>{taskObj.Name}</span>
                <p className="mt-3">{taskObj.Description}</p>

                <div style={{ "position": "absolute", "right": "20px", "bottom": "20px" }}>
                    <i class="far fa-edit" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer"  }} onClick={()=> setModal(true)}></i>
                    <i class="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer",'padding-left':'10px' }} onClick={handleDelete} ></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />

        </div>
    )
}

export default Card
