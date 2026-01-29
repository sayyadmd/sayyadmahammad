# Developer Portfolio

A production-ready developer portfolio website built with Next.js 15 (Pages Router), Tailwind CSS, and Framer Motion.

## Features

- **Responsive Design**: Mobile-first approach using Tailwind CSS.
- **Dark Mode**: Fully supported using `next-themes`.
- **Smooth Animations**: Powered by `framer-motion`.
- **Contact Form**: Functional form with backend API route and server-side validation.
- **SEO Optimized**: Meta tags and semantic HTML.
- **Clean Architecture**: Separation of concerns with `backend/` logic and `components/` UI.

## Tech Stack

- **Framework**: Next.js 15 (Pages Router)
- **Styling**: Tailwind CSS, PostCSS
- **Icons**: Lucide React
- **Language**: JavaScript

## Getting Started

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/portfolio.git
    cd portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

    Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Deployment

This project is ready to be deployed on Vercel.

1.  Push your code to a GitHub repository.
2.  Import the project into Vercel.
3.  Vercel will detect Next.js and deploy automatically.

## Project Structure

- `pages/`: Application views and API routes.
- `components/`: Reusable UI components.
    - `ui/`: Basic elements.
    - `layout/`: Navbar, Footer, Global Layout.
    - `sections/`: Home page sections (Hero, About, etc.).
- `backend/`: Business logic and services.
- `styles/`: Global CSS and Tailwind configuration.
