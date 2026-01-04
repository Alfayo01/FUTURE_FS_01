"use server"
import {z, ZodError} from 'zod';
import { ContactSchema, FormState } from "../schema/ContactSchema";
import { prisma } from '../../lib/prisma';

export async function createContact(prevData:FormState, formData: FormData) : Promise<FormState>{
    const rawData = Object.fromEntries(formData.entries());

    const validatedFields = await ContactSchema.safeParse(rawData);
    try{
    /*const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        emailaddress: formData.get("emailaddress"),
        phonenumber: formData.get("phonenumber"),
        message: formData.get("message")
    }*/

    /*const newContact = await prisma.contact.create({
        data: validatedFields.data,
    })*/

    return {
        message: "Form submitted succesfully",
        errors: {}
    };

 } catch(err){
     if(err instanceof ZodError){
        return {
            message: "Invalid input",
            errors: z.flattenError(err).fieldErrors     
        };
     }
     return {
        message: "A server error occured", 
        errors:{}
     };
 }

}

