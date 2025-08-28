# 🎉 Events App

A simple event management platform built with **Next.js** and **Supabase** where users can register, create events, and RSVP to events.  
Deployed on **Vercel** and powered by a **Supabase backend**.

---

## 🚀 Live Demo
🔗 **Vercel Deployment:** [Events App Live](https://events-app-tau-steel.vercel.app/)  

🔗 **GitHub Repository:** [Events App Repo](https://github.com/ravillaanusha0-cloud/Events-app)

---

## 📌 Features
- User registration (via `users_table`)
- Event creation and listing (via `events`)
- RSVP functionality for users to join events (via `rsvps`)
- Connected frontend with Supabase backend

---

## 🗄️ Database Schema

### 1. `users_table`
| Column      | Type    | Description            |
|-------------|---------|------------------------|
| userid      | varchar | Unique user ID         |
| name        | text    | Name of the user       |
| email       | text    | User email             |
| created_at  | date    | Account creation date  |

### 2. `events`
| Column      | Type    | Description            |
|-------------|---------|------------------------|
| eventid     | varchar | Unique event ID        |
| title       | text    | Event title            |
| description | text    | Event description      |

### 3. `rsvps`
| Column      | Type    | Description            |
|-------------|---------|------------------------|
| rsvpid      | varchar | Unique RSVP ID         |
| userid      | varchar | Links to `users_table` |
| eventid     | varchar | Links to `events`      |
| status      | text    | RSVP status            |

---

## 🛠️ Tech Stack
- **Frontend:** Next.js (React framework)
- **Backend:** Supabase (PostgreSQL + Auth + API)
- **Deployment:** Vercel

---

## 📷 Screenshots
- ER diagram & schema export available in `schema.sql` and `/images` (if added).  
- Events list visible on deployment. Users and RSVPs linked but may show empty due to sample data.

---

## 📖 How It Works
1. Supabase stores **users, events, and RSVPs**.  
2. The Next.js app fetches data from Supabase using the **Supabase client**.  
3. Pages:  
   - `/events` → List of events  
   - `/users` → List of users  
   - `/rsvps` → List of RSVPs  

---

## ⚠️ Notes for Instructor
- Deployment succeeds, but **users and RSVPs pages may appear empty** depending on seeded data in Supabase.  
- The **events page** shows created events (fetched from the database).  
- This submission includes both **GitHub repo** (for code) and **Vercel deployment** (for live demo).  

---

## 👩‍💻 Author
Anusha Ravilla
