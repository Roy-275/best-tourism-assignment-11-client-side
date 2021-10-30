import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

export default function Header({ fixed }) {
    const { user, logout } = useAuth();
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <>
            <nav className="relative flex flex-wrap items-center justify-between md:px-36 sm:px-2 py-3 bg-green-500">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <div>
                            {!user.email ?
                                <div className="">
                                    <Link className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        to="/login"
                                    >
                                        <span className="ml-2">Login</span>
                                    </Link>

                                    <Link
                                        className="px-3 py-2 text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                        to="/register"
                                    >
                                        <span className="ml-2">Register</span>
                                    </Link>
                                </div>
                                :
                                <div className="md:mt-4 sm:mt-1 text-right md:mb-4">
                                    <span className="md:text-xl sm:text-base font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap text-white">{user.displayName}</span>
                                    <button onClick={logout} className="md:text-xl sm:text-base font-bold leading-relaxed inline-block mr-4 p-2 whitespace-nowrap text-black hover:bg-yellow-400 bg-yellow-600 rounded-lg">Log Out</button>
                                </div>
                            }
                        </div>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/home"
                                >
                                    <span className="ml-2">Home</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/addservice"
                                >
                                    <span className="ml-2">Add Service</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/manage"
                                >
                                    <span className="ml-2">Manage My Tours</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
                                    to="/manageall"
                                >
                                    <span className="ml-2">Manage All Tours</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}