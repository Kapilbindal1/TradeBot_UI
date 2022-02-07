import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";


const HomePage = () => {
const navigate = useNavigate();
    const showUsers = () =>{
         navigate("/users")
    }
    return <div className="container">
        <div className="row">Welcome to Trade BOT</div>
        <div style={{cursor: "pointer"}} onClick={showUsers}> Show All Users </div>
    </div>
}

export default HomePage