# AI Powered Real Estate Property Finder Website

A full-stack MERN-based real estate search platform that enables users to find properties using natural language queries. Built with a focus on intuitive UI, dynamic search, and scalable architecture, this project simulates a smart property search assistant for real-world use.

---

## 🚀 Features

### 🔎 Smart Property Search

* Accepts natural language queries such as "3 BHK flat in Pune under 40L".
* Parses and converts input to a structured filter object.
* Fetches property listings based on parsed filters (location, BHK, budget).

### 🧠 AI/NLP Integration (Optional/Future-Ready)

* Designed to integrate with OpenAI or other LLM APIs to extract filters from user queries.
* Future-ready chatbot interface for guided property search experience.

### 🗺️ Advanced Filtering

* Filter by price, location, property type, BHK, amenities.
* Optionally integrates with map services (Google Maps API) for location visualization.

### 🧑‍🤝‍🧑 Trusted Social Reviews (Planned Feature)

* View reviews/comments on listings only from known connections (friends, college seniors, family).
* Increases trustworthiness of reviews by restricting visibility to your network.

### 🏡 Property Listing Management

* Admin dashboard to add/edit/remove properties.
* Image uploads and property details stored securely.

### 🔐 Authentication

* JWT-based secure login for users and admins.
* Role-based access: Users (view/search), Admins (manage listings).

---

## 🧱 Tech Stack

| Layer               | Technology                                  |
| ------------------- | ------------------------------------------- |
| Frontend            | React.js, HTML5, CSS3, Tailwind (if used)   |
| Backend             | Node.js, Express.js                         |
| Database            | MongoDB                                     |
| Authentication      | JWT, bcrypt for password hashing            |
| API Integration     | (Planned) OpenAI API / Zillow API           |
| Social Review Layer | (Planned) Custom user network logic         |
| Deployment          | Localhost / LAN, planned for Render/Netlify |

---

## 📂 Project Structure (Simplified)

```
real-estate/
├── client/              # React frontend
│   ├── components/
│   ├── pages/
│   └── App.js
├── server/              # Express backend
│   ├── routes/
│   ├── controllers/
│   └── models/
├── .env
├── package.json
└── README.md
```

---

## 🧠 NLP Example (Planned Integration)

**User Query:** "Show me 3BHK flats in Bhopal under ₹50L"

**Parsed Object:**

```json
{
  "location": "Bhopal",
  "bhk": 3,
  "price_max": 5000000
}
```

---

## 📸 Screenshots

*(Add screenshots of UI, search filters, results page)*

---

## 🧪 How to Run Locally

```bash
# Backend
cd server
npm install
npm start

# Frontend
cd client
npm install
npm start
```

Visit: `http://localhost:3000`

---

## 📌 Future Enhancements

* OpenAI-powered assistant for user query parsing.
* Review visibility based on user's social network.
* Property recommendations based on past searches.
* Map-based property view.

---

## 👨‍💻 Contributions

This project was collaboratively developed. My key contributions:

* Full frontend design and dynamic filter integration.
* Backend APIs and MongoDB schema design.
* Integration planning for AI-powered search.

AI/NLP chatbot module was contributed by team member \[Name].

---

## 📬 Contact

Feel free to reach out for collaboration or discussion.
