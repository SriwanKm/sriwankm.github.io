import Image from "next/image"
import getInTouchHeader from "../public/getintouch_head.png"
import phone from "../public/phone.png"
import ig from "../public/instagram.png"
import linkedin from "../public/linkedin.png"
import gmail from "../public/gmail.png"
import styles from "../page.module.css"
import resumeIcon from "../public/resume.png"
import githubIcon from "../public/github.png"

export default function ContactSection() {
    return (
        <div id="contact" className={`${styles.details} md:mb-20`}>
            <Image className="w-11/12 md:w-10/12 lg:w-6/12 mx-auto mb-8" src={getInTouchHeader} alt="getInTouch"></Image>

            <div className="bg-[#FFFFFF]/[.10] drop-shadow-[30px_20px_15px_rgba(0,0,0,0.3)] py-8 lg:py-16 md:pt-10 backdrop-brightness-110 backdrop-blur-xl lg:w-full mx-auto flex flex-col md:items-center">


                <div className="block md:flex justify-center items-end mb-5">
                    <div className="mx-10 lg:mx-32 mb-12 md:mb-0">
                        <a target="_blank" href="mailto:sriwan.km@gmail.com"><div className="flex items-center mb-12 hover:underline w-fit"> <Image className="w-8 mx-3" src={gmail} alt="gmail"></Image><p className="text-center">sriwan.km@gmail.com</p></div></a>
                        <a target="_blank" href="https://www.linkedin.com/in/sriwan-khaomuang" className="block w-fit"><div className="flex items-center hover:underline w-fit"><Image className="w-8 mx-3" src={linkedin} alt="linkedin"></Image> <p>Linkedin</p></div></a>
                        <a target="_blank" href="https://drive.google.com/file/d/1YRHD3nwLoQnzjDJtedzrB2XPJGDN2AkW/view?usp=sharing" className="block w-fit"><div className="flex items-center mt-12 hover:underline w-fit"><Image className="w-9 mx-2" src={resumeIcon} alt="resume"></Image> <p>Resume</p></div></a>

                    </div>
                    <div className="mx-10 lg:mx-32">
                        <div className="flex items-center"><Image className="w-7 mx-3" src={phone} alt="phone"></Image> <p>929 224 2141</p></div>
                        <a target="_blank" href="https://github.com/SriwanKm" className="block w-fit"><div className="flex items-center mt-12 hover:underline w-fit"><Image className="w-8 mx-3" src={githubIcon} alt="github"></Image> <p>Github</p></div></a>
                        <a target="_blank" href="https://www.instagram.com/whatthebrain_nft" className="block w-fit"><div className="flex items-center mt-12 hover:underline w-fit"><Image className="w-8 mx-3" src={ig} alt="instagram"></Image> <p>Instagram</p></div></a>

                    </div>
                </div>
            </div>
        </div>
    )
}