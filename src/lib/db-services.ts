"use server";
import { cache } from "react";
import { prisma } from "./prisma";
import { ContactState, DeleteContactInput } from "@/schema/ContactSchema";

export async function getContacts() {
    //await new Promise((resolve) => setTimeout(resolve, 2000));

    return await prisma.contact.findMany();
}

export const getContact = cache(async(id: number) => {
    //await new Promise((resolve) => setTimeout(resolve, 1500))
    return await prisma.contact.findUnique({
        where: {id},
    });
})

export async function addContacts(data: ContactState){
    //await new Promise((resolve) => setTimeout(resolve, 2000))
    //{id: string, firstname: string, lastname: string, emailaddress: string, phonenumber: number, message: string}
    //{id, firstname, lastname, emailaddress, phonenumber, message}
    return await prisma.contact.create({
       data: data,
       select: {
        id: true,
        firstname: true,
        lastname: true,
        emailaddress: true,
        phonenumber: true,
        message: true
       }
    })
}

export async function deleteContact(data: DeleteContactInput){
    return await prisma.contact.delete({
        where: { id: data.id },
    });
}




