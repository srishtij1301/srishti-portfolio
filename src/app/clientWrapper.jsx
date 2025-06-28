"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ClientWrapper({ children }) {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            disable: function () {
                // Disable AOS on mobile (e.g. screen width < 768px)
                return window.innerWidth < 768;
            },
        });
    }, []);

    return <>{children}</>;
}
