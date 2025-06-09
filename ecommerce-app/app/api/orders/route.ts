import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/db';
import { sendOrderConfirmation } from '@/utils/email';

export async function POST(req: NextRequest) {
  const { userId, productId, email } = await req.json();

  await prisma.order.create({
    data: {
      userId,
      productId,
    },
  });

  await sendOrderConfirmation(email);

  return NextResponse.json({ message: 'Order confirmed' });
}