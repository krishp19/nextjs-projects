import { connectDb } from "@/helper/db";
import { User } from "@/models/user";
import { NextResponse } from "next/server";

connectDb();

export async function GET(request) {
    let users = []
    
    try {
        users = await User.find().select("-password");
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            message: "failed to get users",
            success: false,
        })
    }

    return NextResponse.json(users);
}

export async function POST(request) {
    
    //fetch user detail from request
    const {name,email,password,about,profileURL} = await request.json();
    
    //create user object with user model
    const user = new User({
        name,
        email,
        password,
        about,
        profileURL
    })

    try {
        //save the object to database
        const createdUser = await user.save()
        return NextResponse.json(user,{
            status: 201,
        });

    } catch (error) {
        console.log(error);
        return NextResponse.json({
            message:"failed to create user",
            status: false,
        })
    }
}

export function DELETE(request){
    console.log("delete api called")
    return NextResponse.json({
        message: "delete api called!!",
        status: true,
    },{
        status: 200, 
        statusText:"I love you dude"
    });
}

export function PUT(){

}