import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import { NextResponse, type NextRequest } from 'next/server';


// i forgot path whter is is next/server or only 'next'
// i supposed to be next/server
//yeah you're right

// it is not autocompeitn

// just to see wheater it works or not 
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/home', request.url))
}

// this one also should work gn 
// export default NextAuth(authConfig).auth; // you got this from the docs ?


 
export const config = {
// htnextjs.org/docs/app/building-your-application/routing/middleware#matcher
  matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
  runtime: 'nodejs',
};


// can you forwared me  your dev server
// so i can see the result on my computer 

// yooo ? 

//yeah 



// click on ports next to terminal 
// then enter your port number 
// also make sure to make it public

// give a min ... its asking me to sign in to github
// what about i can send you the net  http://192.168.137.67:3000  <===== this one 

// okay here it is 
 //https://966nc28w-3000.euw.devtunnels.ms/ 

 //????