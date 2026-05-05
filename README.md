# Next.js User CRUD App

## 📌 Overview

This is a simple User CRUD application built using **Next.js (App Router)** and the **JSONPlaceholder API**.
The app allows users to view, update, and delete user data with optimistic UI updates.

---

## 🚀 Live Demo

https://nextjs-crud-app-kappa.vercel.app/

---

## 🛠 Tech Stack

* Next.js (App Router)
* React
* JavaScript
* Axios

---

## 🌐 API Used

Base URL:
https://jsonplaceholder.typicode.com

Endpoints:

* GET /users
* GET /users/:id
* PUT /users/:id
* DELETE /users/:id

> Note: JSONPlaceholder does not persist data.

---

## 📄 Features

### 🔹 Users List (/users)

* Fetch and display all users
* Show name and email
* View button for each user

### 🔹 User Detail Page (/users/[id])

* Fetch single user details
* Update user (with pre-filled form)
* Delete user
* Redirect after delete

### 🔹 Optimistic Updates

* UI updates immediately before API response
* Improves user experience

### 🔹 Local Persistence

* Used localStorage to simulate persistence
* Ensures updates reflect across pages

---

## 📁 Folder Structure

```
app/
 ├── page.js
 ├── users/
 │    ├── page.js
 │    ├── [id]/
 │    │     └── page.js
 ├── lib/
 │    └── api.js
```

---

## ⚠️ Important Notes

* JSONPlaceholder does not save data permanently
* Updates and deletes are simulated using optimistic UI
* localStorage is used to reflect changes across pages

---

## 🎯 Learning Outcomes

* Next.js App Router fundamentals
* Dynamic routing
* API handling with Axios
* Optimistic UI updates
* State management across pages

---

## 👨‍💻 Author

Juhi Vyas