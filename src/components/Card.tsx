import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation";

export type Picture = {
    src: string,
    width: number,
    height: number,
    alt: string,
    children?: React.ReactNode,
    params?: Promise<{id: number}>
}

export default async function Card({ src, width, height, alt, children, params }:Picture){

    const id = await params;
    if(!id){
        redirect("/projects")
    }

    return (
        <div className="bg-white text-amber-800 font-bold px-2 mx-2 my-3 min-w-9 min-h-9 line-clamp-30 outline outline-offset-2 shadow-md/20 w-48 rounded-lg">
            <Link href={`/projects/${id}`}>
                <Image src={src} width={width} height={height} alt={alt}/>
            {children}
            </Link>
        </div>
    )
}