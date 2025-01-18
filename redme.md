# Cartify

This is a ReactJS application demonstrating product and cart functionality using React Router and the Fake Store API. The app allows users to browse products, add/remove items to/from the cart, update item quantities, and view the total price dynamically with a discount applied.

## Features

- Fetches product data from the [Fake Store API](https://fakestoreapi.com/).
- Displays products in a responsive layout.
- Adds items to the cart and dynamically updates the cart state.
- Allows users to increase or decrease the quantity of cart items.
- Shows total price per item and overall cart total with a 10% discount.
- Provides seamless navigation between product and cart pages using React Router.
- Clean and responsive design using Tailwind CSS.

## Installation Steps

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd cartify
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Run the Application**

   ```bash
   npm start
   ```

   The app will be available at `http://localhost:3000`.

4. **Build for Production** (Optional)

   ```bash
   npm run build
   ```

## Deployment

The application is deployed on Netlify and accessible via the following link: [Live Demo](#) *(Replace with actual Netlify URL)*

## Folder Structure

```
/src
  /assets
    /images            # Contains image assets
  /components
    /About
      About.jsx        # About section component
    /Categories
      Categories.jsx   # Categories component
    /Checkout
      Checkout.jsx     # Checkout process component
    /Filters
      Filters.jsx      # Filters for products
    /Footer
      Footer.jsx       # Footer component
    /Header
      Header.jsx       # Header component
    /Hero
      Hero.jsx         # Hero section
    /Products
      Products.jsx     # Main product list component
    /Features
      Features.jsx     # Features section component
  /Cart
    /Cart
      Cart.jsx         # Displays cart functionality
  /Pages
    /Home
      Home.jsx         # Home page of the application
    /Product
      Product.jsx      # Product detail page
    /CategoryProducts
      CategoryProducts.jsx # Displays products by category
  App.jsx              # Main App component with routes
  main.jsx             # Application entry point
  index.css            # Global styles
```

## Functionality

### Product Page

- Fetches and displays a list of products with the following details:
  - Image
  - Title
  - Price
  - Description
- Provides an "Add to Cart" button for each product. If a product is already in the cart, it displays a "Remove from Cart" button.

### Cart Page

- Lists all items added to the cart.
- Allows users to:
  - Increase or decrease the quantity of each item.
  - Remove items from the cart.
- Displays:
  - Product name and price.
  - Total price per item (price * quantity).
  - Overall total price with a dynamic 10% discount.

## Technologies Used

- **ReactJS**: Frontend framework.
- **React Router**: For navigation between pages.
- **Tailwind CSS**: For responsive and modern styling.
- **JavaScript**: For application logic.
- **Fake Store API**: To fetch product data.

## Notes

- The project adheres to a clean code structure with reusable components and proper state management.
- It ensures responsiveness and accessibility for a smooth user experience.

---

For any issues or feedback, please raise an issue on the repository or contact the author.

