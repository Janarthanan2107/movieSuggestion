import { Outlet } from "react-router-dom"
import { Navbar } from "../common"

const Root = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default Root