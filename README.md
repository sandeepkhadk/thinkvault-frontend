# 🧠 ThinkVault — Frontend

> **Organize your thoughts. Secure your ideas. Access everything.**

ThinkVault is a sleek, responsive notes management application that lets you capture, organize, and retrieve your notes with ease. This repository contains the **frontend** interface that communicates with the ThinkVault backend API.

---

## ✨ Features

- 🔐 **User Authentication** — Secure login and registration with JWT-based sessions
- 📝 **Full Note Management** — Create, read, update, and delete notes effortlessly
- 🔍 **Search & Filter** — Quickly find notes by title or content
- 📱 **Responsive Design** — Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast & Lightweight** — Optimized for performance with a minimal footprint

---

## 🛠️ Tech Stack

| Layer       | Technology          |
|-------------|---------------------|
| Framework   | React               |
| Build Tool  | Vite                |
| Styling     | Tailwind CSS        |
| HTTP Client | Axios               |
| Routing     | React Router DOM    |
| State Mgmt  | React Context / Hooks |

---

## 📁 Project Structure

```
thinkvault-frontend/
├── public/
│   └── favicon.ico
├── src/
│   ├── assets/          # Images and static files
│   ├── components/      # Reusable UI components
│   ├── pages/           # Route-level page components
│   ├── context/         # React Context for global state
│   ├── services/        # API call functions (Axios)
│   ├── App.jsx
│   └── main.jsx
├── .env.example
├── index.html
├── package.json
└── vite.config.js
```

---

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) v18 or higher
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- The [ThinkVault Backend](https://github.com/sandeepkhadk/thinkvault-backend) running locally or deployed

### 1. Clone the Repository

```bash
git clone https://github.com/sandeepkhadk/thinkvault-frontend.git
cd thinkvault-frontend
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Copy the example environment file and fill in your values:

```bash
cp .env.example .env
```

Open `.env` and update:

```env
VITE_API_BASE_URL=http://localhost:5000/api
```

> Replace `http://localhost:5000/api` with your backend's URL if deployed remotely.

### 4. Start the Development Server

```bash
npm run dev
```

The app will be available at **[http://localhost:5173](http://localhost:5173)**.

---

## 🔗 Backend API

This frontend requires the **ThinkVault Backend** to be running. The backend exposes the following REST endpoints:

| Method | Endpoint         | Description                  |
|--------|------------------|------------------------------|
| POST   | `/auth/register` | Register a new user          |
| POST   | `/auth/login`    | Login and receive a JWT      |
| GET    | `/notes`         | Get all notes for the user   |
| GET    | `/notes/:id`     | Get a specific note          |
| POST   | `/notes`         | Create a new note            |
| PUT    | `/notes/:id`     | Update an existing note      |
| DELETE | `/notes/:id`     | Delete a note                |

---

## 🏗️ Build for Production

```bash
npm run build
```

The optimized output will be generated in the `dist/` folder. You can preview it locally with:

```bash
npm run preview
```

---

## 🤝 Contributing

Contributions are welcome! Here's how to get started:

1. Fork the repository
2. Create a new branch: `git checkout -b feature/your-feature-name`
3. Make your changes and commit: `git commit -m "Add your feature"`
4. Push to your fork: `git push origin feature/your-feature-name`
5. Open a Pull Request

Please ensure your code is clean, well-commented, and tested before submitting.

---

## 📄 License

This project is licensed under the [MIT License](LICENSE).

---

## 👤 Author

**Sandeep Khadk**
- GitHub: [@sandeepkhadk](https://github.com/sandeepkhadk)

---

> *ThinkVault — Your ideas deserve a safe place to live.*
