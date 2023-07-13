"use client";
import "./navBar.css";
import Link from "next/link";
import canvaslogo from "../assest/canvaslogo.png";
import Image from "next/image";
import { SlArrowDown } from "react-icons/sl";
import { useEffect, useState ,useRef } from "react";

export const NavBar = () => {
    const link = [
        {
            linkTo: "/News",
            title: "New",
        },
        {
            linkTo: "/",
            title: "Furniture",
        },
        {
            linkTo: "/",
            title: "Decor & lighting",
        },
        {
            linkTo: "/",
            title: "Rugs",
        },
        {
            linkTo: "/",
            title: "Tabletop",
        },
    ];

    const [visible, setVisible] = useState(false);

    const changeVisible = () => {
        setVisible(!visible);
    };

    const [windowSize ,setWindowsSize] = useState(null)  ;

    useEffect(() => {
        const updateWindowSize = () => {
            setWindowsSize(window.screen.width);
        };

        updateWindowSize(); 
    }, []);


    return (
        <nav className="w-full">
            {windowSize < 420 ? (
                <>
                    <nav className="h-16 z-10 bg-brown flex  relative space-x-64 items-center justify-center ">
                        <div className="w-10 h-10 bg-white">
                            <Image
                                src={canvaslogo}
                                className="w-full h-full"
                                width={100}
                                height={100}
                                alt=""
                            />
                        </div>
                        <div
                            className="menu-icon"
                            onClick={() => {
                                changeVisible();
                            }}
                        >
                            <input
                                className="menu-icon__cheeckbox"
                                type="checkbox"
                            />
                            <div>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </nav>
                    <nav
                        className={visible?`bg-brown w-full p-2 absolute  z-10 flex items-center justify-center transition-all`:`bg-brown flex -z-10  absolute w-full -translate-y-40  p-2 items-center justify-center transition-all`}
                    >
                        {(
                            <div className="w-3/4 h-3/4 inline-flex justify-center items-center flex-col">
                                {link.map(({ linkTo, title }, index) => (
                                    <Link
                                        key={index}
                                        className="opacity-60 flex items-center gap-1"
                                        href={linkTo}
                                    >
                                        {title}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </nav>
                </>
            ) : (
                <div className="h-24 w-full border-b-2 border-b-brown flex items-center gap-10">
                    <div className="h-28 w-28 ">
                        <Image src={canvaslogo} alt="logo" />
                    </div>
                    <nav className="h-14 w-1/2 flex space-x-10 p-5 items-center  font-thin ">
                        {link.map(({ linkTo, title }, index) => (
                            <Link
                                key={index}
                                className="opacity-60 flex items-center gap-1"
                                href={linkTo}
                            >
                                {title}
                            </Link>
                        ))}
                    </nav>
                </div>
            )}
        </nav>
    );
};

export default NavBar;
