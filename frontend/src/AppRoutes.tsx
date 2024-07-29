import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layouts/layouts";
import HomePage from "./pages/HomePage";
const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout><HomePage /></Layout>}/>
            <Route path="/user-profile" element={<span>User Profile Page</span>}/>
            <Route path="*" element={<Navigate to="/"/>}/>
        </Routes>
    )
}

export default AppRoutes;