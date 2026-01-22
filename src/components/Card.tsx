"use client"

import { ViewTransition } from "react";
import ImageFrame from "./ImageFrame";


export interface Card {
    width: number;
    height: number;
    children?: React.ReactNode;
}


export default function Card({ width, height, children }:Card){
    
    return (
        <ViewTransition enter='auto'>
            <div className="cursor-pointer bg-white text-amber-800 font-bold px-2 py-2 mx-2 my-3 min-w-9 min-h-9 line-clamp-30 outline outline-offset-2 hover:shadow-md/20 w-48 rounded-lg box-shadow">
            
                <ImageFrame src={"/vercel.svg"} width={width} height={height} alt={"project image coming soon.."}/>
                {children}
            
            </div>
        </ViewTransition>
    )
}


