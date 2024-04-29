import React from 'react'
import smallImg from "../../assets/stdDashboard/WhatsApp Image 2024-02-26 at 00.13.47_cc9ce5b8.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUsers, faComments } from '@fortawesome/free-solid-svg-icons';


const SideNavForum = () => {
    return (
        <>
            <div className="SideNav d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary">
                <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                    <span className="fs-4 px-3">Welcome User</span>
                </a>
                <hr />
                <ul className="nav nav-pills flex-column mb-auto">
                    <li className="nav-item">
                        <a href="#" className="nav-link active" aria-current="page">
                            <FontAwesomeIcon className='navIcons' icon={faHome} />
                            Home
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            <FontAwesomeIcon className='navIcons' icon={faUsers} />
                            Groups
                        </a>
                    </li>
                    <li>
                        <a href="#" className="nav-link link-body-emphasis">
                            <FontAwesomeIcon className='navIcons' icon={faComments} />
                            Forums
                        </a>
                    </li>
                </ul>
                <hr />
                <div className="dropdown">
                    <a href="#" className="d-flex align-items-center link-body-emphasis text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={smallImg} alt="" width="32" height="32" className="rounded-circle me-2" />
                        <strong>Khaled</strong>
                    </a>
                    <ul className="dropdown-menu text-small shadow">
                        <li><a className="dropdown-item" href="#">Profile</a></li>
                        <li><a className="dropdown-item" href="#">Settings</a></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><a className="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default SideNavForum