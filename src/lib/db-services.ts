"use server";
import { cache } from "react";
import { prisma } from "./prisma";
import { ContactState } from "@/schema/ContactSchema";
import { Prisma } from "@prisma/client/extension";

export async function getContacts() {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    await prisma.contact.findMany();
}

/*export const getContact = cache(async (id: string) => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return prisma.contact.findUnique({
        where: {id},
    });
})

export async function addContacts(data: ContactState){
    //await new Promise((resolve) => setTimeout(resolve, 2000))
    //{id: string, firstname: string, lastname: string, emailaddress: string, phonenumber: number, message: string}
    //{id, firstname, lastname, emailaddress, phonenumber, message}
    return await prisma.contact.create({
       data, //{ firstname: data.firstname, lastname: data.lastname, emailaddress: data.emailaddress, phonenumber: data.phonenumber, message: data.message},
    })

}
*/



