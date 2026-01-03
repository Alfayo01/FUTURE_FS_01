"use client"
import { createContact } from "@/actions/createContact";
import { type ContactState } from "@/schema/ContactSchema";
import { clearPreviewData } from "next/dist/server/api-utils";
import Form from "next/form";
import { useActionState } from "react";

const initialState:ContactState = {
            firstname: "",
            lastname: "",
            emailaddress: "",
            phonenumber: Number(),
            message: "",
}

export default function ContactForm(){
    const [state, contactAction, isPending]  = useActionState<ContactState>( 
        createContact,
        initialState,
)
    return (
        <Form action={contactAction}>
            <label htmlFor="firstname">First Name:</label>
            <input id="firstname" name="firstname" type="text" value={state.firstname}/>
            <label htmlFor="firstname">Last Name:</label>
            <input id="lastname" name="lastname" type="text" value={state.lastname}/>
            <label htmlFor="firstname">First Name:</label>
            <input id="emailaddress" name="emailaddress" type="email" value={state.emailaddress}/>
            <label htmlFor="firstname">Phone Number:</label>
            <input id="phonenumber" name="phonenumber" type="tel" value={state.phonenumber}/>
            <label htmlFor="firstname">Message:</label>
            <textarea id="firstname" name="message" rows={30} cols={50} value={state.message}></textarea>
            <button type="submit">{isPending ? 'Sending':'Send'}</button>
        </Form>
    )
}