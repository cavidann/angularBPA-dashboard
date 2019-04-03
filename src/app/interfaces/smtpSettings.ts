export interface SmtpSettings {
    id: string;
    username: string;
    email: string;
    password: string;
    host: string;
    port: string;
    enableSsl: boolean;
    timeout: string;
}