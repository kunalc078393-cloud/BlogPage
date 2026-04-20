import React from 'react'

function Skill() {
    return (
        <main className="min-h-screen px-6 py-16 bg-gradient-to-br from-[var(--lightPink)] via-white/30 to-[var(--ice)]">


            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">


                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30">

                    <h2 className="text-xl font-bold text-[var(--primaryDark)] mb-4 group-hover:text-[var(--primary)] transition">
                        Web Development
                    </h2>

                    <ul className="space-y-2 text-[var(--primaryDark)]/80">
                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            HTML
                        </li>

                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            CSS: Bootstrap, Tailwind CSS
                        </li>

                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            JavaScript: React
                        </li>
                    </ul>

                </div>

                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30">

                    <h2 className="text-xl font-bold text-[var(--primaryDark)] mb-4 group-hover:text-[var(--primary)] transition">
                        Programming Languages
                    </h2>

                    <ul className="space-y-2 text-[var(--primaryDark)]/80">
                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            Java: Swing, Networking Connectivity, Database Connectivity
                        </li>

                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            Python: NumPy, Pandas, Matplotlib
                        </li>
                    </ul>

                </div>


                <div className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:bg-white/30">

                    <h2 className="text-xl font-bold text-[var(--primaryDark)] mb-4 group-hover:text-[var(--primary)] transition">
                        Databases & Data Tools
                    </h2>

                    <ul className="space-y-2 text-[var(--primaryDark)]/80">
                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            PostgreSQL
                        </li>

                        <li className="hover:text-[var(--primary)] transition cursor-default pl-2 border-l-2 border-transparent hover:border-[var(--primary)]">
                            Excel
                        </li>
                    </ul>

                </div>

            </div>

        </main>

    );
}
export default Skill

