import styles from "../page.module.css"
export default function DetailsBox(props:any) {
    return (
        <div className={`${styles.details} text-center mx-auto ${props.attribute} bg-[#FFFFFF]/[.10] drop-shadow-[30px_20px_15px_rgba(0,0,0,1)] mb-5 md:mb-8 px-8 md:py-10 py-8 md:py-10 border-solid border-2 border-[#020202] backdrop-brightness-110 backdrop-blur-xl md:rounded-3xl`}>
        {props.text}
        </div>
    )
}