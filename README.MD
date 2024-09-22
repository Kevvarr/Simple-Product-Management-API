# Product Management API

This is a Node.js-based RESTful API built using **Express** and **MongoDB** (via Mongoose) for managing products. The API supports basic CRUD operations (Create, Read, Update, Delete) for products.
**Made for Learning reasons**

## Features

- Fetch all products (GET)
- Create a new product (POST)
- Update a product by ID (PUT)
- Delete a product by ID (DELETE)

## Prerequisites

Make sure you have the following installed:

- Node.js
- MongoDB (you can use MongoDB Atlas or a local MongoDB instance)
- npm (comes with Node.js)
- Postman

## Installation

1. Clone the repository:
    ```
    git clone https://github.com/Kevvarr/myFirstFS.git
    cd myFirstFS
    ```

3. Install the dependencies:
    ```
    npm install
    ```

4. Set up environment variables:

    - Create a .env file in the root directory.
    - Add the following environment variable to the file:
    ```
    MONGO_URI=<Your MongoDB Connection URI>
    ```

5. Start the server:
    ```
    npm run dev
    ```

The server will start at http://localhost:5000.


## Endpoints
1. Get All Products
    - URL: /api/product
    - Method: GET
    - Description: Fetches all products from the database.
2. Create Product
    - URL: /api/product
    - Method: POST
    - Description: Creates a new product.
    - Request Body:
    ```
    {
        "name": "Product name",
        "price": 100,
        "image": "image_url"
    }
    ```
3. Update Product
    - URL: /api/product/:id
    - Method: PUT
    - Description: Updates an existing product by its ID.
    - Request Body:
    ```
    {
      "name": "Updated product name",
      "price": 150,
      "image": "new_image_url"
    }
4. Delete Product
    - URL: /api/product/:id
    - Method: DELETE
    - Description: Deletes a product by its ID.

Project Structure
```
.
├── config
│   └── db.js                # MongoDB connection
├── controllers
│   └── product.controller.js # Product CRUD logic
├── models
│   └── product.model.js      # Product schema/model
├── routes
│   └── product.routes.js     # API routes for products
├── server.js                 # Main application entry point
└── .env                      # Environment variables
```


