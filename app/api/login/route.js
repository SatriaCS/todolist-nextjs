import { NextResponse } from 'next/server'

export async function POST(request) {
  const { username, password } = await request.json()

  // contoh user
  if (username === 'Nextjs24#' && password === 'Nextjs24#') {
    const response = NextResponse.json({ message: 'Login sukses' })

    response.cookies.set('token', Date.now(), {
      httpOnly: true,
      path: '/',
    })

    response.cookies.set('role', 'admin', {
      httpOnly: true,
      path: '/',
    })

    return response
  }

  return NextResponse.json(
    { message: 'Login gagal' },
    { status: 401 }
  )
}

