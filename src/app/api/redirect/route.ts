import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const to = request.nextUrl.searchParams.get('to');
  if (!to) {
    return NextResponse.json(
      { error: 'Missing redirect URL' },
      { status: 400 }
    );
  }
  // Only allow relative paths to prevent open redirect attacks
  if (!to.startsWith('/')) {
    return NextResponse.json(
      { error: 'Redirect URL must be a relative path' },
      { status: 400 }
    );
  }

  const url = new URL(to, request.nextUrl.origin);
  return NextResponse.redirect(url);
}
