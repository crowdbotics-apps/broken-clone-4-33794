import React from 'react'
import './NavDrawer.css'
import MenuBtn from '../../Icons/MenuBtn'
import NavBar from '../NavBar/NavBar'

const NavDrawer = () => (
    <div>
        <button
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#mainNavOffCanvas"
            aria-controls="mainNavOffCanvas"
        >
            <MenuBtn />
        </button>

        <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="mainNavOffCanvas"
            data-bs-scroll="true"
            data-bs-backdrop="true"
            aria-labelledby="mainNavOffCanvasLabel"
        >
            <div className="offcanvas-header">
                <span />
                <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" />
            </div>
            <NavBar />
        </div>
    </div>
)

export default NavDrawer;