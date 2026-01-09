"use client"

import { useRouter } from "next/navigation";




export default function ContactButton(){

    const router = useRouter();
    return (
        <button className="antialiased px-4 py-4 m-3 min-w-1/4 focus:outline-amber-950 max-w-48 border rounded-full font-extrabold text-2xl text-emerald-200 bg-amber-900 shadow-lg shadow-orange-900/45" onClick={() => router.push("/contact")}>
           Contact Now
        </button>
    )
}