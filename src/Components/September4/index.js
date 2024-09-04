import React from "react";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

function September4(){
    return <div className="app-container">
        <Router>
        <Routes>
            <Route path='/' element={<SignUp/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            </Routes>
            </Router>
            </div>
}
export default September4;