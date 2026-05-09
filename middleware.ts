import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

const BYPASS_PREFIXES = ['/bientot', '/api/', '/_next/', '/favicon', '/images/', '/Destinations/']
const STATIC_EXTS = /\.(png|jpg|jpeg|webp|svg|ico|gif|woff2?|ttf|otf|css|js)$/i

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl
  if (BYPASS_PREFIXES.some(p => pathname.startsWith(p))) return NextResponse.next()
  if (STATIC_EXTS.test(pathname)) return NextResponse.next()
  return NextResponse.redirect(new URL('/bientot', req.url))
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
