# ProcureQA - Frontend (Next.js)

This is the frontend for the **ProcureQA** project, built using **React** and **Next.js**. It handles user interface, user login/signup, and communication with the backend APIs.

## 🚀 Tech Stack
- Next.js
- React
- Tailwind CSS (optional)
- Axios
- TypeScript (optional)

## 📁 Folder Structure
- `pages/` – Routing (e.g., `login.js`, `signup.js`)
- `components/` – Reusable components
- `public/` – Static assets
- `styles/` – Custom CSS or Tailwind config
- `utils/` – API helper functions

## ⚙️ Setup Instructions

```bash
# 1. Clone the repo
git clone https://github.com/krishnashukla1/ProcureQa-NextReact.git
cd ProcureQa-NextReact

# 2. Install dependencies
npm install

# 3. Create a .env.local file
# Replace with your backend API URL
NEXT_PUBLIC_API_URL=http://localhost:5000/api

# 4. Run the app
npm run dev
