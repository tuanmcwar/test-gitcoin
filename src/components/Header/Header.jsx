import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <header className="p-4 bg-gray-800 text-gray-100">
                <div className="container flex justify-between h-16 mx-auto">
                    <ul className="items-stretch hidden space-x-3 lg:flex">
                        <li className="flex">
                            <NavLink
                                to="/home"
                                className="flex items-center px-4 -mb-1 border-b-2 border-transparent text-violet-400 border-violet-400"
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                to="/about"
                                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                            >
                                About
                            </NavLink>
                        </li>
                        <li className="flex">
                            <NavLink
                                to="/contact"
                                className="flex items-center px-4 -mb-1 border-b-2 border-transparent"
                            >
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <div className="items-center flex-shrink-0 hidden lg:flex">
                        <button className="self-center px-8 py-3 rounded hover:text-violet-400">
                            Sign in
                        </button>
                        <button className="self-center px-8 py-3 font-semibold rounded bg-violet-400 text-gray-900 hover:bg-violet-700 hover:text-white">
                            Sign up
                        </button>
                    </div>
                    <button className="p-4 lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            className="w-6 h-6 text-gray-100"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h16"
                            ></path>
                        </svg>
                    </button>
                </div>
            </header>
        )
    }
}
