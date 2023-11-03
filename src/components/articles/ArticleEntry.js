
// make article entry component 

import { useEffect, useState } from "react"
// import { MoodSelect } from "./MoodSelect"

//accept article prop to create single entry
export const ArticleEntry = ({singleArticle, deleteArticleEntry, updateArticleState}) => {
  const [showForm, setShowForm] = useState(false)
  const [editArticle, setEditArticle] = useState({})

useEffect(() => {
  setEditArticle(singleArticle)
},[])

const handleControlledInputChange = (e) => {

  const newArticleEntry = {...editArticle}

  newArticleEntry[`${e.target.name}`] = e.target.value

  setEditArticle(newArticleEntry)
}

const updateEntry = (e) => {
  e.preventDefault()

  const entryToSend = {...editArticle}
  // entryToSend.moodId = +entryToSend.moodId

  
      fetch(`http://localhost:8088/articleEntries/${editArticle.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(entryToSend),
      }).then(r=> r.json())
      .then(() => {
        setShowForm(false)
        updateArticleState()})
      
}

   return <>
   {!showForm ? 
    <article className="message">
 
          <div className="message-header">
           <p>{singleArticle.title}</p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p></p>
           <p>{singleArticle.dateTime}</p>
      <button className="edit" aria-label="edit" onClick={() => setShowForm(!showForm)}></button>
      <button className="delete" aria-label="delete" onClick={() => deleteArticleEntry(singleArticle.id)}></button>
    </div>
    <div className="message-body">
    {singleArticle.entryText}
      </div>
      {/* <div>Mood: {singleArticle.mood.name}</div> */}
      <div>User: {singleArticle.user.username}</div>

     
    
    </article>
    :
    <article className="message">
 
    <div className="message-header">
    <input name="title"  type="text" placeholder="Name your entry" value={editArticle.title} onChange={handleControlledInputChange}/>     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <p></p>
     <input type="Date" name="dateTime" value={editArticle.dateTime}  onChange={handleControlledInputChange}/>
<button className="button is-small is-success"  onClick={(e) => updateEntry(e)}>Save</button>
<button className="button is-small is-danger"  onClick={() => setShowForm(!showForm)}>Cancel</button>
</div>
<div className="message-body">
<textarea name="entryText" className="textarea" placeholder="tell me about it ..." value={editArticle.entryText}  onChange={handleControlledInputChange}></textarea>
</div>
{/* <MoodSelect handleControlledInputChange={handleControlledInputChange} articleEntry={editArticle} /> */}
<div>User: {singleArticle.userId}</div>



</article>
}
    </>
}
