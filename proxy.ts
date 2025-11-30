import { NextRequest, NextResponse } from 'next/server'

export const config = {
  matcher: ['/', '/:path*'],
}

export default function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization');

      if (basicAuth) {
        const authValue = basicAuth.split(' ')[1];
        const [user, pwd] = atob(authValue).split(':');

        // Replace with your actual username and password from environment variables
        const validUser = process.env.BASIC_AUTH_USER;
        const validPassword = process.env.BASIC_AUTH_PASSWORD;

        if (user === validUser && pwd === validPassword) {
          return NextResponse.next();
        }
      }

      // Prompt for authentication if not authorized
      return new NextResponse('Authentication Required', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Secure Area"',
        },
      });
}