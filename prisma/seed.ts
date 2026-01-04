import { PrismaClient, Prisma } from "../app/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg"
import 'dotenv/config'
import { ContactCreateInput } from "../app/generated/prisma/models";

const adapter = new PrismaPg({
    connectionString: process.env.DATABASE_URL,
});

/*const omitConfig = {
    contact: { id: true }
} as const;*/

const prisma = new PrismaClient({
    adapter,
    /*omit: omitConfig*/
});


 
const contactData: Prisma.ContactCreateInput[] = [
{
    id: 1,
    firstname: "Okuku",
    lastname: "Deli",
    emailaddress: "okukudeli@gov.kido",
    phonenumber: 2346785910,
    message: "need a medical clinic website asap can we talk",

},
{
    id: 2,
    firstname: "Franco",
    lastname: "Lwambo",
    emailaddress: "francolwambo@gov.kido",
    phonenumber: 2367785910,
    message: "need a medical clinic website asap can we talk",
   
}
]

export async function main() {
    for(const c of contactData){
        await prisma.contact.create({ data: c
        });
    }
}

main().then(async () => {
    await prisma.$disconnect()
})
.catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
});
