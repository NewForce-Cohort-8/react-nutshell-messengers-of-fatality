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
return <>

<article className="images">
    {
        images.map((image) => {
            return <section className="image">
                    <div>{images.url}</div>             

                    </section>
        })
    }
</article>
</>

} 