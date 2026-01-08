import {z, ZodError} from 'zod';
import { ContactSchema, FormState } from "../schema/ContactSchema";
import { prisma } from '../../lib/prisma';

export async function createContact(prevData:FormState, formData: FormData) : Promise<FormState>{
    "use server";
    const rawData = Object.fromEntries(formData.entries());

    const validatedFields = await ContactSchema.safeParseAsync(rawData);
    try{
    /*const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        emailaddress: formData.get("emailaddress"),
        phonenumber: formData.get("phonenumber"),
        message: formData.get("message")
    }*/

    const response = await fetch("http://localhost:3000/contact", {
        method: "POST",
        body: JSON.stringify(validatedFields.data),
        headers: { "Content-Type": "application/json"}
        
    })

    
    const apiResult = await response.json();
    try {
        await prisma.contact.create({data: apiResult})
        return {
            message: apiResult.success && "Form submitted succesfully",
            errors: {}
        };
    } catch(err) {
        return {
            message: "Database failures",
            errors: apiResult.errors
        }
    }

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

