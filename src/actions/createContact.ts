"use server"
import { ContactSchema, ContactState } from "../schema/ContactSchema";


/*export interface ContactState {
    message: string | string[],
    errors?: Record<keyof ContactSchema, string | string[]> | null,
    data: {
        firstname: string,
        lastname: string,
        emailaddress: string,
        phonenumber: string,
        message: string,
    }
}
*/


export async function createContact(prevData:any, formData: FormData) {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    const data = {
        firstname: formData.get("firstname"),
        lastname: formData.get("lastname"),
        emailaddress: formData.get("emailaddress"),
        phonenumber: formData.get("phonenumber"),
        message: formData.get("message")
    }

    const validatedFields = ContactSchema.safeParse(data);

    if(!validatedFields.success){
        return {
            message: 'Form was not submitted',
            error: validatedFields.error.flatten().fieldErrors,
            
        };
    }

    const contactData = validatedFields.data;

    return {
        message: "Form submitted succesfully",
        //error: null
    }
}

