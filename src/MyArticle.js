import { useEffect, useState } from "react"
import { ArticleForm } from "./components/articles/ArticleForm"
import { ArticleList } from "./components/articles/ArticleForm"
import { getAllArticleEntries } from "./APIManager"


export const MyArticle = () => {
    const [articleEntries, setArticleEntries ] = useState([])

    useEffect(
        () => {
          getAllArticleEntries()
          .then((articleArray) => {
            setArticleEntries(articleArray)
          })
        },
        [] //where we observe state - if empty we are just watching intial component state
      )

      const updateArticleState = () => {
        return getAllArticleEntries()
          .then((articleArray) => {
            setArticleEntries(articleArray)
          })
        }
        const deleteArticleEntry = (id)=> {
            return fetch(`  http://localhost:8088/articleEntries/${id}`, {method: "DELETE"})
            .then(updateArticleState)
          }
      

      

    return (
        
    <section className="section">
        <div className="container">
            <h1 className="title">
                My Article
            </h1>
            <p className="subtitle">
                 Tell me how you really feel
            </p>
            <div className="columns">
                <div className="column is-three-fifths">
                    <ArticleForm updateArticleState={updateArticleState} />
                </div>
                <div className="column">
                    
                </div>
            </div>
            <ArticleList articleEntries={articleEntries} deleteArticleEntry={deleteArticleEntry} updateArticleState={updateArticleState}/>
    
    </div>
    
    </section>
    
    )


}


/////future features

// sort entries by mood

//users can see their own post.