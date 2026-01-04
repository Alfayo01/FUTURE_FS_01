"use client"
import { createContact } from "@/actions/createContact";
import { type FormState } from "@/schema/ContactSchema";
//import { clearPreviewData } from "next/dist/server/api-utils";
import Form from "next/form";
import { useActionState } from "react";

const initialState:FormState = {
            message: "",
            errors:{}
}

export default function ContactForm(){
    const [state, contactAction, isPending]  = useActionState( 
        createContact,
        initialState,
);
    return (
        <Form action={contactAction}>
            <label htmlFor="firstname">First Name:</label>
            <input id="firstname" name="firstname" type="text" value={state.data?.firstname}/>
            {state.errors?.firstname && <p>state.errors.firstname[0]</p>}
            <label htmlFor="firstname">Last Name:</label>
            <input id="lastname" name="lastname" type="text" value={state.data?.lastname}/>
            {state.errors?.lastname && <p>state.errors.lastname[0]</p>}
            <label htmlFor="firstname">First Name:</label>
            <input id="emailaddress" name="emailaddress" type="email" value={state.data?.emailaddress}/>
            {state.errors?.emailaddress && <p>state.errors.emailaddress[0]</p>}
            <label htmlFor="firstname">Phone Number:</label>
            <input id="phonenumber" name="phonenumber" type="tel" value={state.data?.phonenumber}/>
            {state.errors?.phonenumber && <p>state.errors.phonenumber[0]</p>}
            <label htmlFor="firstname">Message:</label>
            <textarea id="firstname" name="message" rows={30} cols={50} value={state.data?.message}></textarea>
            {state.errors?.message && <p>state.errors.message[0]</p>}
            <button type="submit">{isPending ? 'Sending':'Send'}</button>
        </Form>
    )
}