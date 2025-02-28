Here is the properly structured `README.md` file with all the required details:  

```md
# Product Gallery  

A simple product gallery application built using React, JavaScript, HTML, and CSS. It allows users to add, edit, delete, and search for products. The application uses a JSON server to store product data and Axios for API requests.

## Features  
- Display products in a 3x3 grid  
- Add a new product  
- Edit product details by clicking on the image  
- Delete a product  
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
3. Install Axios for API requests:  
   ```sh
   npm install axios  
   ```  

## Running the Application  

1. Start the JSON server:  
   ```sh
   json-server --watch db.json  
   ```  
   The JSON server will run on `http://localhost:3000/` by default.  

2. Start the React application:  
   ```sh
   npm start  
   ```  
   This will open the application on `http://localhost:3000/`.  

## Folder Structure  

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

## Explanation of Code  

### `db.json` (Mock Database)  
This file acts as a simple backend database using `json-server`. It contains product details such as ID, name, description, price, and image.

### `src/components/ProductGallery.js`  
- Fetches product data from the JSON server using Axios (`GET /products`).  
- Displays products in a grid layout.  
- Allows users to edit and delete products (`PUT /products/:id`, `DELETE /products/:id`).  
- Implements a search functionality to filter products by name.  

### `src/components/ProductForm.js`  
- Contains an input form to add new products (`POST /products`).  
- Uses controlled components for input fields.  

### `src/App.js`  
- Serves as the main entry point, rendering `ProductGallery` and `ProductForm`.  
- Uses `useState` to manage the list of products and update them dynamically.  

### `src/index.js`  
- Renders the `App` component into the root DOM element.  

### `styles.css`  
- Contains styling for the grid layout, product cards, buttons, and form.  

## How Axios is Used  
Axios is used to handle API requests to interact with the `json-server`.  

1. **Fetching Products** (GET Request)  
   ```js
   axios.get("http://localhost:3000/products")
   ```  
   This retrieves all products from `db.json` and updates the state in `ProductGallery.js`.  

2. **Adding a Product** (POST Request)  
   ```js
   axios.post("http://localhost:3000/products", newProduct)
   ```  
   This sends new product data to `db.json`, updating the list of products.  

3. **Updating a Product** (PUT Request)  
   ```js
   axios.put(`http://localhost:3000/products/${id}`, updatedProduct)
   ```  
   This updates an existing product’s details.  

4. **Deleting a Product** (DELETE Request)  
   ```js
   axios.delete(`http://localhost:3000/products/${id}`)
   ```  
   This removes a product from `db.json`.  

## API Endpoints  

- **GET /products** - Fetch all products  
- **POST /products** - Add a new product  
- **PUT /products/:id** - Update a product  
- **DELETE /products/:id** - Delete a product  

## License  
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.  
```

Also, create a `LICENSE` file in your project root with the following content:

```md
MIT License  

Copyright (c) 2025  

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:  

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.  

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.  
