MERN Stack Book Store Project

Project Overview

The Book Store Full MERN Stack project is designed to implement a backend server using the MERN (MongoDB, Express, React, Node.js) stack. This backend provides RESTful API functionality for managing a collection of books, including creating, reading, updating, and deleting books in a MongoDB database.

Backend Structure:

Files and Folders

Main Files

index.jsx:

1. Initializes the Express application.

2. Configures middleware (JSON parsing and CORS).

3. Defines the base route and integrates the booksRoute for book-related operations.

4. Connects to MongoDB using Mongoose.

5. Starts the server.

config.jsx

1. Contains configuration constants:

   PORT: The port number the server listens on.

   mongoDBURL: Connection string for the MongoDB database.

Folders

1. models

bookModel.js: Defines the schema for the Book model using Mongoose, specifying the fields title, author, and publishYear.

2. routes

booksRoute.js: Contains the routes for CRUD operations on books, utilizing the Book model.

Code Highlights

index.jsx

1. Middleware

   express.json(): Parses incoming requests with JSON payloads.

   cors(): Handles Cross-Origin Resource Sharing.

2. Routes

   Base route (/): Returns a welcome message.

   Books route (/books): Delegates book-related operations to booksRoute.

3. Database Connection

   Connects to MongoDB using mongoose.connect() and listens for errors.

bookModel.js

Defines a Mongoose schema with validation for:

  -title (String, required)

  -author (String, required)

  -publishYear (Number, required)

  -Enables timestamps for automatic creation and update time tracking.

booksRoute.js

  -Implements RESTful API endpoints:

  -POST /books: Adds a new book to the database.

    Validates required fields.

    Returns the created book.

  -GET /books: Retrieves all books.

    Responds with a count and a list of books.

  -GET /books/:id: Fetches a single book by ID.

    Returns the book or an error if not found.

  -PUT /books/:id: Updates a book by ID.

    Validates required fields.

    Updates the book and returns a success message or an error if not found.

  -DELETE /books/:id: Deletes a book by ID.

    Returns a success message or an error if not found.

Libraries Used

1. mongoose: Provides a schema-based solution to model application data with MongoDB.

2. mongodb: Native driver for interacting with MongoDB.

3. express: Framework for building the web server and handling HTTP requests.

4. cors: Middleware for enabling Cross-Origin Resource Sharing.

5. nodemon: Development tool for automatically restarting the server on file changes.

Configuration and Setup

1. Install dependencies:

npm install express mongoose mongodb cors nodemon

2. Start the server:

nodemon index.jsx

3. Ensure MongoDB connection string in config.jsx is accurate and the database is accessible.

Functionality

1. Create Book: Adds a book with title, author, and publish year.

2. Retrieve Books:

  -Fetch all books with metadata.

  -Retrieve specific books by ID.

3. Update Book: Modifies details of a book by ID.

4. Delete Book: Removes a book from the collection by ID.

Error Handling

  -Validates required fields in requests and returns appropriate HTTP status codes (e.g., 400 for bad requests, 404 for not found).

  -Logs errors to the console for debugging.

Testing

Use tools like Postman or curl to test API endpoints.

Example: Adding a book via POST /books:

{
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "publishYear": 1925
}

Future Enhancements

1. Add user authentication and authorization.

2. Implement advanced search and filtering.

3. Extend schema with additional fields like genre or ISBN.

