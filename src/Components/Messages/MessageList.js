import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const MessageList = () => {
    const [ messages, setMessages ] = useState([])
    const navigate = useNavigate()

    useEffect(
        () => {
            fetch(`http://localhost:8088/messages?_expand=user`)
                .then(r => r.json())
                .then((messageArray) => {
                    setMessages(messageArray)

                })
        },
        []
    )
    return <>

    <button onClick={() => navigate("/messages/create")}>Create Message</button>
          <h2>Nutshell Messages</h2>
        
        <article className="messages">
            {
                messages.map(
                    (message) => {
                        return <section className="message">
                            <header>{message?.user?.username}'s message:</header>
                            <div>{message.message}</div>
                        </section>
                    }
                )
            }
        </article>
    
    </>
}
