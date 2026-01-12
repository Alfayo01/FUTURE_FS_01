
import { regexes, z } from 'zod';

export const ContactSchema = z.object({
    id: z.coerce.number().int().positive(),
    firstname: z.string().min(8, { error: "Incorrect first name.Try again"}),
    lastname: z.string().min(8, { error: "Incorrect last name.Try again"}),
    emailaddress: z.email({pattern: regexes.unicodeEmail, error: "Incorrect email address.Try again"}),
    phonenumber: z.string().min(5, {
        error: "Telephone number is too short"
    }).refine((value) => parsePhoneNumberFromString(value), {
        message: "Invalid telpehone number format"
    }),
    message: z.string().max(255, {error: "Invalid message.Try again"})
});

const CreateContactSchema = ContactSchema.omit({
    id: true,
});

export type ContactState = z.infer<typeof CreateContactSchema>

export type FormState = {
    success: boolean,
    errors?: {[K in keyof ContactState]?: string[]};
    message?: string;
    data?: ContactState;
}

const DeleteContactSchema = ContactSchema.pick({
    id: true,
})

export type DeleteContactInput = z.infer<typeof DeleteContactSchema>;

/*export const zPhoneNumber = z.string().min(5, {
        error: "Telephone number is too short"
    }).refine((value) => parsePhoneNumberFromString(value), {
        message: "Invalid telpehone number format"
    });*/

function parsePhoneNumberFromString(value: string):boolean {
    if(typeof value !== 'string'){
        return false;
    }

    const telephoneRegex = /^\+?(?:[0-9]{1-3})?[\s-.]*\(?[0-9]{1,4}\)?[\s-.]*[0-9]{1-4}[\s-.]*[0-9]{1,9}$/;

    return telephoneRegex.test(value);
}

