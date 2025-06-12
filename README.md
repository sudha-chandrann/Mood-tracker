#  Mini Employee Mood Tracker

A simple and effective full-stack web app for tracking employee well-being through mood submissions.

---

##  Project Overview

The **Mini Employee Mood Tracker** allows organizations to easily monitor their team’s emotional health. Employees can submit their mood with just a few clicks, and administrators get access to a real-time dashboard that visualizes mood trends and individual submissions.

---

##  Key Features

- **Basic Mood Submission**: Select between **Happy**, **Neutral**, and **Sad**.
- **Optional Comments**: Add context to each submission.
- **Admin Dashboard**: View real-time data of all mood entries.
- **Responsive Design**: Seamless experience on both desktop and mobile.
- **Clean UI**: Built with modern components from **Shadcn/UI**.
- **Dark/Light Mode**: Theme toggle support for user preference.

---

##  User Stories

- **As an Employee**:  
  I want to quickly submit my mood so my organization can stay aware of team wellbeing.

- **As an Admin**:  
  I want to view mood trends and individual entries to help make informed decisions and support the team better.

---

##  Tech Stack

### Frontend
- **Next.js 14/15** – App Router-based React framework
- **TypeScript** – Type-safe development
- **TailwindCSS** – Utility-first styling
- **Shadcn/UI** – Modern UI components
- **Lucide React** – Lightweight and consistent icon set

### Backend
- **Next.js API Routes** – Lightweight server-side endpoints
- **In-Memory Storage** – Simple persistence using arrays
- **TypeScript** – Shared across backend and frontend

### Development Tools
- **ESLint** – Linting for code quality
- **Prettier** – Code formatting
- **Git** – Version control
- **Vercel** – Hosting and deployment

---

##  Project Structure

```txt
mood-tracker/
├── app/layout.tsx
├── app/page.tsx
├── app/globals.css
├── app/mood/page.tsx
├── app/admin/page.tsx
├── app/api/route.ts
├── components/ui/button.tsx
├── components/ui/card.tsx
├── components/ui/table.tsx
├── components/ui/textarea.tsx
├── components/ui/toast.tsx
├── components/mood-modal.tsx
├── components/navigation.tsx
├── components/theme-provider.tsx
├── components/theme-toggle.tsx
├── lib/utils.ts
├── lib/mood.ts
├── lib/helper.ts
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── README.md
```
