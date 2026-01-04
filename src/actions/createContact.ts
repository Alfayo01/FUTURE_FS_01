"use server"
import {z, ZodError} from 'zod';
import { ContactSchema, FormState } from "../schema/ContactSchema";


export async function createContact(prevData:FormState, formData: FormData) : Promise<FormState>{
 try{
    const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        emailaddress: formData.get("emailaddress"),
        phonenumber: formData.get("phonenumber"),
        message: formData.get("message")
    }

    const validatedFields = await ContactSchema.parseAsync(data);
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

