<div align="center">

# 🍼 BabyDreams Store

### *Where Every Dream Begins...*

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![PrimeReact](https://img.shields.io/badge/PrimeReact-005B9F?style=for-the-badge&logo=prime&logoColor=white)

<br/>

> ✨ A full-stack e-commerce platform for premium baby clothing & accessories — built with love, crafted with code.

---

</div>

## 🌟 Overview

**BabyDreams Store** is a modern, full-stack web application designed to provide parents with the most delightful online shopping experience for their little ones. From soft newborn onesies to magical Disney collections, every product is curated with care.

The platform features a complete shopping workflow: browse categories, view individual products, manage a personal basket, and authenticate securely — all wrapped in a beautiful, responsive interface.

---

## ✨ Features

| Feature | Description |
|--------|-------------|
| 🏠 **Home Page** | Animated landing page with category navigation |
| 👗 **Baby Clothes** | Full clothing catalog with filtering by category |
| 🧸 **Baby Products** | Essentials and everyday items for babies |
| 💎 **Accessories** | Stylish accessories for every occasion |
| 🏰 **Disney & Jeans** | Licensed Disney collection & denim styles |
| 👶 **New Born** | Specialized section for newborn essentials |
| 🛒 **Shopping Basket** | Persistent cart with item quantity management |
| 🔐 **Authentication** | Secure login & registration with JWT tokens |
| 👤 **User Management** | Role-based access (User / Admin) |
| 📱 **Responsive Design** | Fully responsive across all devices |

---

## 🛠️ Tech Stack

### 🎨 Frontend

```
React.js          — Component-based UI framework
React Router DOM  — Client-side routing & navigation
Redux Toolkit     — Global state management
PrimeReact        — Rich UI component library
PrimeFlex         — CSS utility framework
PrimeIcons        — Icon library
Fontsource/Rubik  — Typography
```

### ⚙️ Backend

```
Node.js           — JavaScript runtime environment
Express.js        — Fast, minimalist web framework
Nodemon           — Auto-restart during development
dotenv            — Environment variable management
CORS              — Cross-Origin Resource Sharing
```

### 🗄️ Database & Authentication

```
MongoDB           — NoSQL document database
Mongoose          — Elegant MongoDB object modeling
bcrypt            — Secure password hashing (salt rounds: 10)
JSON Web Token    — Stateless authentication tokens
```

---

## 🏗️ Project Architecture

```
BabyDreams_Store/
│
├── 📁 client/                     # React Frontend Application
│   └── src/
│       ├── 📁 components/
│       │   ├── 📁 store/          # Page Components
│       │   │   ├── home.js        # Landing page
│       │   │   ├── Product.js     # All products
│       │   │   ├── ClothesPage.js # Clothing category
│       │   │   ├── AccessoriesPage.js
│       │   │   ├── DisneyPage.js
│       │   │   ├── NewBornPage.js
│       │   │   ├── ProductPage.js
│       │   │   ├── single.js      # Single product view
│       │   │   ├── Basket.js      # Shopping cart
│       │   │   ├── Login.js
│       │   │   ├── Register.js
│       │   │   ├── LogOut.js
│       │   │   └── Users.js
│       │   └── 📁 shared/
│       │       ├── header.js      # Navigation bar
│       │       ├── footer.js
│       │       └── layout.js      # App layout wrapper
│       ├── 📁 redux/
│       │   ├── store.js           # Redux store configuration
│       │   └── userSlice.js       # User state & token management
│       ├── App.js                 # Route definitions
│       └── index.js               # Application entry point
│
└── 📁 server/                     # Node.js Backend API
    ├── 📁 config/
    │   ├── corsOptions.js         # CORS configuration
    │   └── dbConn.js              # MongoDB connection
    ├── 📁 models/
    │   ├── userModel.js           # User schema
    │   ├── productsModel.js       # Product schema
    │   └── basketModel.js         # Basket schema (refs User & Product)
    ├── 📁 controllers/
    │   ├── userController.js      # Auth logic (login, register)
    │   ├── productController.js   # Product CRUD operations
    │   └── basketController.js    # Basket management
    ├── 📁 routers/
    │   ├── userRouter.js          # /api/user routes
    │   ├── productRouter.js       # /api/product routes
    │   └── basketRouter.js        # /api/basket routes
    └── server.js                  # Express server entry point
```

---

## 🗃️ Database Models

### 👤 User Model
```js
{
  usename:   String  (unique, required)
  password:  String  (hashed with bcrypt)
  name:      String  (required)
  email:     String  (unique, required)
  phone:     String
  roles:     Enum    ["User", "Admin"]  → default: "User"
  active:    Boolean → default: true
  timestamps: createdAt, updatedAt
}
```

### 📦 Product Model
```js
{
  prodname:  String  (unique, required)
  category:  Enum    ["BabyClothes", "babyAccessories",
                      "BabyProducts", "babyDisney", "newBorn"]
  price:     Number  (required)
  image:     String  (required)
  timestamps: createdAt, updatedAt
}
```

### 🛒 Basket Model
```js
{
  iduser:    ObjectId → ref: "User"    (required)
  idproduct: ObjectId → ref: "Product" (required)
  count:     Number   → default: 1
  timestamps: createdAt, updatedAt
}
```

---

## 🔌 API Endpoints

### Authentication — `/api/user`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/login` | Login with username & password → returns JWT |
| `POST` | `/register` | Register new user → returns JWT |

### Products — `/api/product`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get all products |
| `GET` | `/:id` | Get single product |
| `POST` | `/` | Add new product *(Admin)* |
| `PUT` | `/:id` | Update product *(Admin)* |
| `DELETE` | `/:id` | Delete product *(Admin)* |

### Basket — `/api/basket`
| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Get user's basket |
| `POST` | `/` | Add item to basket |
| `PUT` | `/:id` | Update item quantity |
| `DELETE` | `/:id` | Remove item from basket |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:
- [Node.js](https://nodejs.org/) v18+
- [MongoDB](https://www.mongodb.com/) (local or Atlas)
- npm or yarn

### ⚡ Installation

**1. Clone the repository**
```bash
git clone https://github.com/Tamar-Winer/BabyDreams_Store_Node_React_2025.git
cd BabyDreams_Store_Node_React_2025
```

**2. Set up the Server**
```bash
cd server
npm install
```

Create a `.env` file in the `/server` directory:
```env
PORT=1111
MONGO_URI=your_mongodb_connection_string
TOKEN_PASSWORD=your_jwt_secret_key
```

**3. Set up the Client**
```bash
cd ../client
npm install
```

### ▶️ Running the Application

**Start the backend server:**
```bash
cd server
npm start        # production
# or
npm run dev      # development (nodemon)
```

**Start the React client:**
```bash
cd client
npm start
```

The app will be available at `http://localhost:3000`  
The API server runs on `http://localhost:1111`

---

## 🔐 Authentication Flow

```
User Registration          User Login
       │                        │
  POST /api/user/register   POST /api/user/login
       │                        │
  Password hashed           Password compared
  with bcrypt                with bcrypt hash
       │                        │
  JWT token signed           JWT token signed
  & returned                 & returned
       │                        │
  Stored in                  Stored in
  localStorage               localStorage
       │                        │
  Redux state updated        Redux state updated
  (userSlice.token)          (userSlice.token)
```

---

## 🛒 Shopping Flow

```
Browse Categories  →  View Products  →  Single Product  →  Add to Basket
                                                                  │
                                              ┌───────────────────┘
                                              │
                                         View Basket
                                              │
                                    Manage Quantities
                                              │
                                        Checkout ✓
```

---

## 🎨 UI Components (PrimeReact)

The application leverages the full power of **PrimeReact** with the `lara-light-indigo` theme:

- `<Dialog>` — Confirmation modals (e.g., logout confirmation)
- `<Button>` — Styled action buttons
- `<Toast>` — Success / error notifications
- `<DataTable>` — Product and user data display
- `<InputText>` — Form inputs for login & register
- **PrimeFlex** — Responsive grid and utility classes
- **PrimeIcons** — Consistent icon set throughout the UI

---

## 👥 Authors

<div align="center">

| | Developer |
|---|---|
| 👩‍💻 | **Tamar Winer** |
| 👩‍💻 | **Sharie Shinman** |

*Crafted with passion as a full-stack development project — 2025*

</div>

---

<div align="center">

**⭐ If you like this project, give it a star on GitHub! ⭐**

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-ff69b4?style=for-the-badge)
![Baby Store](https://img.shields.io/badge/BabyDreams-Store-blue?style=for-the-badge&logo=shopify&logoColor=white)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)

*🍼 Sweet Dreams Start Here... 🌙*

</div>
