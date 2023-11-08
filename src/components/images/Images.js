import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom"

export const Images = () => {
    const [images, setImages] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        fetch(`http://localhost:8088/images`)
                .then(r => r.json())
                .then((imageArray) => {
                    setImages(imageArray)

                })
        },
        []
    )

    const deleteButton = (image) => {
        
        return <button onClick={() => {
            fetch(`http://localhost:8088/images/${image.id}`, {
                method: "DELETE"
            })
            .then(() => {
                fetch(`http://localhost:8088/images`)
                .then(r => r.json())
                .then((imageArray) => {
                    setImages(imageArray)

                })
            })
        }} className="image_delete">Delete</button>
    }
    


    
return <>

<button onClick={() => navigate("/imageForm")}>Add Image </button>

<h2>Nutshell Images</h2>

<article className="images">
{
    images.map(
        (image) => {
        return <section className="image">
                <img src={image.url}/> 
                <div>{image.caption}</div> 
                { deleteButton(image) }           

                </section>
    })
}
</article>
</>

} 



    

