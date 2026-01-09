import { ContactSchema, ContactState, FormState } from "@/schema/ContactSchema";
import { NextRequest } from "next/server";

export async function GET(req: NextRequest){
    return new Response(
        "Data submitted successfully"
    )
}

export async function POST(req: NextRequest, formData:ContactState){
    /*const contactData = Object.fromEntries(formData.entries());
    const apiResult = await ContactSchema.safeParseAsync(contactData);*/

    return new Response("Form Submitted succesfully");
}