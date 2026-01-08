import React from "react"


export default function ProjectsLayout({ children} : { children: React.ReactNode}){
    return (
        <>
    <header>Project Section</header>
        { children }
        <footer>
            All rights reserved
        </footer>
        </>
    )
}