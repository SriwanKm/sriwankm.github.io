import Image from "next/image"
import logoTypoHeader from "../public/logo_typo_header.png"
import DetailsBox from "./DetailsBox"
import RetroButton from "./RetroButton"
import typography from "../public/majestic1.png"
import aluaLogo from "../public/alua.png"

export default function LogoTypo() {
    return (
        <div id="logoTypo" className="mx-5 md:mx-10 mt-12 md:mt-32">
            
            <Image className="md:w-11/12 lg:w-7/12 mx-auto" src={logoTypoHeader} alt="logoTypographyHeader"></Image>
           
            <div className="block md:flex justify-center items-center">
                <Image className="w-1/2 md:w-4/12 lg:w-1/5 mx-auto md:mx-0" src={aluaLogo} alt="aluaLogo"></Image>
                <Image className="w-10/12 md:w-7/12 lg:w-5/12 h-1/4 mx-auto md:mx-0" src={typography} alt="typography"></Image>
            </div>
            <DetailsBox
                text="I create striking and memorable visual identities. Whether it’s designing a new logo or creating a custom font, I’m passionate about delivering exceptional quality and value to my clients."
                attribute="md:w-2/3 mx-auto mt-6 md:mt-0"
            />
            <RetroButton
                text="Read more"
                color="bg-[#00AF9B]"
            />

        </div>
    )
}