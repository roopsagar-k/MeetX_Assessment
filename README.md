# 🎯 Activity Booking System API

This is a RESTful API for an Activity Booking System, built with Node.js, Express, and MongoDB. It allows users to register, log in, view available activities, book them, and manage their bookings.

## 🚀 Deployed API

The API is live and accessible at:

[https://vsck0o8sc48wksok00gs0sgc.wibblit.com/](https://vsck0o8sc48wksok00gs0sgc.wibblit.com/)

## 📌 Base URL
  http://localhost:3000/api


---

## 🔐 Authentication Endpoints

These endpoints are used for registering, logging in/out, and retrieving authenticated user information.

| Method | Endpoint        | Description                                |
|--------|------------------|--------------------------------------------|
| POST   | `/auth/register` | Register a new user                        |
| POST   | `/auth/login`    | Log in and receive a JWT token             |
| POST   | `/auth/logout`   | Log out the authenticated user             |
| GET    | `/auth/me`       | Fetch current logged-in user details       |

---

## 🎟 Activity Endpoints

Used to list all activities or retrieve details of a specific activity. Activity creation is currently open to any authenticated user but ideally should be restricted to admin users.

| Method | Endpoint           | Description                                                                       |
|--------|--------------------|-----------------------------------------------------------------------------------|
| GET    | `/activities`      | List all available activities                                                     |
| GET    | `/activities/:id`  | Get a single activity by its ID                                                   |
| POST   | `/activities`      | Create a new activity *(requires authentication; intended for admins)*            |

---

## 📅 Booking Endpoints

Allows authenticated users to book activities and retrieve their own bookings.

| Method | Endpoint            | Description                                |
|--------|---------------------|--------------------------------------------|
| POST   | `/bookings`         | Book an activity *(pass `activityId` in body)* |
| GET    | `/bookings/me`      | View all bookings made by the logged-in user   |

---

## 🔐 Authentication

All protected routes require a **Bearer token** in the `Authorization` header.

- Use `/auth/login` to obtain a JWT token.
- Add the following header to protected requests:
    Authorization: Bearer <your_token_here>


---

## 🛠 Tech Stack

- **Node.js** & **Express.js**
- **MongoDB** with Mongoose
- **JWT** for authentication
- **Joi** for input validation
- **Postman** for API testing

---

## 📁 Postman Collection

A Postman collection is available for testing all routes.  
**Make sure to set the environment variable** `base_url` to your local or deployed API base (e.g., `http://localhost:5000`).

---

## 🧪 How to Run

```bash
# Install dependencies
npm install

# Start the server
npm run dev

🧑‍💻 Author
Roopsagar K
Email: contact.roopsagarudayar@gmail.com | roopsagarudayar9854@gmail.com
Phone: +91 8310389144

