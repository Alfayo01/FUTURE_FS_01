
import Card from "@/components/Card";
import Link from "next/link";
import CardSkeleton from "@/components/CardSkeleton";
import { Suspense } from "react";


async function getProjects(){
    const projects = [
    {
        id: 1,
        name: "Cattle Price Prediction using KNN regressor",
        description: "Project Used KNN for unsupervsied ML project top",
        tags: ["SciKit-Learn", "NumPy", "Pandas", "Matplotlib", "SeaBorn"]
    },
    {
        id: 2,
        name: "Experiemental mini e-commerce using Spring Boot API and Angular/React",
        description: "Project Used Spring Boot API for backend and React/Angular for frontend",
        tags: ["Hibernate ORM", "Lombok", "JWT", "Angular", "React"]
    },
    {
        id: 3,
        name: "AI page rebuild using AI SDK and React",
        description: "Project Used AI SDK for backend and React for frontend",
        tags: ["AI SDK", "Open AI", "OpenAIRouter", "AI Reverse Engineering", "React"]
    },
];
    await new Promise(resolve => setTimeout(resolve, 1000));

    return projects;
}

export default async function Projects() {

    const projects = await getProjects();

     return (
        <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-6xl mx-auto">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900">Projects</h1>
                <p className="text-gray-600 mt-2">Browse and manage all your projects</p>
            </header>
        
        <div className="grid gap-4 grid-cols-3">
        <Suspense fallback={<LoadingSkeletons/>}>
        {projects.flatMap((project) => (
            <Link href={`/projects/${project.id}`} key={project.id}>
            <Card width={200} height={200}>
                <div>
                <h2>{project.name}</h2>
                <p className="mt-2 line-clamp-2">{project.description}</p>
                <span className="px-2 py-1 rounded-full text-xs font-medium">{project.tags.flatMap(tag => <div>{tag}</div>)}</span>
                </div>
             </Card>
             </Link>
            ))
        }
        </Suspense>
        </div>
        </div>
        </div>
    )
} 

function LoadingSkeletons(){
    return (
        <>
        {
            Array.from({ length: 6}).map((_, index) => {
                <CardSkeleton key={index}/>
            })
        }
        </>
    )
}