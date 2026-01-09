"use client"
import Link from "next/link";

export default function NotFound({ error }: { error: Error}){
    const response = new Response();
    return (
        <div>
            <h2>{response.status}</h2>
            <p>{error.message}</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}