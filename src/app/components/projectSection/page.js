import React from "react";
import Image from "next/image";
import s from "./style.module.css";
import Link from "next/link";
import { Inder } from "next/font/google";

const Projects = () => {

    const projects = [{ title: "Alliance international", description: " Alliance International Security Consulting is a global security solutions provider specializing in risk management, personal protection, and security assessments.", url: "https://allianceint.com/", project_img: "/alliance_project.png" },
    { title: "Proweb", description: "Pro Web, established in 2016 is a full-stack web and mobile app development company, based in Dubai. We build custom web portals and mobile applications that are accessible, affordable, and scalable.", url: "https://www.prowebtechnos.com/", project_img: "/proweb_project.png" },
    { title: "Oasis Neon Signs", description: "The Oasis Neon Sign Website is a fully responsive, single-page website designed to showcase modern neon sign products and services. Built using HTML, CSS, and Bootstrap, the site delivers a vibrant user experience with smooth scrolling, animated elements, and a clean layout structure.", url: "https://oasisneonsigns.com/", project_img: "/oasis_project.png" },

    ]

    return (
        <>
            <section id="project" className="md:my-16 px-3 md:px-0" data-aos="fade-down">
                <br /><br />
                <h3 className="heading">projects </h3>
                <div className="paraTxt" data-aos="flip-up">
                    <p>Here are some of the projects I’ve worked on that reflect my skills, creativity, and passion for frontend development. From responsive UIs to dynamic web apps, each project helped me grow as a developer and taught me something new. I enjoy building clean, efficient, and user-friendly experiences using modern tools and technologies.
                    </p>
                </div>
                {
                    projects.map((item, index) => {
                        return (
                          
                                <div key={index} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 my-6 md:my-12 justify-center items-center"
                                    data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}>
                                    <div className={s.project}>
                                        <h2 className="font-bold my-3">{item.title}</h2>
                                        <p>
                                            {item.description}
                                        </p>
                                        <button> <Link href={item.url}>Live Preview</Link></button>
                                    </div>
                                    <div>
                                        <Image src={item.project_img} alt="project 1" width="500" height="400" />
                                    </div>
                                </div>
                           
                        )
                    })

                }

                <br /><br />
            </section>
            <hr />
        </>
    )
}

export default Projects;