# Product Gallery

A simple product gallery application built using React, where users can add, edit, delete, and search for products. The application uses a JSON server to manage data and Axios for handling API requests.

## Features
- Display products in a grid layout
- Add new products
- Edit product details by clicking on the image
- Delete products
- Search for products by name

## Prerequisites
Ensure you have the following installed:
- Node.js
- npm (Node Package Manager)

## Installation

1. Create a new React app and navigate to the project directory:
   ```sh
   npx create-react-app demo  
   cd demo  
   ```  
2. Install the JSON server globally:
   ```sh
   npm install -g json-server  
   ```  
3. Install Axios for handling API requests:
   ```sh
   npm install axios  
   ```  

## Running the Application

1. Start the JSON server:
   ```sh
   json-server --watch db.json  
   ```  
   The JSON server runs on `http://localhost:3000/` by default.

2. Start the React application:
   ```sh
   npm start  
   ```  
   This will open the application on `http://localhost:3000/`.

## Project Structure

```
demo/
│── public/
│── src/
│   ├── components/
│   │   ├── ProductGallery.js
│   │   ├── ProductForm.js
│   ├── styles.css
│   ├── App.js
│   ├── index.js
│── db.json
│── package.json
│── README.md
│── LICENSE
```

## Explanation of Key Files

### `db.json`
Contains the product details stored as JSON data. This acts as a mock database used by JSON server.

### `src/components/ProductGallery.js`
- Fetches the product list from `db.json` using Axios.
- Displays products in a grid layout.
- Provides edit and delete functionalities.
- Implements search functionality.

### `src/components/ProductForm.js`
- Contains input fields for product name, description, price, and image URL.
- Handles form submission to add new products to the database.

### `src/App.js`
- Serves as the main component.
- Renders the `ProductForm` and `ProductGallery` components.

### `src/index.js`
- Renders the `App` component into the root element of the HTML file.

### `styles.css`
- Defines styling for the product grid, buttons, and form layout.

## API Usage (Axios)
Axios is used to handle API requests with the JSON server:
- `GET` request to fetch products
- `POST` request to add new products
- `PUT` request to update product details
- `DELETE` request to remove a product

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

