import { Route, Routes, Navigate } from "react-router-dom"
import Layout from "./layouts/layouts";
import HomePage from "./pages/HomePage";
import AuthCallbackPage from "./pages/AuthCallbackPage";
import UserProfilePage from "./pages/UserProfilePage";
import ProtectedRoute from "./auth/ProtectedRoute";
const AppRoutes = () =>{
    return(
        <Routes>
            <Route path="/" element={<Layout showHero={true}><HomePage /></Layout>}/>

            <Route path="/auth-callback" element={<AuthCallbackPage/>}></Route>

            <Route element={<ProtectedRoute/>}>
            <Route path="/user-profile" element={<Layout > <UserProfilePage/></Layout>}/>
            </Route>


            <Route path="*" element={<Navigate to="/"/>}/>

        </Routes>
    )
}

export default AppRoutes;