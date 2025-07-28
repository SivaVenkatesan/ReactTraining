import UserList from "../components/UserList";
import { useLocation } from 'react-router-dom';
import { useState } from "react";

function Teams(props) {
    const location = useLocation();
    const formData = location.state?.formData || {};
    return (
        <>
            <h1 className="text-2xl font-bold text-red-700">Our Teams</h1>
            <h2 className="text-xl font-bold my-3">Hello, {formData?.userName || "Guest"}</h2>
            <p>Meet our dedicated teams working behind the scenes.</p>
            <UserList />
        </>
    );
}

export default Teams;

