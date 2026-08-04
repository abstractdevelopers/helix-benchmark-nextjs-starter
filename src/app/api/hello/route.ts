import { type NextRequest } from 'next/server';

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#x27;');
}

export async function GET(request: NextRequest) {
  const name = request.nextUrl.searchParams.get('name') || 'Next.js';
  const html = `<html><body><h1>Hello, ${escapeHtml(name)}!</h1></body></html>`;
  return new Response(html, {
    headers: { 'Content-Type': 'text/html' },
  });
}
