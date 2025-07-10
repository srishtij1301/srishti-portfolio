"use client";
import React, { use, useState } from "react";
import s from "./style.module.css";
import image from "next/image";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";

const Header = () => {

    const menus = [{ menu: "Home", link: "/" },
    { menu: "About", link: "#about" },
    { menu: "Projects", link: "#project" },
    { menu: "Experience", link: "#experience" },
    { menu: "Contact", link: "#contact" }
    ]

    const [isopen, setIsopen] = useState(false)

    const ToogleMenu = () => {
        return (
            setIsopen(!isopen)
        )
    }

    const menuClicked = () => {
        return (
            setIsopen(false)
        )
    }

    return (
        <>
            <header className="header block md:flex justify-between md:py-5">
                <div className={`${s.menuTxt} hidden md:block`} >
                    <h2> <Link href="/">MY PORTFOLIO</Link> </h2>
                </div>
                <div>

                    {/* desktop menus */}
                    <ul className={`${s.menus} hidden md:flex`}>
                        {
                            menus.map((item, index) => {
                                return (
                                    <li key={index}><Link href={item.link}>{item.menu}</Link></li>
                                )
                            })
                        }

                    </ul>

                    {/* mobile menu */}
                    <div className="flex justify-between items-center px-2 md:hidden">

                        <div className={`${s.menuTxt} block md:hidden`} >
                            <h2> MY PORTFOLIO</h2>
                        </div>
                        <button onClick={ToogleMenu}>
                            {isopen ? <FaTimes /> : <FaBars />}
                        </button>
                    </div>
                    {
                        isopen &&
                        <ul className={`${s.menus} leading-10 block md:hidden`}>

                            {
                                menus.map((item, index) => {
                                    return (
                                        <><li onClick={menuClicked} key={index}><Link href={item.link}>{item.menu}</Link></li></>
                                    )
                                })
                            }

                        </ul>
                    }
                </div>
            </header>
            <hr />
        </>
    )
}

export default Header;