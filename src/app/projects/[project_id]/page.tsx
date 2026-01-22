
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects, getProjectById } from "../../../lib/projects";


export default async function ProjectDetailPage({ params }: { params: Promise<{project_id: string }>}){

    const { project_id } = await params;

    const project = await getProjectById(project_id);

    if(!project){
        notFound();
    }
    

    return (
    <>
        <article style={{
            maxWidth: '800px',
            margin: '0 auto'
        }}>
        <h1>{project.name}</h1>   
            <div style={{
                marginTop: '20px'
            }}>
                <p>{project.description}</p>
                <span>{project.tags.flatMap((tag) => <div style={{
                    borderRadius: '12px',
                    backgroundColor: "gray",
                }}>{tag}</div> )}</span>
            </div>
            <Link href="/projects">Back to projects</Link>
        </article>
    </>
    )
}