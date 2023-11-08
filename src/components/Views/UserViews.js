import { Outlet, Route, Routes } from "react-router-dom"
import { ArticleForm } from "../articles/ArticleForm"
import { ArticleList } from "../articles/ArticleList"
import { ArticleEntry } from "../articles/ArticleEntry"
import { MessageList } from "../Messages/MessageList"
import { MessageForm } from "../Messages/MessageForm"
import { MessageEdit } from "../Messages/MessageEdit"
import { TaskForm } from "../tasks/TaskForm"
import { TaskList } from "../tasks/TaskList"

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
                <Route path="messageForm" element={<MessageForm />} />
                <Route path="messages" element={<MessageList />} />
                <Route path="messages/:messageId/edit" element={<MessageEdit />}/>
                <Route path="articleEntries/:userId" element={<ArticleEntry />} />
                <Route path="articles/create" element={<ArticleForm />} />
                <Route path="articles" element={<ArticleList />} />
                <Route path="tasks" element={<TaskList />} />
                <Route path="taskForm" element={<TaskForm />} />

            </Route>
        </Routes>
    )
}