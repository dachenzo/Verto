import { Injectable, Logger } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailService {
    private transporter: nodemailer.Transporter;
    private readonly logger = new Logger(MailService.name);

    constructor() {
        this.transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });
    }

    async sendMailTo(to: string, subject: string, html: string): Promise<void> {
        try {
            const info = await this.transporter.sendMail({
                from: '"No Reply" <noreply@example.com>',
                to,
                subject,
                html,
            });
            this.logger.log(`Message sent: ${info.Message}`);
        } catch (error) {
            this.logger.error('Error sending mail', error);
            throw error;
        }
    }
}
