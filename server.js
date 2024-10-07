const express = require("express")
const router = express.Router()
const nodemailer = require("nodemailer")
const cors = require("cors")

const app = express()
app.use(cors())

app.use(express.json())
app.use("/", router)
app.listen(5001, () => console.log("Server running"))

const contactEmail = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "kcqkoo@gmail.com",
        pass: "yklvamevmdzmnyam"
    }
})

contactEmail.verify((error) => {
    if(error){
        console.log(error)
    } else {
        console.log("Ready to send")
    }
})

router.post("/contact", (req, res) => {
    const name = req.body.name
    const email = req.body.email
    const subject = req.body.subject
    const message = req.body.message

    const mail = {
        from: name,
        to: "kcqkoo@gmail.com",
        subject: subject,
        html: `
        <p>You got a new message from ${name}!</p>

        <p>${message}</p>

        <p>contact email ${email}</p>
        `
    }

    contactEmail.sendMail(mail, (error) => {
        if (error) {
            res.json({status: "Error"})
        } else {
            res.json({status: "Message sent"})

        }
    })
})