import { useState } from "react"
// import { MoodSelect } from "./MoodSelect"



export const ArticleForm = ({updateArticleState}) => {
 const [articleEntry, setArticleEntry] = useState({})

 const handleControlledInputChange = (e) => {

    const newArticleEntry = {...articleEntry}

    newArticleEntry[`${e.target.title}`] = e.target.value

    setArticleEntry(newArticleEntry)
 }
    

 const saveEntry = (e) => {
    e.preventDefault()

    const entryToSend = {...articleEntry}
    // entryToSend.moodId = +entryToSend.moodId
    entryToSend.userId = 1

    
        fetch("http://localhost:8088/articleEntries", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(entryToSend),
        }).then(r => r.json())
        .then(r => setArticleEntry({})).then(updateArticleState)
 }


    return ( 
        <form onSubmit={saveEntry}>
            <div className="field">
                <label className="label">Title</label>
                <div className="control">
                    <input name="title" className="input" type="text" placeholder="Name your entry" value={articleEntry.title} onChange={handleControlledInputChange}/>
                </div>
            </div>
            <div className="field">
                <label className="label">Date</label>
                <div className="control">
                    <input className="input" type="Date" name="dateTime" value={articleEntry.dateTime}  onChange={handleControlledInputChange}/>
                </div>
            </div>
            {/* <MoodSelect handleControlledInputChange={handleControlledInputChange} articleEntry={articleEntry} /> */}
            <div className="field">
                <label className="label">Write it</label>
                <div className="control">
                    <textarea name="entryText" className="textarea" placeholder="tell me about it ..." value={articleEntry.entryText}  onChange={handleControlledInputChange}></textarea> 
                </div>
            </div>
            <div className="control">
                <button type="submit" className="button is-primary">Submit</button>
            </div>
     
        </form>
    )
}
