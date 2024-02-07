import nodemailer, { TransportOptions  } from "nodemailer";
import { SMTP_HOST, SMTP_PORT, SMTP_EMAIL, SMTP_PASSWORD } from "../../environments/env";
import { CustomTransportOptions } from "../interfaces/CustomTransportOptions ";

export const setConfigMailer = async() => {

    const transporterConfig: CustomTransportOptions  = {
        host: String(SMTP_HOST),
        port: Number(SMTP_PORT),
        secure: true,
        auth: {
            user: String(SMTP_EMAIL),
            pass: String(SMTP_PASSWORD),
        },
        tls: {
            ciphers:'SSLv3'
        },
        requireTLS: true
    };


    return nodemailer.createTransport(transporterConfig);
}