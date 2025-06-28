import React from "react";
import s from "./style.module.css";

const Experience = () => {

    const experience = [{ company: "Fidaato Infotech Pvt Ltd ,Bhopal", designation: "Web Designer Intern", duration: "march 2020 - june 2020" },
    { company: "Maestros Infotech Pvt Ltd ,Bhopal", designation: "Jr Frontend Developer", duration: "oct 2021 - april 2023" },
    { company: "RPA Technologies Pvt Ltd ,Bhopal", designation: "Frontend Developer", duration: "may 2023 - Nov 2024" },
    ]

    return (
        <>
            <section id="experience" className="md:my-16" data-aos="fade-down">
                <br /><br />
                <h3 className="heading text-center">Work Experience</h3>
                <div className="grid md:grid-cols-3 gap-5">

                    {
                        experience.map((item, index) => {
                            return (

                                <div key={index} className="text-center">
                                    <h3>{item.company}</h3>
                                    <h5>{item.designation}</h5>
                                    <p>{item.duration}</p>
                                </div>

                            )
                        })
                    }
                </div>
                <br /><br />
            </section>
            <hr />
        </>
    )
}

export default Experience;