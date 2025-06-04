# EnterTours

EnterTours is a modern tour management platform built with Next.js, TypeScript, Prisma, and Tailwind CSS. It allows companies to register, manage tours, and provides an admin dashboard for platform management.

## Features

- Company registration and authentication (Google, GitHub, Email)
- Company profile and tour management
- Admin dashboard for user and company management
- Category-based tour browsing
- Responsive UI with Tailwind CSS
- End-to-end testing with Cypress

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-username/toten.git
cd toten
```

### 2. Install dependencies

```bash
npm install
# or
yarn install
# or
pnpm install
```

### 3. Configure environment variables

Copy `.env.example` to `.env` and fill in the required values (database URL, NextAuth secrets, OAuth credentials, email server, etc.).

### 4. Set up the database

Run Prisma migrations to set up your database schema:

```bash
npx prisma migrate dev
```

### 5. Start the development server

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

- [`src/app`](src/app) - Next.js app directory (routes, layouts, pages)
- [`src/components`](src/components) - Reusable UI and form components
- [`src/db`](src/db) - Database  actions
- [`prisma`](prisma) - Prisma schema and migrations
- [`cypress`](cypress) - End-to-end tests

## Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build for production
- `npm run start` - Start the production server
- `npm run lint` - Run ESLint
- `npm run cy:open` - Open Cypress test runner
- `npm run cy:run` - Run Cypress tests headlessly

## Authentication

This project uses [NextAuth.js](https://next-auth.js.org/) with Google, GitHub, and Email providers. See [`authOptions`](src/app/api/auth/[...nextauth]/authOptions.ts) for configuration.

## Testing

End-to-end tests are located in the [`cypress/e2e`](cypress/e2e) folder. To run tests:

```bash
npm run cy:open
```

## Deployment

The easiest way to deploy your Next.js app is with [Vercel](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

See the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contributing

Pull requests and issues are welcome! Please open an issue to discuss your ideas or report bugs.

---

Built with ❤️ using Next.js, Prisma, and Tailwind CSS.
