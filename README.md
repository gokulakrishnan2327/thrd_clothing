# Product Listing Application - README

## Overview

This is a React-based application that allows users to log in, view products, and browse products based on their purchase history. The application loads user, product, and purchase history data from CSV files and displays personalized product listings. The products are sorted into non-purchased and purchased categories, and shown in alphabetical order.

---

## Features

- **User Authentication**: Users can log in with their credentials from a CSV file.
- **Personalized Shopping Experience**: The product list changes based on the user’s purchase history.
- **Product Sorting**: Products are displayed in a logical order: non-purchased products first, followed by purchased products, both alphabetically sorted by product name.
- **Dynamic Content**: The app reads and parses CSV data asynchronously to manage user information, product data, and purchase history.

---

## Technologies Used

- **Frontend**: React.js (Functional components, Hooks)
- **Routing**: React Router v6
- **CSV Parsing**: PapaParse library
- **State Management**: React `useState` and `useEffect`
- **Styling**: Basic CSS for layout and styling

---

## Installation

### Prerequisites

- Node.js (v14 or later)
- npm (Node Package Manager)

### Steps to Run the Application Locally

1. **Clone the repository**:

   ```bash
   git clone https://github.com/gokulakrishnan2327/thrd_clothing.git

   ```

2. **Navigate to the project folder**:

   ```bash
   cd product-listing-app
   ```

3. **Install the required dependencies**:

   ```bash
   npm install
   ```

4. **Run the development server**:

   ```bash
   npm start
   ```

   The application will be accessible at `http://localhost:3000`.

---

## Project Structure

```bash
product-listing-app/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── users.csv
│   │   ├── products.csv
│   │   └── purchase_history.csv
│   ├── components/
│   │   ├── LoginForm.js
│   │   ├── ProductPage.js
│   │   └── ...
│   ├── utils/
│   │   └── csvParser.js
│   ├── App.js
│   ├── index.js
│   ├── styles/
│   │   └── App.css
│   └── ...
└── package.json
```

### Key Files:

- **App.js**: Main component that handles login logic, routes, and product listing.
- **LoginForm.js**: Component for displaying the login form and handling user login.
- **ProductPage.js**: Displays products based on purchase history for the logged-in user.
- **csvParser.js**: Utility function to parse CSV files using PapaParse.
- **users.csv**: CSV file containing user credentials.
- **products.csv**: CSV file with product details (name, category, price, etc.).
- **purchase_history.csv**: CSV file containing user purchase history (product IDs).

---

## How It Works

### 1. **Login Process**

   - The user enters their username and password in the login form.
   - The `handleLogin` function in **App.js** checks if the provided credentials match any user from the `users.csv` file.
   - If the login is successful, the user is redirected to the product listing page; otherwise, an error message is shown.

### 2. **Product Listing**

   - Once logged in, the user is redirected to the product page.
   - The `getProductList` function sorts products based on the user's purchase history:
     - **Non-purchased products** are displayed first.
     - **Purchased products** appear after the non-purchased ones.
   - Both product groups are sorted alphabetically by product name.

### 3. **CSV Parsing**

   - The CSV files (users, products, and purchase history) are parsed using **PapaParse** in **csvParser.js**.
   - The data is asynchronously loaded into the state using React's `useEffect` hook, ensuring that the app always uses up-to-date data.

### 4. **Product Page Layout**

   - Products are displayed in a card format with:
     - Product image
     - Product name
     - Product category
     - Product price
   - A logout button is also available to allow users to log out and return to the login page.

---

## User Interaction Flow

1. **Login Screen**:
   - The user enters their username and password.
   - The login credentials are validated.
   - Upon successful login, the user is redirected to the product page.

2. **Product Page**:
   - Once on the product page, the user can see products sorted based on their purchase history:
     - First, products the user has not purchased.
     - Second, products the user has already purchased.
   - Products are sorted alphabetically by their name in both categories.

3. **Logout**:
   - The user can log out by clicking the "Logout" button on the product page.
   - Logging out returns the user to the login page.

---

## Demo

1. **Login with two different users**:
   - Demonstrate logging in with two users from `users.csv`.
   - Show the differences in product listings for each user based on their unique purchase history.

2. **Invalid login attempt**:
   - Show an example of entering incorrect credentials and receiving an error message.

3. **Product Listing for each user**:
   - Show how products are sorted and displayed differently based on purchase history.

---

## Optional Features to Add

- **Category Filter**: Allow users to filter products by category.
- **Price Filter**: Allow users to filter products by price range.
- **Shopping Cart**: Add functionality for users to add products to a shopping cart and proceed to checkout.
- **Search Bar**: Implement a search bar to allow users to quickly find products by name.

---

## Troubleshooting

- **If the app doesn't load or there are parsing errors**:
  - Ensure that the CSV files (`users.csv`, `products.csv`, and `purchase_history.csv`) are correctly formatted and placed in the `assets/` directory.
  - Check the console for any specific error messages regarding the parsing of CSV data.

---

## Conclusion

This application demonstrates a basic personalized shopping experience, using React for the front-end and PapaParse for CSV parsing. Users can log in, browse products based on their purchase history, and explore how products are sorted and displayed differently for each user. 

Feel free to extend the functionality by adding new features like product filters, a shopping cart, and more!