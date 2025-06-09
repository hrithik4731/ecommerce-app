import nodemailer from 'nodemailer';

export const sendOrderConfirmation = async (to: string) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS
    }
  });

  await transporter.sendMail({
    from: process.env.EMAIL_USER,
    to,
    subject: 'Order Confirmation',
    text: 'Thank you for your purchase!'
  });
};