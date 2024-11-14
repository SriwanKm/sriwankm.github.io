import Image from "next/image"
import uiHeader from "../public/ui_design.png"
import ganjaApp from "../public/ganja_app.png"
import DetailsBox from "./DetailsBox"
import RetroButton from "./RetroButton"
import pollyApp from "../public/group_85.png"



export default function UiDesign() {
    return (
        <div className="mb-24" id="ui-design">
            <div><Image className="w-3/4 md:w-1/2 lg:w-4/12 mx-auto my-7" src={uiHeader} alt="uiHeader"></Image></div>

            <div className="my-6 lg:mx-10 lg:flex">
                <Image className="mx-auto mb-6 lg:mb-0 rounded-3xl w-11/12 lg:w-5/12 order-solid border-2 border-[#020202]" src={pollyApp} alt="pollyApp"></Image>
                <Image className="mx-auto rounded-3xl w-11/12 lg:w-5/12 order-solid border-2 border-[#020202]" src={ganjaApp} alt="ganjaApp"></Image>

            </div>
            {/* <div className="block lg:flex mb-24" id="ui-design"> */}

                <div className="mx-auto w-full lg:w-11/12 flex flex-col justify-start">

                    <div className="mt-2">
                        <DetailsBox
                            text="I specialize in creating beautiful and functional digital experiences that are user-friendly and intuitive using various design tools, such as XD, and Figma, and I am well-versed in creating wireframes, prototypes, and high-fidelity mockups."
                            attribute="w-11/12 lg:w-8/12 mx-auto"
                        />
                        <RetroButton
                            text="Read more"
                            color="bg-[#00AF9B]"
                        />
                    </div>

                </div>
                

            {/* </div> */}
        </div>
    )
}