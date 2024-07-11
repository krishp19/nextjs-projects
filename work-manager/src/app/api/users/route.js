import { NextResponse } from "next/server";

export function GET(request) {
    const users = [{
        name: "krish Prasad",
        phone: "213123",
        email: "krish@gmail.com"
    },{
        name: "Ashu Prasad",
        phone: "213123",
        email: "ashu@gmail.com"
    },{
        name: "Anshika Prasad",
        phone: "213123",
        email: "anshu@gmail.com"
    }];

    return NextResponse.json(users);
}

export async function POST(request) {
    const body = request.body;

    //console.log(body)
    //console.log(request.method)
    //console.log(request.cookies)
    //console.log(request.headers)
    //console.log(request.nextUrl.pathname)

    //const jsonData = await request.json();

    const textData = await request.text();

   // console.log(jsonData)
    console.log(textData)

    return NextResponse.json({
        message: "User created successfully",
    })
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