import { useState } from "react"
import { useNavigate } from "react-router-dom"
export const TaskForm = () => {
    /*
        TODO: Add the correct default properties to the
        initial state object
    */
    const [task, update] = useState({
        task: ""
    })
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
   const navigate = useNavigate()
   const localNutshellUser = localStorage.getItem("nutshell_user")
   const nutshellUserObject = JSON.parse(localNutshellUser)
    const handleSaveButtonClick = (event) => {
        event.preventDefault()
        // TODO: Create the object to be saved to the API
        const taskToSendToAPI ={
            userId: nutshellUserObject.id,
            task: task.task,
            completionDate: ""
        }
        // TODO: Perform the fetch() to POST the object to the API
        return fetch(`http://localhost:8088/tasks`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskToSendToAPI)
        })
            .then(r => r.json())
            .then(() => {
                navigate("/tasks")
            })
    }

    return (
        <form className="taskForm">
            <h2 className="taskForm__title">New Task</h2>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="task">Tasks:</label>
                    <input
                        required autoFocus
                        type="text"
                        className="form-control"
                        placeholder="Your task here"
                        value={task.task}
                        onChange={
                            (evt) => {
                                const copy = {...task}
                                copy.task = evt.target.value
                                update(copy)
                            }
                        } />
                </div>
            </fieldset>
            <button
            onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
            className="btn btn-primary">
                Add Task
            </button>
        </form>
    )
}

// return (
//   <form className="taskForm">
//       <h2 className="taskForm__title">New Task</h2>
//       <fieldset>
//           <div className="form-group">
//               <label htmlFor="task">Task:</label>
//               <input
//                   required autoFocus
//                   type="text"
//                   className="form-control"
//                   placeholder="Brief description of problem"
//                   value={ticket.description}
//                   onChange={} />
//           </div>
//       </fieldset>
//       <fieldset>
//           <div className="form-group">
//               <label htmlFor="description">Description:</label>
//               <input
//                   required autoFocus
//                   type="text"
//                   className="form-control"
//                   placeholder="Brief description of problem"
//                   value={ticket.description}
//                   onChange={} />
//           </div>
//       </fieldset>
//       <button className="btn btn-primary">
//           Submit Ticket
//       </button>
//   </form>
// )
// }