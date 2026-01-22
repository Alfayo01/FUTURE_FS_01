export const projects = [
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

export async function getProjectById(id: string | number){
    await new Promise((resolve) => setTimeout(resolve, 2000));
    return projects.find((project) => project.id === id);
}