import { ContactSchema } from "@/schema/ContactSchema";

export async function POST(formData:FormData){
    const rawData = Object.fromEntries(formData.entries());
    
    const validatedFields = await ContactSchema.safeParseAsync(rawData);

    const response = await fetch("http://localhost:3000/api/contact", {
        method: "POST",
        body: JSON.stringify(validatedFields.data),
        headers: { "Content-Type": "application/json"}
    })

    const apiResult = await response.json();
    return Response.json(apiResult);
}