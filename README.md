# Personal Portfolio & Blog Website

## 📌 Live Link

[Click here to visit the live website](https://nahiduzzaman-tawny.vercel.app/)

## 📖 About The Project

This is my personal portfolio and blog website built with Next.js and TypeScript. The website showcases my skills, projects, and blog posts while also allowing authenticated users to manage content through a secure dashboard.

## ✨ Features

### 🔹 Public Pages

- **Home Page (/)**
  - Personal introduction with bio and profile picture.
  - Skill showcase with icons and progress bars.
  - Featured projects section with descriptions and links.
  - Resume download option.
- **Projects Page (/projects)**
  - Displays a list of projects with images and descriptions.
  - Clicking a project opens a detailed project page.
- **Blog Page (/blog)**
  - Displays a list of blogs fetched from an API.
  - Clicking a blog opens a detailed blog post.
- **Contact Page (/contact)**
  - Simple contact form (name, email, message).
  - Messages are stored in a database.

### 🔹 Dashboard (For Authenticated Users)

- **Login Page (/dashboard)**
  - Authentication using NextAuth (Google Login).
- **Blog Management (/dashboard/blogs)**
  - Create, read, update, and delete blog posts.
  - Supports markdown formatting for content.
- **Project Management (/dashboard/projects)**
  - CRUD operations for projects.
  - Upload project images, titles, descriptions, and links.
- **Message Management (/dashboard/messages)**
  - View messages submitted via the contact form.

## 🛠 Tech Stack

### Frontend:

- **Next.js (React Framework)**
- **TypeScript**
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **ShadCN UI** for modern UI components

### Backend:

- **Node.js & Express** (Simple backend for API management)
- **MongoDB** (Database for storing projects, blogs, and messages)
- **Next.js API Routes** (Optional backend logic)

### Authentication:

- **NextAuth.js** (Google authentication)

### Other Tools & Libraries:

- **React Hook Form** (Form validation)
- **React Query** (Efficient data fetching and caching)
- **Axios** (API calls)
- **Stripe** (Payment handling for potential future features)
- **Socket.io** (For real-time features like live chat)

## 🚀 Installation & Setup

To run this project locally, follow these steps:

### Prerequisites

- Install **Node.js** (Recommended version: `>=16.x`)
- Install **MongoDB** and run a local instance or use MongoDB Atlas.

### Steps

1. **Clone the repository**

   ```
   git clone https://github.com/md-nahiduzzaman/personal-portfolio-blog.git
   cd personal-portfolio-blog
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file in the root directory and add the following variables:

   ```env
   NEXT_PUBLIC_MONGO_URI=your_mongodb_connection_string
   NEXT_PUBLIC_NEXTAUTH_SECRET=your_nextauth_secret
   NEXT_PUBLIC_GOOGLE_CLIENT_ID=your_google_client_id
   NEXT_PUBLIC_GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

4. **Run the development server**

   ```
   npm run dev
   ```

   The app will be available at **http://localhost:3000**

5. **Build for production**
   ```
   npm run build
   ```

## 📜 Deployment

The project is deployed on **Vercel**. To deploy your own version:

- Install the Vercel CLI: `npm install -g vercel`
- Run `vercel` and follow the setup process.

## 🎁 Bonus Features (Optional)

- Dark mode toggle 🌙
- Server-Side Rendering (SSR) & Static Site Generation (SSG) for better SEO 🚀
- Markdown support for blog posts 📝
- Real-time chat feature using **Socket.io** 💬
- More animations using **Framer Motion** 🎭

## 📝 Future Improvements

- Implement AI-based blog suggestions.
- Add a newsletter subscription feature.
- Improve SEO optimizations with structured metadata.

## 👨‍💻 Author

**Nahiduzzaman Tawny**

- [GitHub](https://github.com/md-nahiduzzaman)
- [LinkedIn](https://www.linkedin.com/in/mdnahiduzzaman/)
- [Portfolio](https://nahiduzzaman-tawny.vercel.app/)

---

🚀 _Feel free to contribute, report issues, or suggest features!_
