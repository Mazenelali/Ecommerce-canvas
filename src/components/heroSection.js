import Image from "next/image";
import "tailwindcss/tailwind.css";
import "../app/globals.css";
import "./heroSection.css";

function HeroSection() {
    let image = [
        "https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/276566/pexels-photo-276566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        "https://images.pexels.com/photos/945669/pexels-photo-945669.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ];

    return (
        <header className=" md:w-full md:h-3/4 md:flex md:justify-center md:mt-6">
            <div
                id="carousel-content"
                className="h-96 md:h-3/4 border-y-2 border-brown"
            >
                <div id="carousels">
                    {image.map((ele) => {
                        return (
                            <div
                                className="w-screen py-2 h-96 md:h-screen"
                                key={image.indexOf(ele)}
                            >
                                <Image
                                    className="w-full h-full"
                                    src={ele}
                                    key={image.indexOf(ele)}
                                    // style={{ aspectRatio: "3/2" }}
                                    width={1980}
                                    height={1000}
                                    alt=""
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* <p className="text-white w-1/2 text-7xl absolute top-3/4 left-60 font-light">
                Your <span className="text-brown">Stylish Furniture</span>{" "}
                Marketplace
            </p> */}
        </header>
    );
}

export default HeroSection;
