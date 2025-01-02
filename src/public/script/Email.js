import nodemailer from 'nodemailer'

const trasnport = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port:   465,
    secure: true,
    auth: {
        user :'t3st3codigo@gmail.com',
        pass: 'jzcaxarkrcqltkrn'
    }
})

export function sendEmail(email) {
    if(email.length > 5) {
        trasnport.sendMail({
            from: 'NodeMailer <t3st3codigo@gmail.com>',
            to : email,
            subject: "Estudo de back-end",
            text: "Esse site é um teste utilizando Express.js+Node.js e usando Ejs",
        })
        .then(()=> {
            console.log("Enviado")
        })
        .catch((err)=> {
            console.log(err)
        })
    }
}