"use client"
import React from "react";
import s from "./style.module.css";
import { CiCircleRemove } from "react-icons/ci";

const skillsData = [{ id: 1, name: "HTML" }, { id: 2, name: "CSS" }, { id: 3, name: "Javascript" }, { id: 4, name: "Tailwind" }]

const Admin = () => {

    const deleteHandler = (id) => {
        console.log("click", id);
    }

    return (
        <>
            <section className="p-5">
                <h2>Skills</h2>
                <div className={s.adminContain}>
                    {
                        skillsData.map((item, index) => {
                            return (
                                <div key={index} className="flex items-center">
                                    <span className="border border-2 px-2 py-1 rounded my-2">{item.name}</span>
                                    <CiCircleRemove onClick={() => {
                                        deleteHandler(item.id)
                                    }} className="text-3xl mx-1" />
                                </div>

                            )
                        })
                    }
                </div>

                <form>
                    <input type="text" className="border border-1 rounded p-2 mx-2" />
                    <button>Add</button>
                </form>

            </section>
        </>
    )
}

export default Admin;