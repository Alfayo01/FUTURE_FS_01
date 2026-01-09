import { NextRequest, NextResponse } from "next/server";



export async function middleware(req:NextRequest, res:NextResponse){
    return {
        message: "Welcome to the server",
        status: res.ok
    }
}

