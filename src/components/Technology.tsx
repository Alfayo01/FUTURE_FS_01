
import { proficiencyList } from "@/lib/proficiencyList";
import React from "react";
export default function Technology({children }:{children: React.ReactNode}){
    return (
        <>
        <h1 className="font-bold text-2xl py-2">Technologies used</h1>
        {proficiencyList.map((tech) => {

            return (

                <details key={tech.name}>
                    <summary><strong>{tech.name}</strong></summary>
                    <ul>{tech.tools.flatMap((tool) => {
                        return (
                            <>
                            <li key={tool}>
                        <p key={tool}>{tool}</p>
                            <span>{children}</span>
                            </li>
                            </>
                        )

                    })}</ul>
                </details>
            );
        })
        }
        </>
)}