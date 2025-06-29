import React from "react";
import s from "./style.module.css";
import Link from "next/link";

const Contact = () => {
    return (
        <>
            <section id="contact" className="my-16 px-3">
                <h3 className="heading text-center">Get in Touch</h3>
                <p className="text-center">If you wanna get in touch, talk to me about a project or just say Hi. send me an email at <Link href="mailto:srishtij1301@gmail.com" className="underline">srishtij1301@gmail.com </Link>  or click the button below.</p>
                <div className="text-center">
                <button> <Link href="mailto:srishtij1301@gmail.com"> Send Email</Link></button>
                </div>
            </section>
        </>
    )
}

export default Contact;