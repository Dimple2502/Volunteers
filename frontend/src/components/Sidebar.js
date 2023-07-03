import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "./css/Sidebar.css";

const Sidebar = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleNavigation = () => {
        setIsActive(!isActive);
    };

    const navigationClassName = `navigation ${isActive ? 'active' : ''}`;
    const mainClassName = `main ${isActive ? 'active' : ''}`;

    return (
        <>
            <div className="container">
                <div className={navigationClassName}>
                    <ul>
                        <li>
                            <NavLink to="/" activeclassname="active">
                                <span className="icon"><i className="fas fa-user-circle"></i></span>
                                <span className="title">Admin</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact" activeclassname="active">
                                <span className="icon"><i className="fas fa-home"></i></span>
                                <span className="title">Home</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeclassname="active">
                                <span className="icon"><i className="fas fa-address-book"></i></span>
                                <span className="title">Contact</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/info" activeclassname="active">
                                <span className="icon"><i className="fas fa-info-circle"></i></span>
                                <span className="title">Details</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/" activeclassname="active">
                                <span className="icon"><i className="fas fa-edit"></i></span>
                                <span className="title">Logout</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <div className={mainClassName}>
                    <div className="topbar">
                        <div className="toggle" onClick={toggleNavigation}>
                        <span className="icon"><i className="fas fa-bars"></i></span>
                        </div>
                    </div>
                    
                </div>
            </div>
            </>
    );
};

export default Sidebar;
