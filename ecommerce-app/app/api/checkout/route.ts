import { NextRequest, NextResponse } from 'next/server';
import Razorpay from 'razorpay';

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID!,
  key_secret: process.env.RAZORPAY_KEY_SECRET!,
});

export async function POST(req: NextRequest) {
  const { productId } = await req.json();

  const options = {
    amount: 49900, // e.g., ₹499.00 in paise
    currency: "INR",
    receipt: `receipt_order_${Date.now()}`,
  };

  const order = await razorpay.orders.create(options);
  return NextResponse.json({ checkoutUrl: `/order-success` }); // Simulated redirect for now
}