import styles from "../page.module.css"

export default function StatusBar(props:any){
    return (
        <div className={`${props.bg_color} sticky top-0 rounded-2xl w-fit px-3 py-1 mx-auto`}>
            <h3 className={`${props.text_color}`}>{props.message}</h3>
        </div>
    )
}