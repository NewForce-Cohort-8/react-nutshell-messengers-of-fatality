import { useState } from "react"
import { useNavigate } from "react-router-dom"

export const ImageForm = () => {
    const [image, update] = useState( {
        url: "",
        caption: ""
    })

    const navigate = useNavigate()

    const localNutshellUser = localStorage.getItem("nutshell_user")
   const nutshellUserObject = JSON.parse(localNutshellUser)

   const handleSaveButtonClick = (event) => {
    event.preventDefault()
        const imgToSendToApi ={
            userId: nutshellUserObject.id,
            url: image.url,
            caption: image.caption
        }

        return fetch(`http://localhost:8088/images`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(imgToSendToApi)
        })
            .then(r => r.json())
            .then(() => {
                navigate("/images")

            })
   }

   return (
    <form className="imageForm">
        <h2 className="imageForm__title">Add New Image to Gallery</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="image">URL:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Type new image URL"
                    value={image.url}
                    onChange={
                        (evt) => {
                            const copy = {...image}
                            copy.url = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="image">Caption:</label>
                <input
                    required autoFocus
                    type="text"
                    className="form-control"
                    placeholder="Type new image caption"
                    value={image.caption}
                    onChange={
                        (evt) => {
                            const copy = {...image}
                            copy.caption = evt.target.value
                            update(copy)
                        }
                    } />
            </div>
        </fieldset>
        
        <button 
        onClick={(clickEvent) => handleSaveButtonClick(clickEvent)}
        className="btn btn-primary">
            Submit Image
        </button>
    </form>
)

}