import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request) {
    //console.log("middleware executed")
  //return NextResponse.redirect(new URL('/home', request.url))

    const authToken = request.cookies.get("authToken")?.value
    
    if(request.nextUrl.pathname === '/api/login'){
        return 
    }

    const loggedInUserNotAccessPaths = 
        request.nextUrl.pathname === "/login" || 
        request.nextUrl.pathname ==='/signup' 
    
    if (loggedInUserNotAccessPaths) {
        //accessing not secured route
        if(authToken){
            return NextResponse.redirect(new URL('/profile/user', request.url))
        }
    }else{
        //accessing secured route
        if(!authToken){
            return NextResponse.redirect(new URL('/login', request.url))
        }
    }
    
    //console.log(authToken)
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    "/login",
    "/signup",
    "/add-task",
    "/show-task",
    "/profile/:path*",
    "/api/:path*"],
}