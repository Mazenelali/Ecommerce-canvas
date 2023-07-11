import Image from "next/image";
import logo from "../assest/canvaslogo.png";

function Footer() {
    return (
        <footer className="w-full h-60 flex justify-center items-center space-x-12  bg-brown ">
            <div className="h-50 w-1/4 p-2 flex flex-col gap-2">
                <span className="text-white text-xl opacity-70">About us</span>
                <span className="text-white text-xl opacity-70">Contact Us</span>
                <span className="text-white text-xl opacity-70">Send an email</span>
            </div>
            <div className="h-50 w-1/5 flex justify-center flex-col bg-slate-50 items-center">
                <Image src={logo} width={200} height={200} alt="logo" />
                <span>Copy right @2023 Mazen elali</span>
            </div>
            <div className="h-50 w-1/4">
                <div className=""></div>
                <div className=""></div>
                <div className=""></div>
            </div>
        </footer>
    );
}


export default Footer;
