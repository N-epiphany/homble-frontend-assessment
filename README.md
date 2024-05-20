# Homble Frontend Assessment Project

Welcome to the repository for the frontend engineer assessment at Homble. This project showcases a React-based application designed to manage products, implementing various frontend tasks and features as per the assessment requirements.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Assessment Tasks Completed](#assessment-tasks-completed)
  - [Task 1: Product Listing Page](#task-1-product-listing-page)
  - [Task 2: Individual Product Details](#task-2-individual-product-details)
  - [Task 3: Code Improvement](#task-3-code-improvement)
  - [Optional Task: Bar Raiser - Dashboard](#optional-task-bar-raiser-dashboard)
- [Project Structure](#project-structure)
- [Additional Notes](#additional-notes)

## Introduction

This repository contains the solution for the Homble frontend engineer assessment. The project leverages React for frontend development, emphasizing functionality, usability, and best practices in React application development.

## Getting Started

### Prerequisites

- Node.js > 18
- npm or yarn

### Installation

1. Clone the repository into your local environment:

   ```bash
   git clone https://github.com/N-epiphany/homble-frontend-assessment
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Assessment Tasks Completed

### Task 1: Product Listing Page

- Fetched product data from `/products` endpoint.
- Implemented sorting by selling price.
- Displayed products in a responsive grid.
- Implemented navigation to individual product pages on tile click.
- Added an "Add Product" modal for creating new products.

### Task 2: Individual Product Details

- Fetched individual product data from `/products/:id`.
- Displayed product information including name, price, description, allergens, and usage instructions.
- Implemented expandable/collapsible sections for description, allergen information, and usage.
- Showed a "Loading…" message while details were loading.

### Task 3: Code Improvement

- Developed custom hooks for fetching data (`useProductDetail`) and (`useProductList`).
- Handled errors with appropriate messages
- Memoized computed values to optimize performance.

### Optional Task: Bar Raiser - Dashboard

- Created a dashboard with a table interface.
- Fetched product list from `/dashboard`.
- Implemented sorting functionality by product ID, selling price, or name.
- Enabled a "Check" button for each row to remove products dynamically.
- Added a search bar supporting "contains" search for product name or ID.

## Project Structure

- **`public/`**: Contains the `index.html` and other static assets.
- **`src/`**: Main source code directory.
  - **`components/`**: Reusable React components.
  - **`components/hooks`**: Reusable React hooks.
  - **`screens/`**: Individual screens/pages of the application.
  - **`screens/stylesheet`**: css files for the screens/pages
  - **`axios.js`**: Configuration for Axios HTTP client.
  - **`AppRouter.jsx`**: Manages routing within the application.

## Additional Notes

- The application is built using Create React App and utilizes Axios for API interactions.
- Focus was placed on functionality and usability rather than aesthetic design.
- Code is structured to be modular and scalable, following React best practices.
- it is also hosted at [vercel](https://homble-frontend-assessment-two.vercel.app/)
- For any issues or questions, please contact bhavya.srivastava1400@gmail.com
