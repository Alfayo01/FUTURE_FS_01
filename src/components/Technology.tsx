import { proficiencyList } from "@/lib/proficiencyList";
import React from "react";
import ProgressBar from "./ProgressBar";


export default function Technology({children }:{children?: React.ReactNode}){
    //const progressVal = proficiencyList.flatMap((tech) => tech.progressValue.map((progVal) => progVal))

    return (
        <>
        <h1 className="font-bold text-2xl py-2">Technologies used</h1>
        {proficiencyList.map((tech, techIndex) => {

            return (

                <details key={techIndex} className="shadow-md/30 outline-2 outline-black font-bold text-black px-3 py-3 m-2 rounded-lg bg-sky-100">
                    <summary><strong>{tech.name}</strong></summary>
                    <ul>{tech.tools.map((tool, toolIndex) => {
                        return (
                            <li key={toolIndex}>
                        <p key={toolIndex}>{tool}</p>
                        
                        
                            <ProgressBar key={tool} value={tech.progressValue[toolIndex]} max={100}>
                                <span className="px-2 text-md font-bold w-12">{tech.progressValue[toolIndex]} %</span>
                            </ProgressBar>
                
                            <span>{children}</span>
                            </li>
                        )
                    })}</ul>
                </details>
            );
        })
        }
        </>
)}