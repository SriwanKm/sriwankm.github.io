import styles from "../page.module.css"

export default function RetroButton(props: {color: string, text: string}) {
    return (
        <div className={`${styles.retro_button} ${props.color} text-center w-fit md:w-36 px-2 py-1 md:py-2.5 min-w-24 mx-auto border-solid border-2 border-[#020202] rounded-3xl drop-shadow-[-3px_4px_0px_rgba(2,2,2,1)] md:drop-shadow-[-3px_5px_0px_rgba(2,2,2,1)] hover:bg-white`}>{props.text}</div>
    )
}