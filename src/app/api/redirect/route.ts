import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const to = request.nextUrl.searchParams.get('to');
  if (!to) {
    return NextResponse.json({ error: 'Missing redirect URL' }, { status: 400 });
  }
  return NextResponse.redirect(to);
}
