import Image from "next/image"
import uiHeader from "../public/ui_design.png"
import ganjaApp from "../public/ganja_app.png"
import DetailsBox from "./DetailsBox"
import RetroButton from "./RetroButton"



export default function UiDesign() {
    return (
        <div className="block lg:flex mb-24">

            <div className="w-full lg:w-11/12 flex flex-col justify-evenly">
                <div className="mb-5"><Image className="w-3/4 md:w-1/2 lg:w-11/12 mx-auto" src={uiHeader} alt="uiHeader"></Image></div>

                <div className="">
                    <DetailsBox
                        text="I specialize in creating beautiful and functional digital experiences that are user-friendly and intuitive using various design tools, such as XD, and Figma, and I am well-versed in creating wireframes, prototypes, and high-fidelity mockups."
                        attribute="w-11/12 lg:w-10/12 mx-auto"
                    />
                    <RetroButton
                        text="Read more"
                        color="bg-[#00AF9B]"
                    />
                </div>

            </div>
            <div className="my-6">
                <Image className="mx-auto rounded-3xl w-11/12 order-solid border-2 border-[#020202]" src={ganjaApp} alt="ganjaApp"></Image>
            </div>
        </div>
    )
}