# Next CRUD App

This is a simple CRUD (Create, Read, Update, Delete) application built with Next.js. It allows users to create, read, update, and delete posts. The app includes a navbar, footer, contact page, and reusable modals for creating and deleting posts.

## Live Link

- Next CRUD App - [Live Link](https://next-crud-app-iota.vercel.app)

## Features

- Create a new post
- View all posts
- Edit existing posts
- Delete posts
- Search functionality to filter posts
- Reusable modals for creating and deleting posts

## Technologies Used

- Next.js
- TypeScript
- Tailwind CSS
- Axios
- React Hook Form
- React Modals

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

## Getting Started

Follow these instructions to get the project running locally on your machine.

### 1. Clone the repository

```bash
git clone https://github.com/Md-Mobassher/Next-CRUD-App.git
cd next-crud-app
```

### 2. Install dependencies

Run the following command to install the required dependencies:

```bash
# If you use npm
npm install

# If you use yarn
yarn install
```

### 3. Create environment variables

You need to create an `.env.local` file in the root directory of the project and define the following environment variables:

```bash
# .env.local
API_URL=http://localhost:5000/api
```

Replace `http://localhost:5000/api` with the actual URL of your API backend.

### 4. Run the backend server

Ensure that your backend API server is running. You can run your API with:

```bash
# Navigate to your backend folder and run it
cd backend
npm start
```

Make sure the API server is listening on the same `API_URL` as defined in `.env.local`.

### 5. Run the development server

Run the following command to start the Next.js development server:

```bash
# If you use npm
npm run dev

# If you use yarn
yarn dev
```

Now, open [http://localhost:3000](http://localhost:3000) to view the application in the browser.

## Application Structure

Here’s a brief overview of the key components and how they work:

### 1. **AllPostSection Component**

The `AllPostSection` component displays all posts in a grid. It allows users to:

- Search posts based on their title.
- Open a modal to create a new post.
- Edit existing posts using a modal.
- Delete posts with confirmation through a modal.

### 2. **CreatePostModal Component**

The `CreatePostModal` is a reusable modal that allows users to create or update posts. It uses `react-hook-form` to handle form submissions.

### 3. **DeleteConfirmationModal Component**

The `DeleteConfirmationModal` is a reusable modal that confirms whether the user wants to delete a post. It triggers the `deletePost` API call on confirmation.

### 4. **API Integration**

All API requests for posts (fetching, creating, updating, and deleting) are handled in the `src/services/api.ts` file. Axios is used to send HTTP requests to the backend.

### 5. **Types**

The `src/types.ts` file defines the `Post` type, which is used throughout the application to ensure type safety.

## Scripts

- `dev`: Starts the development server.
- `build`: Builds the project for production.
- `start`: Starts the production server.
- `lint`: Runs ESLint on the project.

## License

This project is licensed under the MIT License.
