# MERN Stack Book Store Project

This project is a **full-stack web application** built using the **MERN** stack (MongoDB, Express.js, React.js, Node.js) for managing a book store. It allows users to view, add, edit, delete, and view detailed information about books.

## Table of Contents

- [Project Structure](#project-structure)
- [Features](#features)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Frontend Routes](#frontend-routes)
- [User Interface](#user-interface)
- [Detailed Features](#detailed-features)
- [Styling](#styling)
- [Error Handling](#error-handling)
- [Future Enhancements](#future-enhancements)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Support](#support)

---

## Project Structure

This project is divided into two main parts: **Backend** and **Frontend**.

### Backend

The backend is built using **Node.js** and **Express.js**, with **MongoDB** as the database to store book information.

#### Main Files:
- `backend/index.js`: Main server file where the app is initialized.
- `backend/config.js`: Configuration file that includes MongoDB connection URL and server settings.

#### Folders:
- `models`: Contains the Mongoose schema for the `Book` model.
- `routes`: Defines the API routes for book operations (CRUD).

#### Libraries Used:
- `express`: Web framework for building the server.
- `mongoose`: ODM for MongoDB.
- `cors`: Middleware to handle cross-origin requests.
- `nodemon`: Automatically restarts the server during development.

### Frontend

The frontend is built using **React.js** and styled with **Tailwind CSS** for a clean and modern UI.

#### Main Files:
- `src/App.jsx`: Main component with routing setup.
- `src/index.css`: Imports Tailwind CSS for styling.
- `src/main.jsx`: Entry point of the React application.

#### Folders:
- `src/components`: Contains reusable components (e.g., `BackButton`, `Spinner`, etc.).
- `src/pages`: Contains individual page components (e.g., `Home`, `CreateBooks`, `EditBooks`, etc.).

#### Libraries Used:
- `react-router-dom`: Handles routing between pages.
- `axios`: For making HTTP requests to the backend.
- `react-icons`: Provides a set of customizable icons.
- `notistack`: Displays snackbar notifications for user feedback.
- `tailwindcss`: Utility-first CSS framework for styling.

---

## Features

- **View all books**: Display a list of all available books.
- **Add a new book**: Provide a form to input and add new books to the store.
- **Edit book details**: Update the information of an existing book.
- **Delete a book**: Remove a book from the database.
- **View detailed information**: See comprehensive details of each book.

---

## Setup and Installation

Follow these steps to set up and run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mern-bookstore.git
   cd mern-bookstore
   ```

2. **Install dependencies for Backend and Frontend**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd frontend
     npm install
     ```

3. **Set up MongoDB connection**:
   - Create a MongoDB Atlas account and create a new cluster.
   - Update the MongoDB connection string in `backend/config.js` with your MongoDB Atlas URI.

4. **Run the Backend Server**:
   ```bash
   cd backend
   npm start
   ```

5. **Run the Frontend Development Server**:
   ```bash
   cd frontend
   npm start
   ```

The application should now be accessible at `http://localhost:3000` (frontend) and the backend will be running at `http://localhost:5000`.

---

## API Endpoints

- **GET** `/books`: Fetch all books.
- **POST** `/books`: Create a new book.
- **GET** `/books/:id`: Fetch a single book by ID.
- **PUT** `/books/:id`: Update a book by ID.
- **DELETE** `/books/:id`: Delete a book by ID.

---

## Frontend Routes

- `/`: Home page (list of books).
- `/books/create`: Form to create a new book.
- `/books/details/:id`: View details of a specific book.
- `/books/edit/:id`: Form to edit an existing book.
- `/books/delete/:id`: Delete a book (not an individual route but uses confirmation modal).

---

## User Interface

The frontend allows users to view the list of books in two formats:

1. **Table View**: Displays books in a tabular format, showing columns for `Title`, `Author`, `Publish Year`, and `Actions`.
2. **Card View**: Displays books as cards, each containing key details and action buttons (e.g., `Edit`, `Delete`, `View`).

Users can switch between these views using buttons at the top of the home page.

---

## Detailed Features

### Create Book
- Navigate to `/books/create`.
- Fill in the form with book details: `Title`, `Author`, `Publish Year`.
- Click **Save** to add the book to the database.

### Edit Book
- Click the **Edit** icon next to a book.
- Modify the book details in the form.
- Click **Save Changes** to update the book information in the database.

### Delete Book
- Click the **Delete** icon next to a book.
- Confirm deletion in the modal that appears.
- The book will be removed from the database.

### View Book Details
- Click the **View** icon next to a book.
- View all details about the selected book in a dedicated page.

---

## Styling

The project uses **Tailwind CSS** for styling, providing a responsive and modern design. The UI is further enhanced with icons from **react-icons** and provides a consistent experience across different screen sizes.

---

## Error Handling

- The app uses **notistack** for displaying **snackbar notifications** for success and error messages.
- Backend errors are logged to the console and shown to the user via notifications.
- All API requests include proper error handling to manage unexpected issues gracefully.

---

## Future Enhancements

Here are some potential features that can be added in future updates:

1. **User Authentication**: Add user login/signup functionality with JWT-based authentication and role management.
2. **Search and Filter**: Implement search and filter options for books based on categories, title, author, etc.
3. **Pagination**: Implement pagination for large datasets of books to improve performance.
4. **Book Cover Image Upload**: Add an image upload feature for book covers.
5. **External API Integration**: Integrate with external book APIs (e.g., Google Books API) to fetch more book details.

---

## Deployment

Follow these steps to deploy the application:

1. **Deploy the Backend**:
   - Set up a **MongoDB Atlas** account and create a new cluster.
   - Update the MongoDB connection string in `backend/config.js`.
   - Deploy the backend to a platform like **Heroku** or **DigitalOcean**.

2. **Deploy the Frontend**:
   - Deploy the frontend to a static hosting service like **Netlify** or **Vercel**.

3. **Update API Base URL**:
   - Ensure the frontend’s API calls point to the deployed backend URL.

---

## Troubleshooting

Here are some common issues and solutions:

- **Frontend can't connect to the backend**: 
   - Verify the **API base URL** in the frontend and ensure **CORS** is correctly configured in the backend.
   
- **Database connection issues**: 
   - Check your **MongoDB connection string** and ensure network settings are correct, especially if using MongoDB Atlas.

---