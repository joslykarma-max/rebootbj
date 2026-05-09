import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BYPASS = ['/bientot', '/api/', '/_next/', '/favicon', '/images/', '/Destinations/']

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (BYPASS.some(p => pathname.startsWith(p))) return NextResponse.next()
  return NextResponse.redirect(new URL('/bientot', req.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
