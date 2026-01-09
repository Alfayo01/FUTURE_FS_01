

export default async function Projects({ params }: { params: Promise<{projectId: string}>}){

    const project_id = ((await params)).projectId;


    return (
    <>
        <h1>Project {project_id}</h1>
        <p><b>Tune in to view my projects</b></p>
    </>
    )
}