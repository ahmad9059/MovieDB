# 🎬 SCSDB - Movie & TV Database

<div align="center">
  <img src="public/logo.svg" alt="SCSDB Logo" width="120" height="120">
  
  **A modern, responsive movie and TV show database built with React**
  
  [![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![TailwindCSS](https://img.shields.io/badge/Tailwind-4.1.10-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Redux](https://img.shields.io/badge/Redux-2.8.2-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux-toolkit.js.org/)
</div>

## ✨ Features

- 🎭 **Browse Movies & TV Shows** - Explore trending, popular, and latest content
- 🔍 **Advanced Search** - Find your favorite movies, shows, and celebrities
- 📱 **Responsive Design** - Seamless experience across all devices
- 🎥 **Trailer Integration** - Watch trailers directly in the app
- 👥 **Celebrity Profiles** - Detailed information about actors and directors
- ♾️ **Infinite Scroll** - Smooth browsing with lazy loading
- 🎨 **Modern UI** - Clean, intuitive interface with Tailwind CSS
- ⚡ **Fast Performance** - Built with Vite for lightning-fast development

## 🚀 Quick Start

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/yourusername/scsdb.git
   cd scsdb
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Get your API key from [The Movie Database (TMDB)](https://www.themoviedb.org/settings/api)
   - Update the authorization token in `src/utils/axios.jsx`

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to `http://localhost:5173` to see the app in action!

## 🛠️ Available Scripts

| Command           | Description                 |
| ----------------- | --------------------------- |
| `npm run dev`     | Start development server    |
| `npm run build`   | Build for production        |
| `npm run preview` | Preview production build    |
| `npm run lint`    | Run ESLint for code quality |

## 📁 Project Structure

```
scsdb/
├── public/                 # Static assets
│   ├── logo.svg           # App logo
│   ├── Loader.gif         # Loading animation
│   └── ...
├── src/
│   ├── components/        # React components
│   │   ├── partials/      # Reusable UI components
│   │   │   ├── Header.jsx
│   │   │   ├── Sidenav.jsx
│   │   │   ├── Cards.jsx
│   │   │   └── ...
│   │   ├── Home.jsx       # Home page
│   │   ├── Movie.jsx      # Movies listing
│   │   ├── Tvshow.jsx     # TV shows listing
│   │   └── ...
│   ├── store/             # Redux store
│   │   ├── actions/       # Redux actions
│   │   └── reducers/      # Redux reducers
│   ├── utils/
│   │   └── axios.jsx      # API configuration
│   ├── App.jsx            # Main app component
│   └── main.jsx           # App entry point
├── package.json
└── README.md
```

## 🎯 Core Components

### 🏠 **Home**

- Dashboard with trending content
- Quick navigation to different sections
- Featured movies and TV shows

### 🎬 **Movies & TV Shows**

- Browse by categories (trending, popular, latest)
- Detailed information pages
- Integrated trailer viewing
- Cast and crew information

### 👤 **People**

- Celebrity profiles and filmographies
- Actor and director information
- Related movies and shows

### 🔍 **Search & Navigation**

- Intuitive top navigation
- Category-based filtering
- Responsive sidebar navigation

## 🔧 Tech Stack

### Frontend

- **React 19.1.0** - Modern UI library with latest features
- **React Router DOM** - Client-side routing
- **TailwindCSS 4.1.10** - Utility-first CSS framework
- **Vite** - Next-generation frontend tooling

### State Management

- **Redux Toolkit** - Predictable state container
- **React Redux** - Official React bindings for Redux

### API & Data

- **Axios** - HTTP client for API requests
- **TMDB API** - The Movie Database for content data

### Additional Libraries

- **React Player** - Video player component
- **React Infinite Scroll** - Infinite scrolling functionality

## 🌟 Key Features Breakdown

### 📱 Responsive Design

Built mobile-first with TailwindCSS, ensuring perfect display on:

- 📱 Mobile devices
- 📟 Tablets
- 💻 Desktop computers
- 🖥️ Large screens

### ⚡ Performance Optimizations

- Lazy loading with infinite scroll
- Optimized image loading
- Code splitting with React Router
- Vite's fast HMR (Hot Module Replacement)

### 🎨 User Experience

- Smooth animations and transitions
- Loading states with custom animations
- Error handling with 404 pages
- Intuitive navigation patterns

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the comprehensive movie and TV data API
- [React](https://reactjs.org/) team for the amazing framework
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- All the open-source contributors who made this project possible

## 📞 Support

If you have any questions or need help, feel free to:

- Open an issue on GitHub
- Contact us through the app's contact page
- Check out the documentation

---

<div align="center">
  <p>Made with ❤️ by the SCSDB Team</p>
  <p>⭐ Star this repo if you found it helpful!</p>
</div>
 SCSDB - Movie & TV Database

<div align="center">
  <img src="public/logo.svg" alt="SCSDB Logo" width="120" height="120">
  
  **A modern, responsiv
