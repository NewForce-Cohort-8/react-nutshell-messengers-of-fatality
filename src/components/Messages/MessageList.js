import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

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

    <button onClick={() => navigate("/messageForm")}>Create Message</button>
          <h2>Nutshell Messages</h2>
        
        <article className="messages">
            {
                messages.map(
                    (message) => {
                        return <section className="message">
                            <header>
                                <Link to={`/messages/${message.id}/edit`}>Message {message.id}</Link>
                            </header>
                            <section>{message?.user?.username}'s message:</section>
                            <div>{message.message}</div>
                        </section>
                        
                        
                    }
                )
            }
        </article>
    
    </>
}
