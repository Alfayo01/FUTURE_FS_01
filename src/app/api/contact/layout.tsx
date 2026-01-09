import ContactButton from "@/components/ContactButton";
import React from "react";

export default function ContactLayout({ children }:{ children:React.ReactNode }){
    return (
        <>
        <header><h1>Contact Section</h1></header>
            { children }
         <ContactButton/>
         <footer>All rights reserved</footer>
        </>
    )
}