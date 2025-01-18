# React Cart Task Application

# Cartify [ WebApp Name ]

This is a ReactJS application demonstrating product and cart functionality using React Router and the Fake Store API. The app allows users to browse products, add/remove items to/from the cart, update item quantities, and view the total price dynamically with a discount applied.


## **Live Demo**
[**Cartify Ecom Live Demo**](https://cartifyecom.netlify.app)


## **Features**
- **Products Page**:
  - Displays a list of products fetched from the [Fake Store API](https://fakestoreapi.com/).
  - Shows product details such as image, title, price, and description.
  - Responsive layout for mobile and desktop views.

- **Cart Page**:
  - Displays items added to the cart with their name, price, quantity, and total price per item.
  - Allows users to increase or decrease the quantity of items in the cart.
  - Displays the total price with a 10% discount applied.
  - Provides an option to remove items from the cart.

- **Routing**:
  - Users can navigate between various pages using React Router.

- **State Management**:
  - State is managed efficiently to update the cart and total price dynamically when items are added or removed.


## **Tech Stack**
- **Frontend**: ReactJS, Tailwind CSS
- **Routing**: React Router
- **Backend**: Fake Store API
- **Deployment**: Netlify

---


## **Folder Structure**
```
src/
|-- assets/
|   |-- images/               # Static assets like images
|-- components/
|   |-- About.jsx             # About section
|   |-- Categories.jsx        # Product categories component
|   |-- Checkout.jsx          # Checkout page
|   |-- Filters.jsx           # Product filters
|   |-- Footer.jsx            # Footer component
|   |-- Header.jsx            # Header and navigation bar
|   |-- Hero.jsx              # Hero section
|   |-- Products.jsx          # Product listing component
|   |-- Features.jsx          # Features section
|-- pages/
|   |-- Home.jsx              # Home page layout
|   |-- Product.jsx           # Individual product view
|   |-- CategoryProducts.jsx  # Products by category
|-- cart/
|   |-- Cart.jsx              # Main cart functionality
|-- App.jsx                   # Main app component
|-- App.css                   # Global styles
|-- index.jsx                 # Entry point
|-- main.jsx                  # React DOM render
```

---

## **Getting Started**

### **1. Clone the Repository**
```bash
git clone https://github.com/Gokuljj/react-cart-task.git
cd react-cart-task
```

### **2. Install Dependencies**
```bash
npm install
```

### **3. Run the Application Locally**
```bash
npm start
```
Visit `http://localhost:3000` in your browser to view the app.

### **4. Build for Production**
```bash
npm run build
```

---

## **Deployment**
The application is deployed using [Netlify](https://www.netlify.com/). You can access the live demo here: [React Cart Task](https://cartifyecom.netlify.app).

---

## **API Integration**
This project uses the Fake Store API to fetch product details:
- **Endpoint**: `https://fakestoreapi.com/products`
- **Usage**:
  ```javascript
  export const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products');
    return response.json();
  };
  ```

---

## **Key Functionality**

### **Routing**
The following routes are implemented:
- `/` - Displays the home page with a list of products.
- `/products/:id` - Displays details for an individual product.
- `/products` - Shows all products.
- `/categories/:name` - Filters products by category.
- `/cart` - Displays the cart and its functionality.
- `/about` - About page.
- `/checkout` - Checkout page.

### **Adding Products to Cart**
- When the "Add to Cart" button is clicked, the product is added to the cart.
- If the product is already in the cart, the button changes to "Remove from Cart."

### **Updating Cart Quantities**
- The quantity of each item can be increased or decreased using "+" and "-" buttons in the cart.
- The total price updates dynamically.

### **Discount Calculation**
- The total price in the cart includes a 10% discount on the total amount.

---

## **Styling**
- **Tailwind CSS**: Used for building responsive layouts and consistent styling.
- Components and pages are styled to ensure a clean and user-friendly interface.

---

## **Known Issues**
- Currently does not support user authentication.
- All data is reset when the page reloads (state management is client-side only).

---

## **Future Enhancements**
- Add user authentication and save cart data for individual users.
- Integrate payment gateway for completing purchases.
- Improve UI/UX further with animations.

---

## **Credits**
- [Fake Store API](https://fakestoreapi.com/) for providing product data.
- Deployed on [Netlify](https://www.netlify.com/).

---


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




## **Terms and Conditions**
- This project is built as part of an assessment task.
- The source code is open-sourced and adheres to the provided terms and conditions.
