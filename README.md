# 📚 [Read Journey](https://read-journey-green.vercel.app)

A responsive web application that helps users manage their personal library, discover recommended books, and track their reading progress. The platform enables users to register, log in, add both recommended and custom books to their library, start and stop reading sessions, and monitor statistics of their reading journey.
<img width="1920" height="1091" alt="РидДжор1" src="https://github.com/user-attachments/assets/16779310-914d-4614-a3de-9cb3b2f43e05" />
<img width="1920" height="1082" alt="Рид джор3" src="https://github.com/user-attachments/assets/9e5d0fa8-789e-4a54-af4e-95a66c08f498" />
<img width="1920" height="1081" alt="РидДжо2" src="https://github.com/user-attachments/assets/1d9fd4a1-2640-419e-9309-9e050cd4ae8c" />
<img width="1920" height="1088" alt="РидДжор5" src="https://github.com/user-attachments/assets/a7b6acbd-75de-4913-a00a-914d57ad501e" />
---

## 📌 About the Project

This project was created as a demo platform for book lovers who want to organize their reading habits. The application consists of several main pages:

- **Register Page** – allows new users to sign up with validated form inputs.  
- **Login Page** – enables existing users to log in securely.  
- **Recommended Page** – displays a list of recommended books with filters and server-side pagination.  
- **My Library Page** – a private page for authenticated users to manage their personal book collection (including adding custom books).  
  Users can also filter their library by **All books**, **Unread**, **In‑progress**, and **Done**, making it easier to track reading status.  
- **Reading Page** – provides tools to start or stop reading sessions and track progress through diary entries or statistics.

---

## ✨ Features

- 🔐 User authentication (registration, login, logout) with automatic token handling  
- 📝 Validated forms using React Hook Form + Yup (name, email, password, book details, reading sessions)  
- 📚 Recommended books with server-side pagination and modal details  
- ➕ Add books to personal library (both recommended and custom entries) with validation and notifications  
- 🗑 Delete books from library directly (no extra confirmation step)  
- 📖 Start/Stop reading sessions with backend synchronization  
- 📊 Reading statistics displayed as diary entries or charts  
- ✅ Smart validation rules for reading sessions (sequential page enforcement, no duplicate starts)  
- 🎉 Completed Book Mode: finished books show only statistics with a celebratory placeholder, diary actions disabled  
- 🔔 Enhanced toast notifications with close buttons and contextual feedback  
- 🎨 Responsive design for mobile (320px–375px), tablet (768px), and desktop (1440px)  
- 🖼 Optimized images (retina support, sprites for icons, lazy loading)  
- 🧾 Semantic HTML5 structure and accessible UI components  

---

## 🔧 Technologies Used

- React + TypeScript – UI development  
- Redux Toolkit – global state management  
- React Router v6 – routing and protected routes  
- React Hook Form + Yup – form handling and validation  
- React Toastify – user notifications  
- **SCSS** – adaptive and modular styles  
- Backend API – for authentication, book management, and reading statistics  

---

## 🚀 Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/your-username/read-journey.git
cd read-journey
npm install
npm run dev

