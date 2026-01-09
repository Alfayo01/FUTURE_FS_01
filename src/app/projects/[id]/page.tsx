
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
    }
];
export default async function Projects({ params }: { params: Promise<{projectId: string}>}){

    const project_id = ((await params)).projectId;



    return (
    <>
        <h1>Project {project_id}</h1>
        <p><b>Tune in to view my projects</b></p>
    </>
    )
}