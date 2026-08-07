import { type NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name') || 'Next.js';
  const html = `<html><body><h1>Hello, ${name}!</h1></body></html>`;
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
