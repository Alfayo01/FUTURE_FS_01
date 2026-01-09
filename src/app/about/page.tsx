import Card from "@/components/Card";

const projects = [
    {
        id: 1,
        name: "Cattle Price Prediction using KNN regressor",
        description: "Project Used KNN for unsupervsied ML project top",
        tags: ["SciKit-Learn", "NumPy", "Pandas", "Matplotlib", "SeaBorn"]
    },
    {
        id: 2,
        name: "Experimental mini e-commerce using Spring Boot API and Angular/React",
        description: "Project Used Spring Boot API for backend and React/Angular for frontend",
        tags: ["Hibernate ORM", "Lombok", "JWT", "Angular", "React"]
    }
];

//const getProject = projects.find((project) => project.id === id)
export default function About(){
    return <><h1>Home page is coming soon...</h1>
    <Card src={"/vercel.svg"} width={300} height={500} alt={"Awesome"}>
        <h1>KNN project</h1>
        <p>Ijaku Deli</p>
    </Card>
    </>
}