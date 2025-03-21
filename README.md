# React Vite Tailwind Project

## Overview
This project is a modern web application built with React, Vite, and Tailwind CSS. It provides a fast and efficient development environment with hot module replacement (HMR) and optimized production builds.

## Features
- **React** - A JavaScript library for building user interfaces
- **Vite** - Next generation frontend tooling with lightning-fast HMR
- **Tailwind CSS** - A utility-first CSS framework for rapid UI development
- **ESLint** - Code quality and style checking

## Getting Started

### Prerequisites
- Node.js (v14 or later)
- npm or yarn

### Installation
1. Clone the repository
   ```bash
   git clone <repository-url>
   cd <project-directory>
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Build for Production
```bash
npm run build
# or
yarn build
```

## Available Scripts
- `dev` - Start the development server
- `build` - Build for production
- `preview` - Preview the production build locally
- `lint` - Run ESLint

## Vite Plugin Information
Currently, two official plugins are used:
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Advanced Configuration
If you are developing a production application, consider using TypeScript and enabling type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## License
MIT

## Contact
If you have any questions or feedback, please open an issue on the repository.
