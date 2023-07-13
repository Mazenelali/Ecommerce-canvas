"use client";

import "tailwindcss/tailwind.css";
import Image from "next/image";
import HeroSection from "@/components/heroSection";
import sofa from "../assest/image1.png";
import lamp from "../assest/lamp1.png";
import Table from "../assest/table1.png";
import vase from "../assest/vase.png";
import Sofas from "../assest/Sofas.jpeg";
import Sectionals from "../assest/Sectionals.png";
import Tables from "../assest/Tables.png";
import Modular from "../assest/Modular.png";
import chairs2 from "../assest/chairs2.jpg";
import Benches from "../assest/Benches.png";
import Ottomas from "../assest/Ottomas.jpg";
import Outdoor from "../assest/Outdoor.jpg";
import Footer from "@/components/footer";

import "./Home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import "aos/dist/aos.js";
import { BsArrowRight } from "react-icons/bs";
import { useEffect } from "react";

export default function Home() {
    useEffect(() => {
        Aos.init({
            easing: "ease-out",
            duration: 600,
            once: false,
        });
    }, []);

    const imagesOfCategory = [
        {
            image: Sectionals,
            caption: "Sectionals",
        },
        {
            image: Sofas,
            caption: "Sofas",
        },
        {
            image: Modular,
            caption: "Modular",
        },
        {
            image: chairs2,
            caption: "Chairs",
        },
        {
            image: Outdoor,
            caption: "Outdoor",
        },
        {
            image: Tables,
            caption: "Tables",
        },
        {
            image: Ottomas,
            caption: "Ottomans",
        },
        {
            image: Benches,
            caption: "Benches",
        },
    ];

    return (
        <main className="max-w-screen overflow-hidden">
            <HeroSection />
            <div className="my-14 w-full flex flex-col gap-10  items-center  ">
                <span className="text-3xl p-10 text-brown md:text-5xl  ">
                    {" "}
                    Innovative Furniture Design !
                </span>
                <div
                    className="max-w-screen overflow-hidden relative"
                    id="background"
                >
                    <Image
                        src={sofa}
                        data-aos="fade-right"
                        id="sofa"
                        className=" max-md:w-48 absolute left-12 top-36 md:absolute md:left-40 md:top-72 "
                        width={650}
                        height={270}
                        alt=""
                    />
                    <Image
                        src={lamp}
                        id="lamp"
                        data-aos="fade-left"
                        className=" max-md:w-20 absolute right-4 top-10 md:absolute  md:right-48 md:top-32"
                        width={200}
                        height={300}
                        alt=""
                    />
                    <Image
                        src={vase}
                        id="vase"
                        data-aos="fade-up"
                        className="max-md:w-20 absolute right-14 bottom-4  md:absolute md:right-64 md:bottom-2"
                        width={280}
                        height={300}
                        alt=""
                    />
                </div>
            </div>
            <div className="my-14 w-screen flex flex-col justify-center gap-5  items-center ">
                <span className=" text-2xl p-6 text-brown md:text-5xl ">Categories</span>
                <div className="w-3/4 gap-5 flex flex-wrap">
                    {imagesOfCategory.map((ele) => (
                        <div
                            className="w-32  md:w-60 gap-5 mx-auto md:basis-[23%]"
                            key={imagesOfCategory.indexOf(ele)}
                        >
                            <div className=" h-36 md:h-56 overflow-hidden">
                                <Image
                                    src={ele.image}
                                    width={256}
                                    alt={ele.caption}
                                />
                            </div>
                            <span className="ml-4 text-lg opacity-50 flex flex-row items-center gap-2 transition-all ease-in-out delay-400  hover:gap-4 ">
                                {" "}
                                <span> {ele.caption} </span>{" "}
                                <span>
                                    {" "}
                                    <BsArrowRight />
                                </span>
                            </span>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full flex flex-col gap-9 items-center mb-14 sm:gap-0">
                <span className="text-2xl p-10 text-brown border-2-b-DarkBrown md:text-5xl  ">
                    Our Offer
                </span>
                <p className="text-sm w-3/4 md:text-xl ">
                    Discover incredible offers and unbeatable discounts on
                    exquisite{" "}
                    <span className="text-brown">canvas and wood</span>{" "}
                    furniture pieces. We take pride in providing a diverse
                    selection of top-notch furniture and home decor products,
                    tailored to your preferences. Whether youre searching for a
                    captivating canvas sofa, a sturdy wooden dining table, a
                    luxurious bedroom set, or any other furniture item, our
                    collection has something to complement your style and
                    accommodate your budget. Our dedicated team of experts
                    tirelessly curates the latest trends and ensures that each
                    product meets our stringent quality standards. We are
                    committed to offering affordability without compromising on
                    the excellence of our merchandise. Dont miss out on the
                    chance to transform your living space into a haven of
                    comfort and style. Take advantage of these incredible offers
                    now and embark on the journey of crafting your dream home!
                    Shop with us today and unlock a world of possibilities for
                    your home decor and furniture needs.
                </p>
            </div>
            <Footer />
        </main>
    );
}
