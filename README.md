# Minimal E-commerce App

## Features
- Signup / Login (NextAuth.js with custom logic)
- Product listing (one static product)
- Razorpay payment integration (sandbox)
- Order confirmation via email
- Containerized using Docker (app + MySQL)

## Getting Started

### 1. Clone and Setup
```bash
git clone https://github.com/your-username/ecommerce-app.git
cd ecommerce-app
cp .env.example .env
```

### 2. Run with Docker
```bash
docker-compose up --build
```

### 3. Seed DB (if needed)
```bash
docker exec -it ecommerce-app-app-1 npx prisma migrate dev --name init
docker exec -it ecommerce-app-app-1 npx prisma db seed
```

## Notes
- Razorpay: use sandbox mode
- Email: works with SMTP (Gmail, SendGrid, etc.)

## License
MIT
