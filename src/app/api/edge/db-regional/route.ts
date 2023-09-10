// src/api/foo/route.ts
import { db } from '@/lib/db/init'; // Drizzle + PlanetScale serverless driver
import { NextResponse } from 'next/server';

export const runtime = 'edge';
export const preferredRegion = 'iad1'; // us-east-1
export const dynamic = 'force-dynamic'

export async function GET() {
  const somethingFromDB = await db.query.example.findFirst();

  return NextResponse.json({ 
    message: "Hello from Regional Edge Runtime!",
    somethingFromDB,
  });
}


 