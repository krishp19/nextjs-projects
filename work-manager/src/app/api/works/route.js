import { connectDb } from "@/helper/db";
import { NextResponse } from "next/server";
import { Work } from "@/models/work";

connectDb();

export async function GET(request) {
    let works = []
    
    try {
        works = await Work.find();
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to get users",
            success: false,
        })
    }

    return NextResponse.json(works);
}

export async function POST(request) {
    
    //fetch work detail from request
    const {title,description,userId } = await request.json();
    
    //create work object with user model
    try {
        const work = new Work({
            title,
            description,
            userId
        })
        const createdWork = await work.save()
        return NextResponse.json(createdWork,{
            status: 201,
        });
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to create work",
            success: false,
        })
    }
}