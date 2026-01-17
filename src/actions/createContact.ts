import {z} from 'zod';
import { ContactSchema, ContactState, FormState } from "../schema/ContactSchema";
import { addContacts } from '@/lib/db-services';
import { sendEmail } from './sendEmail';
//import { prisma } from '@/lib/prisma';
//import { redirect } from 'next/navigation';
//import { revalidatePath } from 'next/cache';


export async function createContact(prevData:FormState, formData: FormData) : Promise<FormState> {
   await new Promise((resolve) => setTimeout(resolve, 1500))
    const rawData = Object.fromEntries(formData.entries());
    /*const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        emailaddress: formData.get("emailaddress"),
        phonenumber: formData.get("phonenumber"),
        message: formData.get("message")
    }*/
    const validatedFields = ContactSchema.safeParse(rawData);
    

    if(!validatedFields.success){
        const formFieldErrors = z.flattenError(validatedFields.error).fieldErrors;
        console.error(formFieldErrors);
        return {
            success: false,
            errors: {
               firstname: formFieldErrors.firstname,
               lastname: formFieldErrors.lastname,
               emailaddress: formFieldErrors.emailaddress,
               phonenumber: formFieldErrors.phonenumber,
               message: formFieldErrors.message,
            },
            message: "Failed to create contact due to validation errors",
        }
    }


    try {
        // Add data to Prisma postgres
        
        await addContacts(validatedFields.data);

        console.log(validatedFields.data);
        
        //redirect('/contact') // Revalidate UI
        
        const { firstname, lastname, emailaddress, message } = validatedFields.data

        /*let formVal = {
            name: `${formData.get('firstname') as string} + ' '+ ${formData.get('lastname') as string}`,
            email: formData.get('emailaddress') as string,
            message: formData.get('message') as string,
        }*/
        let formVal = {
            name: `${firstname} + ' '+ ${lastname}`,
            email: emailaddress,
            message: message,
        }
        const mailOptions = {
        from: formVal.email,
        to: process.env.SMTP_USER as string,
        subject: `New message from ${formVal.name}`,
        text: message,
        html: `
        <h1>Name: ${formVal.name}</h1>     
        <h2>Email: ${formVal.email}</h2>
        <p> <b>Message:</b> ${formVal.message}</p>
        <b>We are open from 8 - 5 pm.</b>`,
        replyTo: formVal.email,
        };
        await sendEmail(mailOptions);
        return {
            success: true,
            message: "Form submitted successfully",
            errors: {},
            
        }

    }catch(err){
        console.error('Database ops failed', err);
            return {
                success: false,
                message: "Database error",
                errors: {}, 
            }
    }
    
}
