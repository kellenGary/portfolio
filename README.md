# Kellen Gary - Portfolio Website

A modern, responsive personal portfolio website built with SvelteKit and TailwindCSS.

## 🚀 Live Demo

Visit the live site at [kellengary.com](https://kellengary.com)

## 📋 Project Overview

This portfolio website showcases my professional work, skills, and contact information. It's built as a static site using SvelteKit and uses modern web technologies to ensure fast performance and responsive design.

### 🛠️ Technology Stack

- **Framework**: [SvelteKit](https://kit.svelte.dev/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **Deployment**: Docker with Nginx
- **CI/CD**: GitHub Actions
- **Build Tool**: Vite

## 🔧 Development Setup

### Prerequisites

- Node.js (v18 or later)
- npm or yarn

### Local Development

1. Clone the repository
   ```bash
   git clone https://github.com/YourUsername/portfolio.git
   cd portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## 🏗️ Building for Production

```bash
npm run build
```

This will create a static build in the `build` directory.

## 🐳 Docker Deployment

This project includes a Dockerfile for containerized deployment:

1. Build the Docker image:
   ```bash
   docker build -t portfolio .
   ```

2. Run the Docker container:
   ```bash
   docker run -p 80:80 portfolio
   ```

## 📁 Project Structure

```
/
├── src/              # Source code
│   ├── routes/       # SvelteKit routes
│   ├── lib/          # Shared components and utilities
│   └── app.html      # HTML template
├── static/           # Static assets (images, PDFs, etc.)
├── build/            # Production build output
├── Dockerfile        # Docker configuration
└── nginx.conf        # Nginx configuration for Docker
```

## 🧩 Features

- Responsive design that works on all devices
- Fast performance with static site generation
- Docker containerization for easy deployment
- CI/CD pipeline with GitHub Actions


