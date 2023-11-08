import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

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
} 