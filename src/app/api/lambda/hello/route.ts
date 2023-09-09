import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // don't need to specify this
export const dynamic = 'force-dynamic'

export async function GET() {
  return NextResponse.json({ message: "Hello from lambda" });
}