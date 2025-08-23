
# Financial Dashboard

This project is a modern financial dashboard web application built with Next.js, React, and TypeScript. It provides a clean, responsive interface for managing customers, invoices, and revenue data, featuring authentication, data visualization, and advanced UI components.

## Features

- **Next.js App Router**: Utilizes the latest Next.js features for routing and server-side rendering.
- **TypeScript**: Type-safe codebase for reliability and maintainability.
- **Tailwind CSS**: Rapid UI development with utility-first CSS.
- **PostgreSQL Integration**: Connects to a PostgreSQL database for persistent data storage.
- **Authentication**: Secure login system (customizable, NextAuth removed).
- **Dashboard UI**: Includes customer management, invoice tracking, and revenue charts.
- **Responsive Design**: Works seamlessly across devices.
- **Component-Based Architecture**: Reusable React components for scalability.

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- pnpm (or npm/yarn)
- PostgreSQL database

### Installation

1. **Clone the repository:**
	```sh
	git clone https://github.com/brook7G/Financial-dashboard.git
	cd Financial-dashboard
	```
2. **Install dependencies:**
	```sh
	pnpm install
	```
3. **Configure environment variables:**
	- Create a `.env.local` file in the root directory.
	- Add your PostgreSQL connection string:
	  ```env
	  POSTGRES_URL=your_postgres_connection_string
	  ```
4. **Run the development server:**
	```sh
	pnpm dev
	```
	The app will be available at `http://localhost:3000`.

## Project Structure

- `app/` — Main application code (pages, layouts, UI components)
- `app/lib/` — Data access, business logic, type definitions
- `public/` — Static assets (images, favicon)
- `tailwind.config.ts` — Tailwind CSS configuration
- `next.config.ts` — Next.js configuration
- `package.json` — Project dependencies and scripts

## Scripts

- `pnpm dev` — Start development server
- `pnpm build` — Build for production
- `pnpm start` — Start production server
- `pnpm lint` — Run ESLint

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [PostgreSQL](https://www.postgresql.org/)
- [Zod](https://zod.dev/) (validation)
- [Heroicons](https://heroicons.com/) (icons)

## Customization & Extensibility

- Easily extend dashboard features by adding new pages or components in the `app/` directory.
- Replace or enhance authentication logic in `auth.ts` and related files.
- Integrate additional data sources or APIs as needed.

## License

This project is licensed under the MIT License.

## Author

Created by brook7G.
