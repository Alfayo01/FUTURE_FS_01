"use client"
import Image from "next/image"
import { Suspense, useEffect, ViewTransition } from "react";

export interface Picture {
    src: string;
    width: number;
    height: number;
    alt: string;
    children?: React.ReactNode;
    
}


export default function Card({ src, width, height, alt, children}:Picture){
    
    return (
        <ViewTransition>
            <Suspense fallback={
                <CardSkeleton width={width} height={height}/>
            }>
            
            <div className="bg-white text-amber-800 font-bold px-2 py-2 mx-2 my-3 min-w-9 min-h-9 line-clamp-30 outline outline-offset-2 shadow-md/20 w-48 rounded-lg box-shadow">
            
                <Image src={src} width={width} height={height} alt={alt}/>
                {children}
            
            </div>
            </Suspense>
        </ViewTransition>
    )
}

const CardSkeleton = ({ width, height}:Pick<Picture, 'width' | 'height'>) => {
    useEffect(() => {
     new Promise((resolve) => setTimeout(resolve, 3000))
    },[])
    return (
                <div style={{
                    width: width,
                    height: height,
                }} className="backdrop-blur-2xl grayscale-25 bg-amber-50 py-2 px-2 m-auto">
                    <p className="text-center text-2xl text-gray-600">Coming soon...</p>
                </div> 
)
};
