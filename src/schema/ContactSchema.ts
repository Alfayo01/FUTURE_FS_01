
import { regexes, z } from 'zod';

export const ContactSchema = z.object({
    id: z.uuid(),
    firstname: z.string({error: "Incorrect first name.Try again"}).min(2),
    lastname: z.string({ error: "Incorrect last name.Try again"}).min(2),
    emailaddress: z.email({pattern: regexes.unicodeEmail, error: "Incorrect email address.Try again"}),
    phonenumber: z.coerce.number<number>({error: "Incorrect phone number.Try again"}).max(10),
    message: z.string({error: "Invalid message.Try again"}).max(255)
});

const CreateContactSchema = ContactSchema.omit({
    id: true,
});

export type ContactState = z.infer<typeof CreateContactSchema>

export type FormState = {
    errors?: {[K in keyof ContactState]?: string[]};
    message?: string;
    data?: ContactState;
}

function omit(id: () => { localeError: z.core.$ZodErrorMap; }) {
    throw new Error('Function not implemented.');
}
