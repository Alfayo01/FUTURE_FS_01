"use client"
import { createContact } from "@/actions/createContact";
import { type FormState } from "@/schema/ContactSchema";
import Form from "next/form";
import { useActionState } from "react";
import { useFormStatus } from "react-dom";

function SubmitButton(){
    const {pending} = useFormStatus();
    return (
            <button type="submit" disabled={ pending } className="outline-2 focus:outline-black bg-amber-900 text-amber-50 font-semibold rounded-sm w-full p-3 shadow-lg shadow-amber-900/50">{pending ? 'Sending':'Send'}</button>
    )
}
const initialState:FormState = {
            message: "",
            errors:{}
}


export default function ContactForm(){

    const [state, contactAction] = useActionState( 
        createContact,
        initialState,
);
    return (
        <Form action={contactAction} className="shadow-md/30 text-black flex flex-col w-96 px-6 py-8 m-auto rounded-2xl outline-2 outline-black bg-white">
            <h1 className="text-2xl font-semibold-semi-expanded text-center mb-3">Contact Form</h1>
            <label htmlFor="firstname">First Name:</label>
            <input id="firstname" name="firstname" type="text" value={state.data?.firstname}/>
            {state.errors?.firstname && <p>state.errors.firstname[0]</p>}
            <label htmlFor="firstname">Last Name:</label>
            <input id="lastname" name="lastname" type="text" value={state.data?.lastname}/>
            {state.errors?.lastname && <p>state.errors.lastname[0]</p>}
            <label htmlFor="emailaddress">Email Address:</label>
            <input id="emailaddress" name="emailaddress" type="email" value={state.data?.emailaddress}/>
            {state.errors?.emailaddress && <p>state.errors.emailaddress[0]</p>}
            <label htmlFor="firstname">Phone Number:</label>
            <input id="phonenumber" name="phonenumber" type="tel" value={state.data?.phonenumber}/>
            {state.errors?.phonenumber && <p>state.errors.phonenumber[0]</p>}
            <label htmlFor="firstname">Message:</label>
            <textarea id="firstname" name="message" rows={30} cols={50} value={state.data?.message}></textarea>
            {state.errors?.message && <p>state.errors.message[0]</p>}
            <SubmitButton/>
        </Form>
    )
}