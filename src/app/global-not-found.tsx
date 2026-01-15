"use client"
import Link from "next/link";
import { useEffect } from 'react';

export default function GlobalNotFound({ error }: { error: Error} & { digest?: string }){
    useEffect(() => {
        console.log(error);

    }, [error])
    
    return (
        <html>
            <body>
            <div>
                <h2>{error.message}</h2>
                <Link href="/">Return Home</Link>
            </div>
            </body>
        </html>
    )
}