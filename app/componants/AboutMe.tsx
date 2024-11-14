import aboutMeHeader from "../public/about_me.png"
import Image from "next/image"
import RetroButton from "./RetroButton"
import sriwanPhoto from "../public/sriwan_photo.jpg"
import DetailsBox from "./DetailsBox"

export default function AboutMe() {
    return (
        <div className="my-24 lg:mt-32" id="about-me">
            <div><Image className="w-3/4 md:w-1/2 lg:w-1/3 mx-auto" src={aboutMeHeader} alt="aboutMeHeader"></Image></div>
            <div><Image className="rounded-full mx-auto my-5 border-2 border-[#020202] drop-shadow-[-7px_-4px_0px_rgba(2,2,2,1)] mb-5" src={sriwanPhoto} width={200} alt="sriwanPhoto"></Image></div>
          

            <DetailsBox
                text = "Hi there! I'm Sriwan, a UI Designer and Front-End Developer originally from Bangkok. I studied visual art at New York Art Studio and later pursued a Web Development degree in Boston. With over 2 years of professional experience, I specialize in creating visually appealing and user-friendly interfaces for digital products, as well as responsive web design and mobile optimization."
                attribute = "w-11/12 lg:w-1/2 mx-auto"
            />
            <div><a href="#contact">
                <RetroButton
                    text="Get in touch"
                    color="bg-[#FFA6FF]" />
            </a></div>
            {/* </div> */}
        </div>
    )
}