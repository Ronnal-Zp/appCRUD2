import nodemailer from "nodemailer";
import { SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_PASSWORD } from "../../environments/env";
import { CustomTransportOptions } from "../interfaces/CustomTransportOptions ";
import { MailOptionsI } from "../interfaces/MailOptionsI";





export const sendMail = async(options: MailOptionsI) => {

    try {
        const transporterConfig: CustomTransportOptions  = {
            host: String(SMTP_HOST),
            port: Number(SMTP_PORT),
            auth: {
                user: String(SMTP_EMAIL),
                pass: String(SMTP_PASSWORD),
            },
        };
    
        const transport = nodemailer.createTransport(transporterConfig);    



        const info = await transport.sendMail({
            from: "ronn.zp.3@gmail.com",
            to: options.to,
            subject: options.subject,
            text: options.text
        });

        return true;
    } catch (error) {
        return false;
    }
}


