import React from 'react'

export default function Home() {
    return (
        <main className="min-h-screen flex items-center justify-center px-6 py-16 bg-gradient-to-br from-[var(--lightPink)] via-white/30 to-[var(--ice)] overflow-hidden">

            <div className="max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12">

                <div className="w-44 h-44 sm:w-52 sm:h-52 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden shadow-xl border-4 border-[var(--primary)]/30 transition-all duration-700 hover:scale-110 hover:rotate-1 hover:shadow-2xl">

                    <img
                        className="w-full h-full object-cover"
                        src="https://images.pexels.com/photos/33579599/pexels-photo-33579599.jpeg"
                        alt=""
                    />
                </div>


                <div className="w-full md:w-3/5 text-center md:text-left">


                    <div className="relative group">

                        <div className="absolute -inset-2 bg-gradient-to-r from-[var(--primary)]/10 via-[var(--softPink)]/10 to-[var(--ice)]/20 blur-2xl opacity-70 group-hover:opacity-100 transition duration-700 rounded-2xl"></div>

                        <div className="relative text-[var(--primaryDark)]/70 leading-relaxed text-sm md:text-base lg:text-lg tracking-wide leading-[1.8] break-words whitespace-normal text-justify animate-fade-in max-w-2xl mx-auto md:mx-0 p-6 rounded-2xl bg-white/20 backdrop-blur-md border border-white/30 transition-all duration-500 hover:text-[var(--primaryDark)] hover:scale-[1.02] hover:shadow-xl">

                            I am a <strong className="text-[var(--primary)] font-semibold transition hover:tracking-wider">
                                Computer Engineering student
                            </strong> student with a strong foundation in programming languages including
                            <span className="text-[var(--primaryDark)] font-medium hover:text-[var(--primary)] transition"> Java</span>,
                            Python, and JavaScript.

                            My technical expertise extends to database management systems such as
                            Oracle and PostgreSQL, as well as front-end development using HTML,
                            CSS, JavaScript, <span className="text-[var(--primary)] font-medium hover:scale-110 inline-block transition">React</span>,
                            Bootstrap, and Tailwind CSS.

                            I have a solid understanding of computer networks and data structures,
                            complemented by practical experience in
                            <span className="text-[var(--softPink)] font-medium hover:text-[var(--primary)] transition"> UI/UX design</span>.

                            Through academic projects and hands-on practice, I focus on building
                            efficient, scalable, and user-friendly applications while continuously
                            expanding my knowledge across core areas of computer science.

                        </div>
                    </div>
                </div>

            </div>
        </main>

    );

}



