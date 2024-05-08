import connectToDB from "@/utils/connectToDB";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    try {
        await connectToDB();
        const reqBody = await request.json();
        const { email, password } = reqBody;



    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}