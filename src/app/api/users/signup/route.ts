import { NextRequest, NextResponse } from "next/server";
import connectToDB from "@/utils/connectToDB"
import User from "@/models/user"
import bcrypt from "bcrypt"

export async function POST(request: NextRequest) {
    try {
        await connectToDB();
        const reqBody = await request.json();
        const { username, email, password } = reqBody;

        //Check is the user already exists
        const user = await User.findOne({ email });

        if (user) {
            return NextResponse.json({ error: "User Already Exists" }, { status: 400 });
        }

        //Hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        //Create a new user and save it
        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        const savedUser = await newUser.save();

        return NextResponse.json({
            message: "User created successfully",
            success: true
        })

    } catch (error: any) {
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}