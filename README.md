<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=200&section=header&text=BabyDreams%20Store%20🍼&fontSize=50&fontColor=fff&animation=twinkling&fontAlignY=35&desc=Where%20Every%20Dream%20Begins...&descAlignY=58&descSize=20" width="100%"/>

<br/>

[![Typing SVG](https://readme-typing-svg.demolab.com?font=Fira+Code&size=22&duration=3000&pause=1000&color=FF6B9D&center=true&vCenter=true&multiline=true&repeat=true&width=700&height=100&lines=Full-Stack+Baby+E-Commerce+Platform+%F0%9F%8C%9F;React+%7C+Node.js+%7C+MongoDB+%7C+Redux+%F0%9F%9B%92;Built+with+Love+for+the+Tiniest+Ones+%F0%9F%92%95)](https://git.io/typing-svg)

<br/>

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white)
![Redux](https://img.shields.io/badge/Redux_Toolkit-593D88?style=for-the-badge&logo=redux&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON%20web%20tokens&logoColor=white)
![PrimeReact](https://img.shields.io/badge/PrimeReact-005B9F?style=for-the-badge&logo=prime&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

<br/>

![Made with Love](https://img.shields.io/badge/Made%20with-❤️-ff69b4?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-success?style=for-the-badge)
![Year](https://img.shields.io/badge/Year-2025-blueviolet?style=for-the-badge)

</div>

---

<img src="https://capsule-render.vercel.app/api?type=rect&color=gradient&customColorList=6,11,20&height=3&section=header" width="100%"/>

## <img src="https://media.giphy.com/media/iY8CRBdQXODJSCERIr/giphy.gif" width="35"> Overview

**BabyDreams Store** is a modern, full-stack e-commerce web application designed to provide parents with the most delightful online shopping experience for their little ones. From soft newborn onesies to magical Disney collections — every product is curated with care.

The platform features a complete shopping workflow: browse categories, view individual products, manage a personal basket, and authenticate securely — all wrapped in a beautiful, responsive interface.
<img width="1917" height="910" alt="20260521021907828" src="https://github.com/user-attachments/assets/9d72fb98-2eaf-46cb-a82e-a391aefeffd4" />

<br/>

---

## <img src="https://media.giphy.com/media/WUlplcMpOCEmTGBtBW/giphy.gif" width="40"> Features

<div align="center">

| ✨ Feature | 📝 Description |
|:---:|:---|
| 🏠 **Home Page** | Animated landing page with visual category navigation |
| 👗 **Baby Clothes** | Full clothing catalog filtered by category |
| 🧸 **Baby Products** | Everyday essentials for growing babies |
| 💎 **Accessories** | Stylish accessories for every tiny occasion |
| 🏰 **Disney & Jeans** | Licensed Disney collection & denim styles |
| 👶 **New Born** | Specialized section for newborn essentials |
| 🛒 **Shopping Basket** | Persistent cart with item quantity management |
| 🔐 **Authentication** | Secure login & registration powered by JWT |
| 👤 **User Management** | Role-based access control (User / Admin) |
| 📱 **Responsive Design** | Fully responsive across all screen sizes |

</div>

<br/>

---

## <img src="https://media2.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif?cid=ecf05e47a0n3gi1bfqntqmob8g9aid1oyj2wr3ds3mg700bl&rid=giphy.gif" width="35"> Tech Stack

<div align="center">

### 🎨 Frontend

<img src="https://skillicons.dev/icons?i=react,redux,js,css,html&theme=dark" />

| Technology | Purpose |
|:---:|:---|
| ⚛️ **React.js** | Component-based UI framework |
| 🔀 **React Router DOM** | Client-side routing & navigation |
| 🗃️ **Redux Toolkit** | Global state management |
| 🎨 **PrimeReact** | Rich UI component library |
| 📐 **PrimeFlex** | CSS utility & responsive grid |
| 🔣 **PrimeIcons** | Consistent icon set |
| 🔤 **Fontsource Rubik** | Modern Hebrew-friendly typography |

<br/>

### ⚙️ Backend

<img src="https://skillicons.dev/icons?i=nodejs,express,mongodb,js&theme=dark" />

| Technology | Purpose |
|:---:|:---|
| 🟢 **Node.js** | JavaScript runtime environment |
| 🚂 **Express.js** | Fast, minimalist web framework |
| 🔄 **Nodemon** | Auto-restart during development |
| 🔑 **JSON Web Token** | Stateless authentication tokens |
| 🔒 **bcrypt** | Secure password hashing (salt: 10) |
| 🌿 **MongoDB** | NoSQL document database |
| 🦅 **Mongoose** | Elegant MongoDB object modeling |
| 🔧 **dotenv** | Environment variable management |
| 🌐 **CORS** | Cross-Origin Resource Sharing |

</div>

<br/>

---

## <img src="https://media.giphy.com/media/cj87CxfRtrUifF3Ryk/giphy.gif" width="40"> Project Architecture

```
🍼 BabyDreams_Store/
│
├── 📁 client/                        # ⚛️  React Frontend Application
│   └── src/
│       ├── 📁 components/
│       │   ├── 📁 store/             # 🛍️  Page Components
│       │   │   ├── 🏠 home.js        # Landing page
│       │   │   ├── 📦 Product.js     # All products catalog
│       │   │   ├── 👗 ClothesPage.js # Clothing category
│       │   │   ├── 💎 AccessoriesPage.js
│       │   │   ├── 🏰 DisneyPage.js
│       │   │   ├── 👶 NewBornPage.js
│       │   │   ├── 🧸 ProductPage.js
│       │   │   ├── 🔍 single.js      # Single product view
│       │   │   ├── 🛒 Basket.js      # Shopping cart
│       │   │   ├── 🔐 Login.js
│       │   │   ├── 📝 Register.js
│       │   │   ├── 🚪 LogOut.js
│       │   │   └── 👥 Users.js
│       │   └── 📁 shared/
│       │       ├── 🔝 header.js      # Navigation bar
│       │       ├── 🔚 footer.js
│       │       └── 🏗️  layout.js    # App layout wrapper
│       ├── 📁 redux/
│       │   ├── 🏪 store.js           # Redux store configuration
│       │   └── 👤 userSlice.js       # User state & token management
│       ├── 🗺️  App.js               # Route definitions
│       └── 🚀 index.js              # Application entry point
│
└── 📁 server/                        # 🟢 Node.js Backend API
    ├── 📁 config/
    │   ├── corsOptions.js            # CORS configuration
    │   └── dbConn.js                 # MongoDB connection
    ├── 📁 models/
    │   ├── 👤 userModel.js           # User schema
    │   ├── 📦 productsModel.js       # Product schema
    │   └── 🛒 basketModel.js         # Basket schema
    ├── 📁 controllers/
    │   ├── userController.js         # Auth logic
    │   ├── productController.js      # Product CRUD
    │   └── basketController.js       # Basket management
    ├── 📁 routers/
    │   ├── userRouter.js             # /api/user
    │   ├── productRouter.js          # /api/product
    │   └── basketRouter.js           # /api/basket
    └── 🚀 server.js                  # Express entry point
```

<br/>

---

## <img src="https://media.giphy.com/media/fYSnHlufseco8Fh93Z/giphy.gif" width="35"> Database Models

<div align="center">

### 👤 User Model
```js
{
  usename:    String   ─── unique · required · lowercase
  password:   String   ─── hashed with bcrypt (10 rounds)
  name:       String   ─── required
  email:      String   ─── unique · required · lowercase
  phone:      String
  roles:      Enum     ─── "User" | "Admin"  (default: "User")
  active:     Boolean  ─── default: true
  timestamps: createdAt · updatedAt
}
```

### 📦 Product Model
```js
{
  prodname:   String   ─── unique · required
  category:   Enum     ─── "BabyClothes" | "babyAccessories"
                           "BabyProducts" | "babyDisney" | "newBorn"
  price:      Number   ─── required
  image:      String   ─── required (base64 / URL)
  timestamps: createdAt · updatedAt
}
```

### 🛒 Basket Model
```js
{
  iduser:     ObjectId ─── ref: "User"     · required
  idproduct:  ObjectId ─── ref: "Product"  · required
  count:      Number   ─── default: 1
  timestamps: createdAt · updatedAt
}
```

</div>

<br/>

---

## <img src="https://media.giphy.com/media/W5eoZHPpUx9sapR0eu/giphy.gif" width="35"> API Endpoints

<div align="center">

### 🔐 Authentication — `/api/user`

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `POST` | `/login` | Login → returns JWT access token | ❌ |
| `POST` | `/register` | Register new user → returns JWT | ❌ |

### 📦 Products — `/api/product`

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `GET` | `/` | Fetch all products | ❌ |
| `GET` | `/:id` | Get single product by ID | ❌ |
| `POST` | `/` | Add new product | 👑 Admin |
| `PUT` | `/:id` | Update product | 👑 Admin |
| `DELETE` | `/:id` | Delete product | 👑 Admin |

### 🛒 Basket — `/api/basket`

| Method | Endpoint | Description | Auth |
|:---:|:---|:---|:---:|
| `GET` | `/` | Get user's basket | ✅ |
| `POST` | `/` | Add item to basket | ✅ |
| `PUT` | `/:id` | Update item quantity | ✅ |
| `DELETE` | `/:id` | Remove item from basket | ✅ |

</div>

<br/>

---

## <img src="https://media.giphy.com/media/LnQjpWaON8nhr21vNW/giphy.gif" width="35"> Getting Started

### Prerequisites

![Node](https://img.shields.io/badge/Node.js-v18+-green?style=flat-square&logo=nodedotjs)
![MongoDB](https://img.shields.io/badge/MongoDB-v6+-green?style=flat-square&logo=mongodb)
![npm](https://img.shields.io/badge/npm-v9+-red?style=flat-square&logo=npm)

### ⚡ Installation

**1. Clone the repository**
```bash
git clone https://github.com/Tamar-Winer/BabyDreams_Store_Node_React_2025.git
cd BabyDreams_Store_Node_React_2025
```

**2. Install Server dependencies**
```bash
cd server
npm install
```

**3. Configure environment variables**

Create a `.env` file inside `/server`:
```env
PORT=1111
MONGO_URI=your_mongodb_connection_string
TOKEN_PASSWORD=your_super_secret_jwt_key
```

**4. Install Client dependencies**
```bash
cd ../client
npm install
```

### ▶️ Run the Application

```bash
# Terminal 1 — Start Backend
cd server && npm start

# Terminal 2 — Start Frontend
cd client && npm start
```

<div align="center">

| Service | URL |
|:---:|:---:|
| 🌐 React App | `http://localhost:3000` |
| 🔌 API Server | `http://localhost:1111` |

</div>

<br/>

---

## <img src="https://media.giphy.com/media/3oKIPrc2ngFZ6BTyww/giphy.gif" width="35"> Authentication Flow

```
   REGISTER                          LOGIN
      │                                │
      ▼                                ▼
POST /api/user/register        POST /api/user/login
      │                                │
      ▼                                ▼
 Hash password               Compare password hash
  with bcrypt                   with bcrypt
      │                                │
      ▼                                ▼
 Save user to DB              Verify user exists
      │                          & is active
      ▼                                │
 Sign JWT token               Sign JWT token
      │                                │
      └──────────────┬─────────────────┘
                     ▼
            Return { accesToken }
                     │
                     ▼
         Store in localStorage
                     │
                     ▼
        Update Redux userSlice.token
                     │
                     ▼
            🎉 User is logged in!
```

<br/>

---

## <img src="https://media.giphy.com/media/du3J3cXyzhj75IOgvA/giphy.gif" width="35"> Shopping Flow

```
  🏠 Home Page
      │
      ▼
  📂 Choose Category
  ┌───┼────────────────────────────────┐
  │   │                                │
  ▼   ▼                                ▼
👗  🧸  💎  🏰  👶           🔍 Search / Browse
Clothes Products             All Products Page
  │         │
  └────┬────┘
       ▼
  📄 Single Product View
       │
       ▼
  🛒 Add to Basket  ──── (requires login)
       │
       ▼
  🛒 Basket Page
       │
       ▼
  ✏️  Manage Quantities
       │
       ▼
  ✅ Checkout Complete!
```

<br/>

---

## <img src="https://media.giphy.com/media/IdyAQJVN2kVPNUrojM/giphy.gif" width="35"> UI Components

<div align="center">

The application is powered by **PrimeReact** with the stunning `lara-light-indigo` theme:

| Component | Usage |
|:---:|:---|
| `<Dialog>` | Confirmation modals (e.g., logout confirmation with gradient background) |
| `<Button>` | Styled action & navigation buttons |
| `<Toast>` | Success / error / info notifications |
| `<DataTable>` | Product and user listing with sorting |
| `<InputText>` | Validated form inputs for auth flows |
| **PrimeFlex** | Responsive flex grid & utility classes |
| **PrimeIcons** | Consistent icon set across the UI |

</div>

<br/>

---

## 👩‍💻 Authors

<div align="center">

<table>
  <tr>
    <td align="center">
      <img src="https://avatars.githubusercontent.com/Tamar-Winer" width="100px;" style="border-radius:50%"/><br/>
      <b>Tamar Winer</b><br/>
      <a href="https://github.com/Tamar-Winer">
        <img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white"/>
      </a>
    </td>
    <td align="center">
      <img src="https://via.placeholder.com/100/FF6B9D/ffffff?text=SS" width="100px;" style="border-radius:50%"/><br/>
      <b>Sharie Shinman</b><br/>
      <img src="https://img.shields.io/badge/Developer-FF6B9D?style=for-the-badge&logo=react&logoColor=white"/>
    </td>
  </tr>
</table>

*Crafted with passion as a full-stack development project — 2025* 💕

</div>

<br/>

---

<div align="center">

### ⭐ If you love this project, give it a star! ⭐

[![GitHub stars](https://img.shields.io/github/stars/Tamar-Winer/BabyDreams_Store_Node_React_2025?style=social)](https://github.com/Tamar-Winer/BabyDreams_Store_Node_React_2025/stargazers)

</div>

<img src="https://capsule-render.vercel.app/api?type=waving&color=gradient&customColorList=6,11,20&height=120&section=footer&text=Sweet%20Dreams%20Start%20Here%20🌙&fontSize=24&fontColor=fff&animation=twinkling&fontAlignY=65" width="100%"/>
