import {z} from 'zod';
import { ContactSchema, ContactState, FormState } from "../schema/ContactSchema";
import { addContacts } from '@/lib/db-services';
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

        return {
            success: true,
            message: "Form submitted successfully",
            errors: {},
            
        }
    }catch(err){
        //console.error('Database ops failed', err);
            return {
                success: false,
                message: "Database error",
                errors: {}, 
            }
    }
    
}
