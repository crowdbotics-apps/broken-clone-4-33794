import React, {useContext} from 'react'
import './NavBar.css'
import {Link, useNavigate} from "react-router-dom"
import {use} from "express/lib/router"
//import {RegContext} from "../../../Context/RegContext"

const NavBar = () => {
    const history = useNavigate()
    //const auth = useContext(RegContext)

    const logoutHandler = event => {
        event.preventDefault()
        //auth.logout()
        history.back()
    }

    return (
            <div/>
    )
};

export default NavBar;