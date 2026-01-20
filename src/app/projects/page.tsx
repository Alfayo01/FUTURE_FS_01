"use client"
import Card from "@/components/Card";
import Link from "next/link";
import { projects } from "./projects";


export default function Projects() {

     return (
        <>
        <h1>Projects</h1>
        <div className="grid gap-4 grid-cols-3">
        {projects.flatMap((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
            <Card src={''} width={200} height={200} alt={''}>
                <div>
                <h2>{project.name}</h2>
                <p>{project.description}</p>
                <span>{project.tags.flatMap(tag => <div>{tag}</div>)}</span>
                </div>
             </Card>
             </Link>
            ))
        }
        </div>
        </>
    )
} 