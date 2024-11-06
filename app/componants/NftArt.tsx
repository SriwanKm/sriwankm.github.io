import Image from "next/image"
import nftHeader from "../public/nft_header.png"
import DetailsBox from "./DetailsBox"
import RetroButton from "./RetroButton"
import nft from "../public/nft.png"

export default function NftArt() {
    return (
        <div id="nft" className="my-24 lg:mt-0 mx-5 md:mx-10">
            <div className="block lg:flex lg:justify-around items-center">
                <div className="lg:w-1/2">
                    <Image className="w-full md:w-3/5 lg:w-11/12 mb-8 mx-auto" src={nftHeader} alt="nftHeader"></Image>
                    <DetailsBox
                        text="I’m passionate about digital art and NFT, and I’m all about bringing art and creativity to the world of blockchain. I specialize in crafting unique and collectible digital assets that are truly one-of-a-kind."
                        attribute="w-full md:w-full mx-auto"
                    />
                </div>
                <div className="lg:w-2/3">
                    <Image className="md:w-7/12 lg:w-8/12 mx-auto lg:pt-20" src={nft} alt="nft"></Image>
                </div>
            </div>
            <div className="relative lg:w-5/12 mt-4 md:mt-6 lg:bottom-32">
                <RetroButton
                    text="Read more"
                    color="bg-[#00AF9B]"
                />
            </div>
        </div>
    )
}