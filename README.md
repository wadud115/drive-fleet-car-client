# 🚗 DriveFleet - Car Rental Platform

DriveFleet is a full-stack car rental platform where users can explore available cars, view detailed information, book cars, manage their bookings, and add their own cars for rental.

## 🌐 Live Website

🔗 Live Site: `YOUR_LIVE_CLIENT_URL`

## 📦 Client Repository

🔗 GitHub: `YOUR_CLIENT_GITHUB_REPOSITORY_URL`

## ⚙️ Server Repository

🔗 GitHub: `YOUR_SERVER_GITHUB_REPOSITORY_URL`

---

## 📖 About The Project

DriveFleet is a modern and responsive car rental platform built with Next.js, Express.js, and MongoDB.

The platform provides a complete car rental experience for both renters and car owners. Users can securely register and login, explore available cars, view car details, book cars, and manage their bookings.

Car owners can also add their own cars, update car information, check availability, and delete their listings.

---

## ✨ Features

- 🚗 Browse and explore available and unavailable cars.
- 🔍 Search cars by car name using MongoDB regex.
- 🏷️ Filter cars by car type.
- 🔐 Secure authentication with email/password and Google login.
- 👤 User profile dropdown with protected private routes.
- ➕ Add new car listings with detailed information.
- ✏️ Update your own car listings.
- 🗑️ Delete your own car listings with confirmation.
- 📅 Book cars with driver requirement and special notes.
- 📋 Manage personal bookings from the My Bookings page.
- 📊 Track car booking count using MongoDB `$inc`.
- 🔒 Protected APIs and authenticated user-specific data.
- 📱 Fully responsive design for mobile, tablet, and desktop.
- 🔔 Toast notifications for successful and failed actions.
- ⏳ Loading spinner for data-fetching states.
- ❌ Custom 404 Not Found page.
- 🗄️ MongoDB database for storing cars, bookings, and user-related data.

---

## 🛠️ Technologies Used

### Frontend

- Next.js
- React.js
- JavaScript
- Tailwind CSS
- HeroUI
- Lucide React
- React Hot Toast

### Backend

- Node.js
- Express.js
- MongoDB
- REST API
- JWT
- HTTPOnly Cookies
- CORS
- dotenv

### Authentication

- Better Auth
- Email & Password Authentication
- Google Authentication
- Protected Routes
- Session Management

---

## 🏗️ Project Structure

### Client

```text
drive-fleet-car/
├── src/
│   ├── app/
│   ├── components/
│   ├── lib/
│   └── ...
├── public/
├── .env.local
├── next.config.js
└── package.json
