import { Outlet, Route, Routes } from "react-router-dom"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleList } from "../articles/ArticleList"
import { ArticleEntry } from "../articles/ArticleEntry"

export const UserViews = () => {
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <h1></h1>
                    <div>Your Dashboard</div>

                    <Outlet />
                </>
            }>

                
                
                <Route path="articleEntries/:userId" element={<ArticleEntry />} />
                <Route path="articles/create" element={<ArticleForm />} />
                <Route path="articles" element={<ArticleList />} />
            </Route>
        </Routes>
    )
}