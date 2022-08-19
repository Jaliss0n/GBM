import React from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

export default function Home() {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row'
        }}>
            <Sidebar/>
            <Header/>
        </div>
    )
}