'use server';

import { NodemailerMailOptions, NodemailerMailOptionsSchema } from '@/schema/ContactSchema';
import nodemailer from 'nodemailer';
import z from 'zod';


export async function sendEmail(mailOptions: NodemailerMailOptions){

    const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    service: process.env.SMTP_SERVICE,
    //port: process.env.SMTP_PORT,
    secure: true,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
    },
    debug: true,
    logger: true,
    });


  try{
    const validatedEmailOptions = NodemailerMailOptionsSchema.safeParse(mailOptions);
    const data = validatedEmailOptions.data;
    const info = transporter.sendMail({
        from: data?.from,
        to: data?.to,
        subject: data?.subject,
        text: data?.text,
        html: data?.html,
        cc: data?.cc,
        bcc: data?.bcc,
        replyTo: data?.replyTo,
    });
    await transporter.verify();
    return {
        success: true,
        message: 'Email sent successfully!',
        data: info,
    };
    } catch(err){
        if(err instanceof z.ZodError){
            console.error("Email validation failed:", err.issues);
        }
        else {
            console.error('Email sending failed:', err);
        }
    return {
        success: false,
        message: 'Failed to send email.',
        data: {}
    };
}
};