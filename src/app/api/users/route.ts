import { NextRequest, NextResponse } from "next/server";
import connectDB from "../../../../lib/db";
import User from "../../../../models/usersModel";

interface RequestBody {
    name: string;
    email: string;
    age: number;
}

export async function GET(req: NextRequest, res: NextResponse) {
    await connectDB();

    return NextResponse.json({
        message: "Hello World",
    });
}

export async function POST(req: NextRequest, res: NextResponse) {
    await connectDB();
    const requestBody = (await req.json()) as RequestBody;
    const { name, email, age } = requestBody;

    const UserData = await User.create({ name, email, age });
    if (!UserData) {
        return NextResponse.json({ message: "Error" });
    }

    return NextResponse.json({ message: "Success", data: UserData });
}
