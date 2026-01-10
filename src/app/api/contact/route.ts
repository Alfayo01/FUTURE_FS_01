import { prisma } from "@/lib/prisma";
import { ContactSchema } from "@/schema/ContactSchema";
//import { addContacts } from "../../../../prisma/seed";
import { NextResponse } from "next/server";

export async function POST(req: Request){
    try {
    const body = await req.json();
    
    const validatedFields = ContactSchema.safeParse(body);

    if(!validatedFields.success){
        return new NextResponse(JSON.stringify({ error: validatedFields.error }))

    }
    /*const newContact = await prisma.contact.create({
        data: new Response(JSON.stringify(validatedFields.data)).json(),
    })//await addContacts(validatedFields.data);
    return NextResponse.json({ newContact }, {status: 201}); */

    } catch(err){
        return new NextResponse("Internal Server Error", { status: 404});
    }
    
}



