"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navLinks } from "../lib/routes";


export default function NavBar(){
    const pathName = usePathname();
    return (
     
        <nav className="w-full py-5 flex items-center justify-between">
          <div className="flex items-center gap-8">
          { navLinks.map((link) => {

            const isActive = pathName === link.href || ( pathName.startsWith(link.href) && link.href !== "/" );
            return (
                <Link className={isActive ? "font-bold mr-4" : "text-blue-500 mr-4"} href={link.href} key={link.name}>{link.name}</Link>
            );
          }
        )}

          </div>
        </nav>

    )

}