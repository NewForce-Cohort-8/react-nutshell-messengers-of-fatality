import { useEffect, useState } from "react"
//import "./Tickets.css"
import { useNavigate } from "react-router-dom"
//state is managed at the component level. Data is fetched from the DOM when a customer submites a ticket then this function stores the state of the ticket and returns an array for the ApplicationViews variable so it can then publish to the webpage.
export const TaskList = () => {
    const [tasks, setTasks] = useState([])
    //const [filteredTasks, setFiltered] = useState([])
    // const [emergency, setEmergency] = useState([false])
    // const [openOnly, updateOpenOnly] = useState([false])
    const navigate = useNavigate()
//get the honeyUser out of storage login
// THIS MAY BE USEFUL STILL
// const localNutshellUser = localStorage.getItem("nutshell_user")
//     const nutshellUserObject = JSON.parse(localNutshellUser)
    // useEffect(
    //     () => {
    //         const searchedTickets = tickets.filter(ticket => {
    //             return ticket.description.toLowerCase().startsWith(searchTermState.toLowerCase())
    //       })
    //       setFiltered(searchedTickets)
    //     },
    //       [searchTermState]
    // )
//function to filter the emergency only button to only display emergencies when clicked.
    // useEffect(
    //     () => {
    //         if (emergency) {
    //             const emergencyTickets = tickets.filter(ticket => ticket.emergency === true)
    //             setFiltered(emergencyTickets)
    //         }
    //         else {
    //             setFiltered(tickets)
    //         }
    //     },
    //     [emergency]
    // )
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
    <button onClick={() => navigate("/tasks/create")}>Create Message</button>
          <h2>Nutshell Messages</h2>
        <article className="tasks">
            {
                tasks.map(
                    (task) => {
                        return <section className="task">
                            <header>{task?.user?.username}'s Tasks:</header>
                            <div>{task.tasks}</div>
                        </section>
                    }
                )
            }
        </article>
    </>
}
