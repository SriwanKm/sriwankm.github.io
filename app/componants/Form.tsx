'use client';
import styles from "../page.module.css"
import React, { useState, useRef, useEffect } from "react"
import RetroButton from "./RetroButton";
import StatusBar from "./StatusBar";


export default function Form() {


    const formRef = useRef(null)




    const [formData, setFormData] = useState({
        email: "",
        name: "",
        subject: "",
        message: "",
    })


    const [status, setStatus] = useState({
        messgae: "",
        textColor: "",
        bgColor: "bg-transparent"
    })


    const [buttonStatus, setButtonStatus] = useState("Send")



    function handleForm(event: any) {


        const { name, value } = event.target


        setFormData(prevData => {


            return { ...prevData, [name]: value }
        })

    }




    async function handleSubmit(event: any) {

        event.preventDefault();
        setButtonStatus("Sending...")

        // Validate form data
        if (formData.message === "" || formData.name === "" || formData.subject === "" || formData.email === "") {
            setStatus({
                messgae: "One or more input fields are empty",
                textColor: "text-rose-500",
                bgColor: "bg-zinc-200"
            })
            console.log(formData)

            return; // Exit function if any field is empty
        }


        // Only fetch if all input fields are not empty
        else {
            let response = await fetch("http://localhost:5001/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json;charset=utf-8"
                },
                body: JSON.stringify(formData)
            })

            setButtonStatus("Send")
            let result = await response.json()
            alert(result.status)

            setStatus({
                messgae: "Message sent successfully!",
                textColor: "text-neutral-950",
                bgColor: "bg-zinc-200"
            })
            console.log("Message sent successfully!");
            setFormData({
                email: "",
                name: "",
                subject: "",
                message: ""
            })
            //clearForm(); // Clear form after successful submission
            console.log(formData)



        }

    }



    return (
        <div className="m-auto p-1 w-4/5 md:w-1/2 lg:w-1/3 text-center ">
            <StatusBar
                message={status.messgae}
                text_color={status.textColor}
                bg_color={status.bgColor}
                className={styles.status}
            />


            <form id="getInTouchForm" action="http://localhost:8000" method="POST" onSubmit={handleSubmit}>
                <div>
                    <input className={`${styles.input}`} type="text" name="name" placeholder="Name" value={formData.name} onChange={handleForm} />
                </div>
                <div>
                    <input className={`${styles.input}`} type="email" name="email" placeholder="Email" value={formData.email} onChange={handleForm} />
                </div>
                <div>
                    <input className={styles.input} type="text" name="subject" placeholder="Subject" value={formData.subject} onChange={handleForm} />
                </div>
                <div className="my-4">
                    <textarea className="w-full h-28 p-1.5 rounded-sm" name="message" value={formData.message} onChange={handleForm} placeholder="Message"></textarea>
                </div>
                <button>
                    <RetroButton
                        text="Send"
                        color="bg-gradient-to-r from-[#FFD400] via-[#00FFA6] to-[#A3DEFE]" />
                </button>
                <div className="form-data-powered-by" data-formdata-lang="en" data-formdata-sitename="Super Store" data-formdata-theme="light"></div>
            </form>
        </div>


    )
}

