import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Header() {

    return (
        <header>
            <nav className="flex flex-col shadow-sm shadow-[var(--lightPink)]/20 bg-white/20 backdrop-blur-xl rounded-b-2xl">
                <div className="flex items-center justify-between w-full px-6 pt-4 pb-2">
                    <div className="text-2xl font-bold text-[var(--primaryDark)]"><h1 >Kunal</h1></div>

                    <div className="flex gap-4 text-[var(--primaryDark)]">
                        <a
                            className="text-xl cursor-pointer 
                            hover:text-[var(--primary)] 
                            hover:scale-125 transition duration-300"
                            href="https://www.linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-linkedin"></i>
                        </a>

                        <a
                            className="text-xl cursor-pointer 
                            hover:text-[var(--primary)] 
                            hover:scale-125 transition duration-300"
                            href="https://github.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-github"></i>
                        </a>

                        <a
                            className="text-xl cursor-pointer 
                            hover:text-[var(--primary)] 
                            hover:scale-125 transition duration-300"
                            href="https://www.instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </div>

                </div>
                <div className="flex justify-center w-full px-6 pt-2 pb-5">
                    <ul className="flex gap-8 font-medium text-[var(--primaryDark)]">
                        <li className="relative cursor-pointer group transition-all duration-300 active:scale-95">
                            <NavLink
                                to='/'
                                className={`group-hover:text-[var(--primary)] transition`}
                            >
                                Home
                            </NavLink>
                        </li>
                        <li className="relative cursor-pointer group transition-all duration-300 active:scale-95">
                            <NavLink
                                to='/About'
                                className={`group-hover:text-[var(--primary)] transition`}
                            >
                                About
                            </NavLink>
                        </li>

                        <li className="relative cursor-pointer group transition-all duration-300 active:scale-95">
                            <NavLink
                                to='Skill'
                                className={`group-hover:text-[var(--primary)] transition`}
                            >
                                Skills
                            </NavLink>
                        </li>
                        <li className="relative cursor-pointer group transition-all duration-300 active:scale-95">
                            <NavLink
                                to='Contact'
                                className={`group-hover:text-[var(--primary)] transition`}
                            >
                                Contact us
                            </NavLink>
                        </li>

                    </ul>
                </div>
            </nav>
        </header>
    )

}



