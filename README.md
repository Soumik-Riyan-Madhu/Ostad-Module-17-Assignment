# NovaStudio — Creative Digital Agency Website

A modern, responsive, multi-page website built with **React.js** and **Tailwind CSS** as part of the Ostad Full Stack Web Development with JavaScript (MERN) & AI course — Module 17 Assignment.

## Overview

NovaStudio is a fictional creative digital agency website designed with a premium dark aesthetic and blue accent color. It presents the agency's services, portfolio, background, and contact information through a clean and responsive interface.

## Features

- Five dedicated pages: Home, About, Services, Gallery, and Contact
- Client-side navigation using React Router DOM
- Responsive layouts for desktop, tablet, and mobile
- Reusable UI components
- Interactive mobile navigation menu
- Gallery category filtering
- Contact form with input validation and submission feedback
- Modern dark-themed UI with blue accents

## Technologies Used

- React.js
- JavaScript (ES6+)
- Tailwind CSS
- React Router DOM
- Lucide React
- Vite

## Installation & Setup

### 1. Clone the repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
```

### 2. Navigate to the project directory

```bash
cd react-website
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

Open the local URL displayed in your terminal.

## Production Build

To generate an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Project Structure

```text
react-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Button.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   └── SectionTitle.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Services.jsx
│   │   ├── Gallery.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Important Notes

- This is a frontend-only demonstration project.
- The contact form currently displays submission feedback; it does not send emails or store data on a server.
- Portfolio entries and agency information are demonstration content.

## Assignment Information

**Course:** Full Stack Web Development with JavaScript (MERN) & AI  
**Platform:** Ostad  
**Module:** 17 — React.js Assignment  
**Project:** NovaStudio

---

Developed as a learning project using React.js and Tailwind CSS.