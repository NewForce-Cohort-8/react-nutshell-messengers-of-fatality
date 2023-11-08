import { useEffect, useState } from "react"
//import "./Tickets.css"
import { Link,useNavigate } from "react-router-dom"
//state is managed at the component level. Data is fetched from the DOM when a customer submites a ticket then this function stores the state of the ticket and returns an array for the ApplicationViews variable so it can then publish to the webpage.
export const TaskList = () => {
    const [tasks, setTasks] = useState([])
  
    const navigate = useNavigate()

    // useEffect(
    //     () => {
    //         const taskObject = tasks (ticket => {
    //             return ticket.description.toLowerCase().startsWith(searchTermState.toLowerCase())
    //       })
    //       setFiltered(searchedTickets)
    //     },
    //       [searchTermState]
    //)




    useEffect(
        () => {
            fetch(`http://localhost:8088/tasks?_expand=user`)
            .then (response => response.json())
            .then((taskArray) => {
                setTasks(taskArray)
            })
        },
        []
    )
//if user is a customer it will only show their tickets, if they are staff it will show all tickets
// useEffect(
//     () => {
//             const myTasks = tasks.filter(tasks => tasks.userId === nutshellUserObject.id)
//             setFiltered(myTasks)
//     },
//     [tasks]
// )
//to remove unique key prop error similar to id attribute (uniquely identifies that componenet) React uses the unique keys to update the DOM. Add a key prop primary key of each object to build key property key={`ticket--${ticket.id}`}
return <>
    <button onClick={() => navigate("/taskForm")}>Add Task</button>
          <h2>Nutshell Tasks</h2>
        <article className="tasks">
            {
                tasks.map(
                    (currentTask) => {
                        return <section className="task">
                            <header>{currentTask?.user?.username}'s Tasks:</header>
                            <div>{currentTask.task} {currentTask.completionDate}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}
