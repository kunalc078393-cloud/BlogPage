import React from 'react'

function Footer() {
    return (
        <footer className="w-full bg-[var(--ice)]/40 backdrop-blur-xl px-6 py-10">
            <div className="flex flex-col md:flex-row justify-between gap-10 pb-6">
                <div className="flex-1">
                    <ul className="space-y-2 text-[var(--primaryDark)]">
                        <li className="font-bold text-lg mb-2">
                            <span>Connections</span>
                        </li>
                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="https://www.instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Instagram</a>
                        </li>

                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="https://www.github.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Github</a>
                        </li>

                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Linkedin</a>
                        </li>

                    </ul>
                </div>
                <div className="flex-1">
                    <ul className="space-y-2 text-[var(--primaryDark)]">
                        <li className="font-bold text-lg mb-2"><span>Projects</span></li>
                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Currency-converter</a>
                        </li>
                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Blog-page</a>
                        </li>
                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Full duplex communication channel</a>
                        </li>
                        <li className="hover:text-[var(--primary)] transition cursor-pointer relative group">
                            <a
                                className="after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[var(--primary)] group-hover:after:w-full after:transition-all after:duration-300"
                                href="https://www.linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                            >Amazon ui clone</a>
                        </li>


                    </ul>
                </div>

            </div>
            <div className="h-px w-full bg-gradient-to-r from-transparent via-[var(--primary)]/30 to-transparent"></div>
            <div className="mt-8 px-6 py-6 text-center bg-white/10 backdrop-blur-md rounded-2xl shadow-sm">
                <span className="max-w-2xl mx-auto block text-[var(--primaryDark)]/70 leading-relaxed text-sm md:text-base tracking-wide space-y-4">I possess strong expertise in modern web development, specializing in frameworks and libraries such as React, Tailwind CSS, and Bootstrap. With hands-on experience delivering responsive, user-friendly interfaces, I currently work as a freelancer, helping clients build scalable and visually appealing digital solutions.</span>
            </div>
            <div className="mt-8 flex justify-center"
                onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            >
                <span className="px-4 py-2 bg-[var(--primary)] text-white rounded-full hover:bg-[var(--primaryDark)] transition cursor-pointer shadow-md">Top</span>

            </div>

        </footer>

    );
}

export default Footer;

