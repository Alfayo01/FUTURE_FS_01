"use client"
import Image from "next/image"
import { Suspense, useEffect, ViewTransition } from "react";
import CardSkeleton from "./CardSkeleton";

export interface Picture {
    src: string;
    width: number;
    height: number;
    alt: string;
    children?: React.ReactNode;
    
}


export default function Card({ src, width, height, alt, children}:Picture){
    
    return (
        <ViewTransition enter='auto'>
            <div className="cursor-pointer bg-white text-amber-800 font-bold px-2 py-2 mx-2 my-3 min-w-9 min-h-9 line-clamp-30 outline outline-offset-2 hover:shadow-md/20 w-48 rounded-lg box-shadow">
            
                <Image src={src} width={width} height={height} alt={alt}/>
                {children}
            
            </div>
        </ViewTransition>
    )
}


