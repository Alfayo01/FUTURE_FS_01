import {z, ZodError } from 'zod';
import { ContactSchema, FormState } from "../schema/ContactSchema";
//import { prisma } from '../lib/prisma';
import { revalidatePath } from 'next/cache';
//import { addContacts } from '@/lib/db-services';
import { prisma } from '@/lib/prisma';


export async function createContact(prevData:FormState, formData: FormData) : Promise<FormState>{
    const rawData = Object.fromEntries(formData.entries());

    const validatedFields = await ContactSchema.safeParseAsync(rawData);
    
    /*const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        emailaddress: formData.get("emailaddress"),
        phonenumber: formData.get("phonenumber"),
        message: formData.get("message")
    }*/

    const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify(validatedFields.data),
        headers: { "Content-Type": "application/json"}
        
    })
    const apiResult = await response.json();

         if(!validatedFields.success){

             return {
                message: "Invalid input",
                errors: z.flattenError(validatedFields.error).fieldErrors     
            };
        }
  


    try{ 
        //await addContacts(apiResult);
        await prisma.contact.create({
            data: apiResult.data,
        })
        revalidatePath("/")
        return {
            message: "Form submitted succesfully",
            errors: {}
        };

    } catch (err){
        if(err instanceof ZodError){
            return {
                errors: z.flattenError(err).fieldErrors,
                message: "Invalid input"
            };
       
         }
     return {
        message: "A server error occured", 
        errors:{}
     };

    }

}

