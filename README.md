Mini Employee Mood Tracker - Complete Documentation

Project Overview

The Mini Employee Mood Tracker is a full stack web app designed to provide organizations with a way to track employee well-being, through a simple mood tracker. Employees are able to submit their mood in seconds and administrator's are able to see a clean dashboard with aggregated mood data.


Key Features

Basic Mood Submission: Ability to submit a mood based on 3 options (Happy, Neutral, Sad)
Optional Comments: Employees can provide context for their mood submission
Admin Dashboard: Ability to see real time all mood submissions
Responsive: Desktop and mobile devices work seamlessly
Clean UI: Modern interface leveraging Shadcn/UI components
Dark/Light Mode: Optional light/dark mode theme for users

User Stories

As an Employee: I want to be able to quickly submit my mood so my organization can know about team wellbeing 
As an Admin: I want to view mood trends and individual entries to help make informed decisions regarding team support

Technical Stack

Frontend

Next.js 14/15: React framework with App Router
TypeScript: Type-safe JavaScript development
TailwindCSS: Utility-first CSS framework
Shadcn/UI: High-quality React components
Lucide React: Icon library for consistent iconography

Backend

Next.js API Routes: Server-side API endpoints
In-Memory Storage: Simple data persistence using TypeScript arrays
TypeScript: Type-safe backend development

Development Tools

ESLint: Code linting
Prettier: Code formatting
Git: Version control
Vercel: Deployment platform

Project Structure
mood-tracker/
├── app/
│   ├── layout.tsx                 
│   ├── page.tsx                  
│   ├── globals.css               
│   ├── mood/
│   │   └── page.tsx              
│   ├── admin/
│   │   └── page.tsx              
│   └── api/
│       └── route.ts         
├── components/
│   ├── ui/                    
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── table.tsx
│   │   ├── textarea.tsx
│   │   └── toast.tsx
│   ├── mood-modal.tsx             
│   ├── navigation.tsx   
│   ├── theme-provider.tsx          
│   └── theme-toggle.tsx             
├── lib/
│   ├── utils.ts  
│   ├── mood.ts                
│   └── helper.ts                                 
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── next.config.js
└── README.md
