# Learn Lingo

Learn Lingo is a web application designed to help users learn new languages through interactive lessons and activities. This project leverages the power of Next.js, React, and TypeScript to provide a seamless learning experience.

![Next.js Badge](https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat)
![React Badge](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat)
![TypeScript Badge](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=fff&style=flat)
![Tailwind CSS Badge](https://img.shields.io/badge/Tailwind%20CSS-06B6D4?logo=tailwindcss&logoColor=fff&style=flat)
![Firebase Badge](https://img.shields.io/badge/Firebase-DD2C00?logo=firebase&logoColor=fff&style=flat)
![Vercel Badge](https://img.shields.io/badge/Vercel-000?logo=vercel&logoColor=fff&style=flat)

[![screenshot](https://github.com/Valik3201/learn-lingo/blob/main/public/screenshot-1.png)](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-1.png)

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [State Management with Zustand](#state-management-with-zustand)
- [Configuration](#configuration)
- [Contributing](#contributing)
- [Contact](#contact)

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/valik3201/learn-lingo.git
   cd learn-lingo
   ```

2. **Install dependencies:**

   Ensure you have Node.js installed. Then, run:

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Rename the `.env.local.example` file to `.env.local` and update the environment variables as needed.

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

Once the development server is running, you can start exploring the application. The main features include:

- Interactive language lessons
- Progress tracking
- User authentication (sign up, log in, log out)

[![screenshot](https://github.com/Valik3201/learn-lingo/blob/main/public/screenshot-2.png)](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-2.png)

## Features

- **Next.js Framework**: Server-side rendering, static site generation, and API routes.
- **React**: Component-based architecture for building reusable UI components.
- **TypeScript**: Static typing for enhanced code quality and developer productivity.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Firebase**: Backend services for authentication, database, and storage.

## State Management with Zustand

Learn Lingo uses Zustand for efficient and straightforward state management. Zustand provides a minimalistic API to create global state stores, making it easier to manage the state across the application.

### Key Stores

- **Auth Store (`useAuthStore.ts`):** Manages the authentication state, including user information and authentication status.
- **Favorites Store (`useFavoritesStore.ts`):** Handles the state related to users’ favorite teachers or lessons.
- **Teachers Store (`useTeachersStore.ts`):** Manages the list of available teachers, including filtering and sorting.

### Why Zustand?

Zustand is chosen for its simplicity and flexibility. It allows us to create easily maintainable state logic without the boilerplate often associated with other state management solutions. It also supports asynchronous actions and provides a clean API for interacting with the global state.

## Configuration

### Environment Variables

The application uses environment variables for configuration. These should be defined in the `.env.local` file:

- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### Scripts

- `npm run dev`: Run the development server.
- `npm run build`: Build the application for production.
- `npm start`: Start the production server.
- `npm run lint`: Run ESLint to lint the codebase.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/your-feature`).
6. Open a pull request.

## Contact

For questions, suggestions, or issues, please contact [valik3201@gmail.com].

[![Gmail Badge](https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat)](mailto:valik3201@gmail.com)
[![LinkedIn Badge](https://img.shields.io/badge/LinkedIn-0A66C2?logo=linkedin&logoColor=fff&style=flat)](https://www.linkedin.com/in/valentynchernetskyi/)

[![screenshot](https://github.com/Valik3201/learn-lingo/blob/main/public/screenshot-3.png)](https://github.com/Valik3201/nextjs-schedule-generator/blob/main/assets/screenshot-3.png)
