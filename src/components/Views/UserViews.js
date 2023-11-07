import { Outlet, Route, Routes } from "react-router-dom"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleList } from "../articles/ArticleList"
import { ArticleEntry } from "../articles/ArticleEntry"
import { MessageList } from "../Messages/MessageList"
import { MessageForm } from "../Messages/MessageForm"
import { MessageEdit } from "../Messages/MessageEdit"
import { Images } from "../images/Images"

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
                <Route path="images" element={ <Images />} />
                <Route path="messageForm" element={<MessageForm />} />
                <Route path="messages" element={<MessageList />} />
                <Route path="messages/:messageId/edit" element={<MessageEdit />}/>
                <Route path="articleEntries/:userId" element={<ArticleEntry />} />
                <Route path="articles/create" element={<ArticleForm />} />
                <Route path="articles" element={<ArticleList />} />
                
            </Route>
        </Routes>
    )
}