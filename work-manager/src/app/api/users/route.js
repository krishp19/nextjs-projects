import { NextResponse } from "next/server";

export function GET(request) {
    const users = [{
        name: "krish P",
        phone: "213123",
        email: "krish@gmail.com"
    },{
        name: "Ashu Doshu",
        phone: "213123",
        email: "ashu@gmail.com"
    },{
        name: "Anshika Sharma",
        phone: "213123",
        email: "anshu@gmail.com"
    }];

    return NextResponse.json(users);
}

export function POST() {
    
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