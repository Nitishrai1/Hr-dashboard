# 🧠 HR Dashboard — TurboRepo + Next.js

Welcome to the **HR Dashboard**, a modular and scalable human resource management interface built with **Next.js** inside a **TurboRepo** monorepo architecture. This project is designed with performance, maintainability, and user experience in mind.

## 🗂️ Monorepo Structure
```bash
hr-dashboard/
├── apps/
│ └── hr-dashboard/ # Main Next.js application
│ ├── app/ # App routing (Next.js App Router)
│ ├── components/ # Shared UI components
│ ├── context/ # Global context providers
│ ├── hooks/ # Reusable custom hooks
│ ├── lib/ # Utilities and helper functions
│ ├── public/ # Static assets
│ ├── styles/ # Tailwind/global styles
│ ├── next.config.mjs
│ ├── tailwind.config.ts
│ ├── postcss.config.mjs
│ └── tsconfig.json
```

## 🚀 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/hr-dashboard.git
cd hr-dashboard
```

## 🚀 Install packages
```bash
npm i -f
```

## Run the application 
```bash
npm run dev
```

✨ Features Implemented
1. 🏠 Dashboard Homepage (/)
Fetches dummy user data from https://dummyjson.com/users?limit=20

Renders user cards with:

Full Name, Email, Age, Department

Performance Rating (1–5 stars)

Action buttons: View, Bookmark, and Promote

2. 🔍 Search & Filter
Search by name, email, and department

Multi-select filters for department and performance rating

3. 👤 Dynamic User Details (/employee/[id])
Detailed profile view including:

Address, Phone, Bio, and Performance History

Tabbed UI with:

Overview

Projects

Feedback (all mocked)

4. 📌 Bookmark Manager (/bookmarks)
Lists all bookmarked employees

Allows removing bookmarks and UI actions like Promote or Assign to Project

5. 📊 Analytics Page (/analytics)
Displays charts using Chart.js (or similar)

Department-wise average ratings

Bookmark trends (mocked data)

## Screen short

![Dashboard Preview](apps\hr-dashboard\images\Screenshot 2025-05-23 223248.png)
