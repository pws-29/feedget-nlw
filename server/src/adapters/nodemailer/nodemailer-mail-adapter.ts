import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

// Serviço de envio de email
const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "286a767c22f5cb",
    pass: "cf8a3fc1bc2937"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
  async sendMail({ subject, body }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe Feedget <oi@feedget.com>',
      to: 'Pietro Sera <email@email.com>',
      subject,
      html: body,
    });
  };
}