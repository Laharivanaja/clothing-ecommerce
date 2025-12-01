# Clothing E-Commerce Web Application (MERN Stack)

A full-stack e-commerce application built with MongoDB, Express.js, React, and Node.js for selling clothing items.

## Features

### Core Features
- ✅ User Authentication (Register/Login with JWT)
- ✅ Product Catalog with 20+ clothing items
- ✅ Advanced Search & Filters (Category, Size, Price Range)
- ✅ Shopping Cart Management
- ✅ Mock Checkout Process
- ✅ Order History
- ✅ Email Confirmation using Nodemailer

### Technical Highlights
- Secure password hashing with bcrypt
- JWT-based authentication with HTTP-only cookies
- RESTful API architecture
- MongoDB database with Mongoose ODM
- React Context API for state management
- Responsive design

## Project Structure

```
clothing-ecommerce/
├── backend/
│   ├── config/
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── productController.js
│   │   ├── cartController.js
│   │   └── orderController.js
│   ├── middleware/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   ├── Cart.js
│   │   └── Order.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   ├── cartRoutes.js
│   │   └── orderRoutes.js
│   ├── utils/
│   │   └── sendEmail.js
│   ├── seedProducts.js
│   ├── server.js
│   ├── package.json
│   └── .env
└── frontend/
    ├── src/
    │   ├── components/
    │   ├── context/
    │   ├── pages/
    │   ├── services/
    │   ├── App.jsx
    │   └── App.css
    └── package.json
```

## Prerequisites

- Node.js (v18 or higher)
- MongoDB (local or MongoDB Atlas)
- Gmail account (for sending emails)
- npm or yarn

## Installation & Setup

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd clothing-ecommerce
```

### 2. Backend Setup

```bash
cd backend
npm install
```

**Install Dependencies:**
```bash
npm install express mongoose bcryptjs jsonwebtoken cookie-parser cors dotenv nodemailer
npm install --save-dev nodemon
```

**Create .env file in backend folder:**
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/clothing-ecommerce
JWT_SECRET=your_super_secret_jwt_key_change_this_to_something_secure
NODE_ENV=development
EMAIL_USER=your-gmail@gmail.com
EMAIL_PASS=your-app-specific-password
CLIENT_URL=http://localhost:3000
```

**Setting up Gmail for Nodemailer:**
1. Go to your Google Account settings
2. Enable 2-Step Verification
3. Generate an App Password:
   - Go to Security → 2-Step Verification → App passwords
   - Select "Mail" and "Other (Custom name)"
   - Copy the generated password
   - Use this password in `EMAIL_PASS`

### 3. Seed the Database

```bash
npm run seed
```

This will populate your database with 21 clothing products.

### 4. Start Backend Server

```bash
npm run dev
```

The backend server will run on `http://localhost:5000`

### 5. Frontend Setup

Open a new terminal:

```bash
cd frontend
npm install
```

**Install Dependencies:**
```bash
npm install react-router-dom axios
```

**Start Frontend:**
```bash
npm start
```

The frontend will run on `http://localhost:3000`

## API Endpoints

### Authentication Routes
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/me` - Get current user (Protected)

### Product Routes
- `GET /api/products` - Get all products (with filters & pagination)
- `GET /api/products/:id` - Get single product
- `GET /api/products/categories/all` - Get all categories

### Cart Routes (All Protected)
- `GET /api/cart` - Get user's cart
- `POST /api/cart/add` - Add item to cart
- `PUT /api/cart/update` - Update cart item quantity
- `DELETE /api/cart/remove/:productId/:size` - Remove item from cart
- `DELETE /api/cart/clear` - Clear cart

### Order Routes (All Protected)
- `POST /api/orders` - Create new order
- `GET /api/orders` - Get user's orders
- `GET /api/orders/:id` - Get single order

## Filter & Search Examples

### Search by name/description:
```
GET /api/products?search=jacket
```

### Filter by category:
```
GET /api/products?category=Men
```

### Filter by size:
```
GET /api/products?size=L
```

### Filter by price range:
```
GET /api/products?minPrice=500&maxPrice=2000
```

### Combined filters:
```
GET /api/products?category=Women&size=M&minPrice=1000&maxPrice=2500&search=dress
```

### Pagination:
```
GET /api/products?page=1&limit=10
```

## Testing the Application

### 1. Register a New User
- Go to `http://localhost:3000/register`
- Fill in the registration form
- Submit

### 2. Browse Products
- Visit the Products page
- Use search and filters
- Click on a product for details

### 3. Add to Cart
- Select a size
- Choose quantity
- Click "Add to Cart"

### 4. Checkout
- Go to Cart
- Review items
- Click "Proceed to Checkout"
- Fill in shipping address
- Place order

### 5. Check Email
- You should receive an order confirmation email
- Email contains order details and items

### 6. View Orders
- Go to "My Orders"
- See all your past orders
- Click to view details

## Environment Variables

### Backend (.env)
```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
NODE_ENV=development
EMAIL_USER=your_gmail_address
EMAIL_PASS=your_app_password
CLIENT_URL=http://localhost:3000
```

## Security Features

- Passwords hashed with bcrypt (10 salt rounds)
- JWT tokens with HTTP-only cookies
- Protected routes with authentication middleware
- CORS configured for secure cross-origin requests
- Input validation on server-side

## Database Models

### User Model
- name, email, password (hashed), role

### Product Model
- name, description, price, image, category, sizes, stock

### Cart Model
- user (reference), items (array of product references with size and quantity)

### Order Model
- user (reference), items (array), totalPrice, status, orderDate, shippingAddress

## Troubleshooting

### MongoDB Connection Error
- Make sure MongoDB is running locally, or
- Use MongoDB Atlas and update MONGO_URI

### Email Not Sending
- Verify Gmail credentials
- Make sure App Password is generated correctly
- Check if 2-Step Verification is enabled

### Port Already in Use
- Change PORT in .env file
- Or kill the process using that port

### CORS Error
- Make sure CLIENT_URL in .env matches frontend URL
- Check if both servers are running

## Future Enhancements

- Payment gateway integration
- Product reviews and ratings
- Admin dashboard
- Image upload functionality
- Wishlist feature
- Order tracking
- Multiple shipping addresses
- Coupon/discount codes

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- bcryptjs
- jsonwebtoken
- Nodemailer
- cookie-parser
- cors

### Frontend
- React.js
- React Router
- React Context API
- Axios
- CSS3

## License

This project is created for educational purposes as part of a MERN stack assignment.

## Author

Yarlagadda Lahari Prasanna

**Happy Coding! 🚀**