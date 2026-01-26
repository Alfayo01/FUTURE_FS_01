

import React from "react";

export default function ContactLayout({ children }:{ children:React.ReactNode }){
    return (
        <>
        <header><h1 className="font-bold text-3xl">Contact Section</h1></header>
            { children }
         <footer className="font-extrabold text-xs text-center bg-amber-950 px-3 py-6 mt-6 mb-6">2026 All rights reserved</footer>
        </>
    )
}