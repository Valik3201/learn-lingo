# Learn Lingo

Learn Lingo is a web application designed to help users learn new languages through interactive lessons and activities. This project leverages the power of Next.js, React, and TypeScript to provide a seamless learning experience.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
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
- Personalized learning dashboard

## Features

- **Next.js Framework**: Server-side rendering, static site generation, and API routes.
- **React**: Component-based architecture for building reusable UI components.
- **TypeScript**: Static typing for enhanced code quality and developer productivity.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Firebase**: Backend services for authentication, database, and storage.

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
