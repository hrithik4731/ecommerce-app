import { NextResponse } from 'next/server';
import prisma from '@/lib/db';

export async function GET() {
  const product = await prisma.product.findFirst();
  return NextResponse.json(product);
}