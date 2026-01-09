"use client"
import Link from "next/link";


export default function ContactButton(){

    return (
        <button className="focus:outline-amber-950 max-w-24 border rounded-full font-extrabold text-2xl text-emerald-200 bg-amber-900">
           <Link href='/contact'>Contact Now</Link>
        </button>
    )
}