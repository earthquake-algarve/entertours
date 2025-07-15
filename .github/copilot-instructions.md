# Copilot Instructions for Entertours Project

## Project Overview
Entertours is a Next.js 13+ application (App Router) for booking tours and activities, using:
- Next.js App Router with server/client components
- Prisma ORM with custom client path (`src/generated/prisma`)
- Stripe for payments
- NextAuth for authentication
- Tailwind CSS with shadcn/ui components
- Resend for email notifications

## Key Architecture Patterns

### Data Layer
- Prisma client is singleton exported from `src/lib/prisma.ts`
- DB operations are organized by entity in `src/db/*/` (e.g., `src/db/tour/tour.ts`)
- Types with relations use Prisma's generated types:
```typescript
export type TourWithRelations = Prisma.TourGetPayload<{
  include: { category: true, location: true, /* ... */ };
}>;
```

### API Routes & Server Actions
- API routes use Next.js App Router convention (`route.ts`)
- Server actions are marked with 'use server' and live in `_actions` folders
- Stripe webhooks in `src/app/webhooks/stripe/route.ts` handle payment events

### Components Structure
- Reusable UI components in `src/components/ui/`
- Page sections in `src/components/sections/`
- Client components marked with 'use client'
- shadcn/ui components for consistent styling

### Authentication & Authorization
- NextAuth.js with Prisma adapter
- Session handling in `src/app/api/auth/[...nextauth]/`
- Protected routes check session status

### Payment Flow
1. Create PaymentIntent with tour metadata
2. Update PaymentIntent with customer email
3. Webhook handles successful payments
4. Create order record and send confirmation email

## Common Development Tasks

### Database Updates
```bash
# After schema changes:
npx prisma generate  # Updates types in src/generated/prisma
npx prisma db push   # Updates database schema
```

### Environment Setup
Required env vars:
```
DATABASE_URL=
NEXTAUTH_SECRET=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
EMAIL_FROM=
```

## Key Conventions
- Route params used for dynamic data (e.g., `[id]` in tour routes)
- Server components fetch data, client components handle interactivity
- Form handling uses server actions with Next.js App Router patterns
- Error handling includes proper HTTP responses and fallback UIs

## File Structure Highlights
```
src/
  app/              # Next.js App Router pages
    api/            # API routes
    tours/          # Tour-related pages
    stripe/         # Payment-related pages
  components/       # Reusable components
  db/              # Database operations by entity
  lib/             # Shared utilities
  types/           # TypeScript type definitions
prisma/            # Database schema and migrations
```
