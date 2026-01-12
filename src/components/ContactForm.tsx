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
            success: false,
            message: "",
            errors: {},
            data: {
                firstname: '',
                lastname: '',
                emailaddress: '',
                phonenumber: '',
                message: '',
            }
}


export default function ContactForm(){

    const [state, contactAction, isPending] = useActionState( 
        createContact,
        initialState
);
    return (
        <Form action={contactAction} className="shadow-md/30 text-black flex flex-col gap-4 sm:max-width-1/2 lg:max-w-4/8 px-6 space-y-6 py-8 m-auto rounded-2xl outline-2 outline-black bg-white">
            <div>
            <h1 className="text-2xl font-semibold-semi-expanded text-center mb-3">Contact Form</h1>
            <label htmlFor="firstname" className="block text-sm font-medium text-black-700">First Name:</label>
            <input id="firstname" name="firstname" type="text" disabled={isPending} defaultValue={state.data?.firstname} className={state?.errors?.firstname ? 'border-500 md:w-full': ''}/>
            {state?.errors?.firstname && (<p className="text-red-500 text-sm">{state.errors.firstname[0]}</p>)}
            </div>
            <div>
            <label htmlFor="firstname" className="block text-sm font-medium text-black-700">Last Name:</label>
            <input id="lastname" name="lastname" type="text" disabled={isPending} defaultValue={state.data?.lastname} className={state?.errors?.lastname ? 'border-500 md:w-full': ''}/>
            {state?.errors?.lastname && (<p className="text-red-500 text-sm">{state.errors.lastname[0]}</p>)}
            </div>
            <div>
            <label htmlFor="emailaddress" className="block text-sm font-medium text-black-700">Email Address:</label>
            <input id="emailaddress" name="emailaddress" type="email" disabled={isPending} defaultValue={ state.data?.emailaddress} className={state?.errors?.emailaddress ? 'border-500 w-full': ''}/>
            {state?.errors?.emailaddress && (<p className="text-red-500 text-sm">{state.errors.emailaddress[0]}</p>)}
            </div>
            <div>
            <label htmlFor="phonenumber" className="block text-sm font-medium text-black-700">Phone Number:</label>
            <input id="phonenumber" name="phonenumber" type="tel" disabled={isPending} placeholder="+1 (455) 000-000" defaultValue={state.data?.phonenumber} className={state?.errors?.phonenumber ? 'border-500 md:w-full': ''}/>
            {state?.errors?.phonenumber && (<p className="text-red-500 text-sm">{state.errors.phonenumber[0]}</p>)}
            </div>
            <div>
            <label htmlFor="message" className="block text-sm font-medium text-black-700">Message:</label>
            <textarea id="message" name="message" rows={20} cols={50} disabled={isPending} defaultValue={state.data?.message} className={state?.errors?.message ? 'border-500 block w-full p-3 rounded-md shadow-sm border focus:ring-indigo-500 focus:border-indigo-500': ''}></textarea>
            {state?.errors?.message && (<p className="text-red-500 text-sm">{state.errors.message[0]}</p>)}
            </div>

            {state?.success && <p className="text-green-600">User created successfully</p>}
            {state?.message && <p className="text-red-600">{state.message
            }</p>}
            <SubmitButton/>
        </Form>
    )
}