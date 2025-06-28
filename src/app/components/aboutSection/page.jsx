import React from "react";
import Image from "next/image";
import s from "./style.module.css";

const About = () => {

    const icons = ["/icons/html.png", "/icons/css.png", "/icons/js.png", "/icons/figma.png", "/icons/sass.png", "/icons/bootstrap.png", "/icons/tailwind-css.png", "/icons/react.png", "/icons/next.js.png"]

    return (
        <>
            <section id="about" className="md:my-16 px-3 md:px-0">
                <br className="break" /><br className="break" />
                <div className="my-8 grid grid-cols-1 md:grid-cols-2 md:gap-16" data-aos="fade-down">

                    <div className="paraTxt" data-aos="fade-down-right">
                        <h3 className="heading">About Me</h3>

                        <h2 className="uppercase text-sm md:text-2xl">Hello Visiters,</h2>
                        <br />
                        <p>I'm a passionate frontend developer with over 3 years of experience building scalable UIs using React.js, Tailwind CSS, and Next.js. I enjoy translating designs into code and delivering seamless user experiences.</p>
                        <br />
                        <p>  I focus on writing clean, maintainable code and creating seamless user experiences. From pixel-perfect designs to dynamic interactions.</p>
                        <br />
                        <p>  I hold a Master of Computer Applications (MCA) degree and have worked on diverse projects — from landing pages to complex dashboards. I'm continuously learning and love staying up to date with the latest tools and trends in frontend development. </p>
                    </div>

                    <div data-aos="fade-down-left">
                        <h3 className="heading">Skills</h3>
                        <div className={`${s.iconBox} grid grid-cols-3 place-content-around gap-6 md:gap-12`}>
                            {
                                icons.map((icon, index) => {
                                    return (
                                        <div key={index}><Image src={icon} alt="html" width={50} height={50}></Image></div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
                <br className="break" /><br className="break" />
            </section>
            <hr />
        </>
    )
}

export default About;