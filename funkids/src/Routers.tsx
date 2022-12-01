import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link
  } from "react-router-dom";
//Page imports
import { Home } from "./pages/Home";
//Routers
export function AppRoutes(){
    return(
        <Router>
            <Routes>
                <Route path="/home" element={<Home/>}></Route>
            </Routes>
        </Router>
    )
  }