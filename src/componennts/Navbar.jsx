import React from 'react'
import { Link } from 'react-router-dom'
import { AiOutlineUsergroupAdd } from "react-icons/ai"

const Navbar = () => {
    return (
        <>
            <nav className="container navbar navbar-expand-sm mt-3 navbar-light ">
                <div className="container">
                    <a className="navbar-brand fs-4" href="#">Crud</a>
                    <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to={'/userdata'}>
                                    <button className="btn btn-outline-success border-0" href="#" aria-current="page">UserData  <AiOutlineUsergroupAdd size={22} /> </button>
                                </Link>
                            </li>


                        </ul>
                        <ul className="navbar-nav  mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to={'/register'}>
                                    <button className="btn btn-outline-success border-0" aria-current="page">Register  <AiOutlineUsergroupAdd size={22} /></button>

                                </Link>
                            </li>



                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}

export default Navbar
