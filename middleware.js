import { NextResponse } from 'next/server'

export function middleware(request) {
  const token = request.cookies.get('token')?.value
  const role = request.cookies.get('role')?.value
  const path = request.nextUrl.pathname

  // belum login
  if (!token && path !== '/') {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // sudah login tapi ke login
  if (token && path === '/') {
    return NextResponse.redirect(new URL('/todo', request.url))
  }

  // akses todo tapi bukan admin
  if (path.startsWith('/todo') && role !== 'admin') {
    return NextResponse.redirect(new URL('/404', request.url))
  }
  console.log('MIDDLEWARE RUNNING:', request.nextUrl.pathname)
  return NextResponse.next()
}

export const config = {
  matcher: ['/todo', '/todo/:path*', '/'],
}
