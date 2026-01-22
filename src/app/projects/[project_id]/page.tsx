
import Link from "next/link";
import { notFound } from "next/navigation";
import { getAllProjectIds, getProjectById } from "../../../lib/projects";

export async function generateStaticParams() {
    const projectIds = getAllProjectIds();

    return projectIds.map((id) => ({
        project_id: id,
    }));
}

export async function generateMetadata({ params, }: {
    params: Promise<{ project_id : string}>;
}){
    const { project_id } = await params;
    const project = getProjectById(project_id);

    if(!project){
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.name} | Project Details`,
        description: project.description,
    }
}

export const revalidate = 86400;

interface ProjectDetailPageProps {
    params: Promise<{project_id: string }>;
}

export default async function ProjectDetailPage({ params }:  ProjectDetailPageProps){

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
                <div className="flex gap-1 px-2 mr-auto">{project.tags.flatMap((tag, index) => <span style={{
                    borderRadius: '12px',
                    backgroundColor: "gray",
                    margin: "1rem",
                }} className="px-2" key={index}>{tag}</span> )}</div>
            </div>
            <Link href="/projects">Back to projects</Link>
        </article>
    </>
    )
}