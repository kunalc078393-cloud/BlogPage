import React from 'react'

export default function About() {
    return (

        <section
            className="min-h-screen px-6 py-16 bg-gradient-to-br from-[var(--lightPink)] via-white/30 to-[var(--ice)] flex flex-col md:flex-row gap-10 justify-center items-start"
        >

            <div
                className="group w-full md:w-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30"
            >
                <h2 className="text-2xl font-bold text-[var(--primaryDark)] mb-4 group-hover:text-[var(--primary)] transition">Education</h2>
                <ui
                    className="space-y-3 text-[var(--primaryDark)]/80"
                >
                    <li
                        className="hover:text-[var(--primary)] transition"
                    >
                        <strong>Class 10th (2024)</strong>  – Passed with <strong>85.54%</strong>
                    </li>
                    <li
                        className="hover:text-[var(--primary)] transition"
                    >
                        <span>
                            <strong>Diploma in Computer Engineering (2024 - present)</strong> - JSPM RSCOE Polytechnic
                        </span>
                        <ui
                            className="ml-5 mt-2 space-y-2 text-sm text-[var(--primaryDark)]/70"
                        >
                            <li>
                                Currently in <strong>Semester 4</strong>
                            </li>
                            <li>
                                Semester 1 : <strong>86.56%</strong>
                            </li>
                            <li>
                                Semester 1 : <strong>93.13%</strong>
                            </li>
                            <li>
                                Semester 1 : <strong>86.61%</strong>
                            </li>
                        </ui>

                    </li>
                </ui>
            </div>
            <div
                className="group w-full md:w-1/2 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30"
            >
                <h2 className="text-2xl font-bold text-[var(--primaryDark)] mb-4 group-hover:text-[var(--primary)] transition" >Intership Selection</h2>

                <strong className="text-[var(--primaryDark)] font-semibold">Web Development Intern - Maharashtra Informatics</strong>
                <br />
                <em className="text-[var(--primary)]">Duration : Three Months (selected)</em>
                <br />
                <br />
                <div className="text-[var(--primaryDark)]/70 leading-relaxed text-sm md:text-base tracking-wide mt-4">
                    I have been selected for a three‑month internship as a Web Development Intern at Maharashtra Informatics. The role will involve working with modern front‑end technologies such as React, Bootstrap, and Tailwind CSS, contributing to responsive and user‑friendly applications. This upcoming opportunity will allow me to apply my academic knowledge in a professional environment, gain industry exposure, and strengthen my skills in UI/UX design, database integration, and collaborative development practices.
                </div>

            </div>


        </section>
    );

}

