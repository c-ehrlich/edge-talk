import { db } from '@/lib/db/init';
import { NextResponse } from 'next/server';

export const runtime = 'nodejs'; // don't need to specify this
export const dynamic = 'force-dynamic'

export async function GET() {
  await db.query.example.findFirst();
  await db.query.example.findFirst();
  await db.query.example.findFirst();

  return NextResponse.json({ message: "Hello from lambda after three DB roundtrips!" });
}