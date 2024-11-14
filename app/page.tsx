'use client'
import Image from "next/image";
import styles from "./page.module.css"
import RetroButton from "./componants/RetroButton";
import alua from "./public/alua.png"
import nft1 from "./public/nft1.png"
import BackToTopBtn from "./componants/BackToTopBtn";
import AboutMe from "./componants/AboutMe";
import UiDesign from "./componants/UiDesign";
import GraphicDesign from "./componants/GraphicDesign";
import NftArt from "./componants/NftArt";
import LogoTypo from "./componants/LogoTypo";
import ContactSection from "./componants/ContactSection";

export default function Home() {

  return (

    <div className="">

      <div className="text-center mt-16 md:mt-8">
        <div className={`${styles.anihero} text-5xl md:text-8xl mb-2 md:mb-2`}>Web Developer</div>
        <div className={`${styles.anihero2}`}>
          <div className={`text-5xl md:text-8xl`}>& UI Designer</div>
        </div>

        <div className={styles.text_bottom}>
          <div className="mt-8 bold text-sm md:text-lg">You Describe, I&apos;ll make it happen</div>
          <div className="mt-16 md:mt-5">
            <a href="#contact">
              <RetroButton
                text="Get in touch"
                color="bg-gradient-to-r from-[#FFD400] via-[#00FFA6] to-[#A3DEFE]" />
            </a>
          </div>
        </div>
      </div>


      <div className={`${styles.carousel}`}>
        <div className={styles.group}>
        <a href="#ui-design"><div className={`${styles.card} ${styles.c1}`}></div></a>
          <a href="#logoTypo"><div className={`${styles.card} ${styles.c2}`}><Image src={alua} width={250} height={100} alt="alua" /></div></a>
          <a href="#graphic-design"><div className={`${styles.card} ${styles.c3}`}></div></a>
          <a href="#ui-design"><div className={`${styles.card} ${styles.c4}`}></div></a>
          <a href="#nft"><div className={`${styles.card} ${styles.c5}`}><Image src={nft1} width={325} height={100} alt="nft" /></div></a>


        </div>
        {/* <!-- Add `aria-hidden` to hide the duplicated cards from screen readers. --> */}
        <div aria-hidden className={styles.group}>
        <a href="#ui-design"><div className={`${styles.card} ${styles.c1}`}></div></a>
          <a href="#logoTypo"><div className={`${styles.card} ${styles.c2}`}><Image src={alua} width={250} height={100} alt="alua" /></div></a>
          <a href="#graphic-design"><div className={`${styles.card} ${styles.c3}`}></div></a>
          <a href="#ui-design"><div className={`${styles.card} ${styles.c4}`}></div></a>
          <a href="#nft"><div className={`${styles.card} ${styles.c5}`}><Image src={nft1} width={325} height={100} alt="nft" /></div></a>

        </div>
      </div>

      <AboutMe />
      <UiDesign />
      <GraphicDesign />
      <LogoTypo />
      <NftArt />
      <ContactSection />
      <BackToTopBtn />



    </div>
  )
}
