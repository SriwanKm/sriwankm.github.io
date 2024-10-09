import aboutMeHeader from "../public/about_me.png"
import Image from "next/image"
import RetroButton from "./RetroButton"
import styles from "../page.module.css"

export default function AboutMe() {
    return (
        <div className="my-10">
            <div className="text-center">
                <div><Image src={aboutMeHeader} width={400} alt="aboutMeHeader"></Image></div>
                <div>profile pic</div>
            </div>
            <div className="text-center w-1/2">
                <div className={`${styles.details} bg-[#FFFFFF]/[.10] drop-shadow-[30px_20px_15px_rgba(0,0,0,1)] mb-8 px-8 md:py-10 py-8 md:py-10 border-solid border-[3.5px] border-[#020202] backdrop-brightness-110 backdrop-blur-xl md:rounded-3xl`}>
                Hi there! I'm Sriwan, a UI Designer and Front-End Developer originally from Bangkok. I studied visual art at New York Art Studio and later pursued a Web Development degree in Boston. With over 2 years of professional experience, I specialize in creating visually appealing and user-friendly interfaces for digital products, as well as responsive web design and mobile optimization. 
                </div>
                <div><a href="#contact">
                    <RetroButton
                        text="Get in touch"
                        color="bg-[#FFA6FF]" />
                </a></div>
            </div>
        </div>
    )
}