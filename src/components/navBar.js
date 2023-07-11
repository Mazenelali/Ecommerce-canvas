import Link from "next/link";
import canvaslogo from "../assest/canvaslogo.png";
import Image from "next/image";
import {SlArrowDown} from "react-icons/sl"

function NavBar() {
    const link = [
        {
            linkTo: "/",
            item: "home",
        },
        {
            linkTo: "/",
            item: "home",
        },
        {
            linkTo: "/",
            item: "home",
        },
        {
            linkTo: "/",
            item: "home",
        },
        {
            linkTo: "/",
            item: "home",
        },
    ];

    return (
        <nav className="w-full">
            <div className="h-24 w-full border-b-2 border-b-brown flex items-center gap-10">
            <div className="h-28 w-28 ">
                    <Image
                        src={canvaslogo}
                        alt="logo"
                        width="100%"
                        height="100%"
                    />
                </div>
            <nav className="h-14 w-1/2 flex space-x-10 p-5 items-center  font-thin ">
                <Link className="opacity-60 flex items-center gap-1" href={"/test"}>New </Link>
                <Link className="opacity-60 flex items-center gap-1" href={"#"}>Furniture </Link>
                <Link className="opacity-60 flex items-center gap-1" href={"#"}>Decor & lighting </Link>
                <Link className="opacity-60 flex items-center gap-1" href={"#"}>Rugs </Link>
                <Link className="opacity-60 flex items-center gap-1" href={"#"}>Tabletop </Link>
                <Link className="opacity-60 flex items-center gap-1" href={"#"}>Wisteria Clasics </Link>
               </nav>
            </div>
        </nav>
    );
}

export default NavBar;
