// import { EmployeeViews } from "./EmployeeViews"
import { UserViews } from "./UserViews"

export const ApplicationViews = () => {

    const localNutshellUser = localStorage.getItem("nutshell_user")
    const nutshellUserObject = JSON.parse(localNutshellUser)
       
        if (nutshellUserObject) {
            return <UserViews />
        }

   /*  if (nutshellUserObject.staff ) {
        // Return employee views
        return <EmployeeViews  />
    }
    else {
        // Return user views
        return <UserViews />
    } */
}