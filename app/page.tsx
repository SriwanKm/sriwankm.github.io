import Image from "next/image";
import styles from "./page.module.css"
import RetroButton from "./componants/RetroButton";
import alua from "./public/alua.png"
import nft1 from "./public/nft1.png"
import BackToTopBtn from "./componants/BackToTopBtn";

export default function Home() {
  return (

    <div>


      <div className="text-center mt-16 md:mt-8">
        <div className={`${styles.anihero} text-5xl md:text-8xl md:mb-2`}>Web Developer</div>
        <div className={`${styles.anihero2}`}>
          <div className={`text-5xl md:text-8xl`}>& UI Designer</div>
        </div>

        <div className={styles.text_bottom}>
          <div className="mt-8 bold text-sm md:text-lg">You Describe, I'll make it happen</div>
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
          <div className={styles.card}></div>
          <div className={styles.card}><Image src={alua} width={250} height={100} alt="alua" /></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}><Image src={nft1} width={325} height={100} alt="nft" /></div>


        </div>
        {/* <!-- Add `aria-hidden` to hide the duplicated cards from screen readers. --> */}
        <div aria-hidden className={styles.group}>
          <div className={styles.card}></div>
          <div className={styles.card}><Image src={alua} width={250} height={100} alt="alua" /></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}><Image src={nft1} width={325} height={100} alt="nft" /></div>

        </div>
      </div>



      <BackToTopBtn />

    </div>
  )
}
