import Image from "next/image"
import graphicHeader from "../public/graphic_header.png"
import DetailsBox from "./DetailsBox"
import ads from "../public/scroll_group_3.png"
import salon from "../public/salon.png"
import RetroButton from "../componants/RetroButton";



export default function GraphicDesign() {
    return (
        <div className="block lg:flex mx-5 md:mx-9 lg:mx-10 ">
            <div className="flex flex-col items-center lg:items-start lg:w-11/12">
                <Image className="w-full md:w-7/12 lg:w-9/12 mb-4" src={graphicHeader} alt="graphicHeader"></Image>
                <DetailsBox
                    text="With a keen eye for detail and a commitment to quality, I work closely with my clients to understand their needs and develop tailored solutions that meet their goals and exceed their expectations. Whether it’s a new menu design, branding or marketing collateral, I am dedicated to delivering exceptional designs that elevate my clients’ businesses"
                    attribute="lg:w-10/12" />
                <Image className="rounded-3xl border-2 border-black lg:w-10/12" src={ads} alt="ads"></Image>
            </div>
           
            <div className="my-6 lg:w-11/12">
                <Image className="w-full md:w-10/12 ml-2 md:mx-auto" src={salon} alt="salon"></Image>
                <DetailsBox
                    text="Through visual storytelling, I create eye-catching and effective designs for a variety of clients and purposes. I have experience working with various design tools, such as Illustrator, Photoshop, and Indesign"
                    attribute=""
                />
                <RetroButton
                    text="Read more"
                    color="bg-[#00AF9B]"
                />
            </div>
        </div>
    )
}