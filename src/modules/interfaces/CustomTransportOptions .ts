import { TransportOptions } from "nodemailer";

export interface CustomTransportOptions extends TransportOptions {
    host: string;
    port: number;
    secure?: boolean;
    auth: {
        user: string;
        pass: string;
    };
    tls?: {
        ciphers: string
    }
    requireTLS?: boolean;
}