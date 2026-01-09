import { NextRequest, NextResponse } from "next/server";

export const navLinks = [
    { name: "Register", href:"/register" },
    { name: "Login", href:"/login" },
    { name: "Logout", href:"/logout"}
]

export async function middleware(req:NextRequest, res:NextResponse){
    return {
        message: "Welcome to the server",
        status: res.ok
    }
}

