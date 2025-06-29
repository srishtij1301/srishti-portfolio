"use client"
import React from "react";
import s from "./style.module.css";
import HeroTextAnim from "../textanim/page";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
    return (
        <>
            <section className={s.hero}>
                <div className={`${s.heroText} text-center`}>
                    <div className="p-3 md:p-0">
                        <h1>Hello, </h1>
                        <h2>I’m Srishti Jain</h2>
                        <h4>— A Frontend Developer</h4>
                         <p className="my-4 textHeight"> <HeroTextAnim /></p>
                         <p>I'm a passionate frontend developer with over 3 years of experience building scalable UIs using React.js, Tailwind CSS, and Next.js. I enjoy translating designs into code and delivering seamless user experiences.</p>
                        <button> <Link href="/Srishti_Jain.pdf" download>Download Resume</Link> </button>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Hero;