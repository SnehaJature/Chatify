import { Component } from "react";
import '/Users/snehajature/Chatify/src/style/Sidebar.css'
import home from "/src/assets/home.svg"
import message from "/src/assets/messages.svg"
import search from "/src/assets/search.svg"
import gear from "/src/assets/gear.svg"


export default function Sidebar() {
    return (
        <>
            <div className="sidebar">
                <div className="logo-parent">
                    <div className="logo">
                        <b className="q">Q</b>
                    </div>
                    <div className="home-parent">

                        <div className="file-pdf"><img src={home} alt="error" /></div>



                        <div className="messages1"><img src={message} alt="error" /></div>


                        <div className="file-pdf"><img src={search} alt="error" /></div>

                    </div>
                </div>

                <div className="gear"><img src={gear} alt="error" /></div>
            </div>

        </>
    )

}