
# 🚀 Personal Portfolio – Abdullah Nadeem

Welcome to the source code for **Abdullah Nadeem's Personal Portfolio Website**!  
This project is a modern, fully responsive, and animated portfolio site built to showcase my skills, projects, and contact information in a visually engaging and interactive way.

---

## 📚 Table of Contents

- [✨ Overview](#-overview)
- [🌟 Features](#-features)
- [🔗 Live Demo](#-live-demo)
- [🛠️ Technologies Used](#-technologies-used)
- [📁 Project Structure](#-project-structure)
- [🎨 Design & Theme](#-design--theme)
- [🌀 Animations & Interactivity](#-animations--interactivity)
- [📱 Responsive Design](#-responsive-design)
- [⚙️ How It Works](#-how-it-works)
- [🧩 Customization](#-customization)
- [💻 How to Run Locally](#-how-to-run-locally)
- [🙌 Credits](#-credits)
- [📝 License](#-license)

---

## ✨ Overview

This website is a personal portfolio for **Abdullah Nadeem**, designed to present my professional profile, technical skills, and selected projects. It also provides an easy way for visitors to contact me and connect via social platforms. The site is crafted with a focus on clean code, accessibility, smooth animations, and a consistent, modern visual theme.

---

## 🌟 Features

- 🎬 **Animated Hero Section:**  
  Eye-catching introduction with animated text and background effects.

- 👤 **About Section:**  
  Detailed background, skills, and philosophy, with animated headings and a profile image.

- 🗂️ **Projects Showcase:**  
  Responsive project cards with images, descriptions, and hover animations.

- 📬 **Contact Section:**  
  Stylish contact form with animated feedback and a custom mail icon, plus scroll-triggered animations.

- 📱 **Sticky Header & Mobile Navigation:**  
  Always-accessible navigation with a hamburger menu for mobile, including animated open/close transitions.

- 🦄 **Animated Footer:**  
  Themed footer with social links, animated text, and copyright.

- 🌀 **Scroll-triggered Animations:**  
  Sections animate into view as you scroll, using Intersection Observer for performance.

- 💡 **Fully Responsive:**  
  Looks great on all devices, from large desktops to small mobile screens.

---

## 🔗 Live Demo

> _You can deploy this project on GitHub Pages, Vercel, Netlify, or your own server._  
> [🌐 **Live Demo**](#) <!-- Replace # with your live link -->

---

## 🛠️ Technologies Used

| Language / Tool | Icon | Description |
|-----------------|:----:|-------------|
| **HTML5**       | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" width="28"/> | Semantic markup for structure and accessibility |
| **CSS3**        | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" width="28"/> | Custom styles, Flexbox, Grid, gradients, and keyframe animations |
| **JavaScript**  | <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="28"/> | For interactivity, scroll animations, and mobile menu logic |
| **Font Awesome**| <i class="fa-brands fa-font-awesome" style="color:#339af0;font-size:28px"></i> | For icons in navigation, contact, and footer |
| **Google Fonts**| <img src="https://fonts.gstatic.com/s/i/googlefonts/mark/1.0.0/mark_48dp.png" width="28"/> | For custom typography (Dancing Script, Noto Sans) |
| **Intersection Observer API** | 🔭 | For performant scroll-triggered animations |

---

## 📁 Project Structure

```
/Personal-Portfolio
│
├── index.html         # Main HTML file
├── styles.css         # Main stylesheet
├── index.js           # Main JavaScript file
├── /assets            # Images, icons, and other assets
│    ├── sign.gif
│    ├── hero-img.jpg
│    ├── about-img.jpg
│    ├── cms.jpg
│    ├── social-media.jpg
│    ├── portfolio.png
│    └── gradient.jpg
└── README.md          # This file
```

---

## 🎨 Design & Theme

The website uses a **dark, modern theme** with accent colors in aqua and blue gradients.

- **Typography:**  
  - Headings use the _Dancing Script_ font for a personal, creative touch.
  - Body text uses _Noto Sans_ for readability.
- **Backgrounds:**  
  - Subtle gradients and background images are used for headings and section titles.
- **Cards & Containers:**  
  - Rounded corners, soft box-shadows, and glassmorphism effects for a modern look.
- **Color Palette:**  
  - ![#23272f](https://via.placeholder.com/15/23272f/23272f.png) `#23272f`, ![#2f3542](https://via.placeholder.com/15/2f3542/2f3542.png) `#2f3542`
  - Accents: ![#00ffcc](https://via.placeholder.com/15/00ffcc/00ffcc.png) `#00ffcc`, ![#3de2ff](https://via.placeholder.com/15/3de2ff/3de2ff.png) `#3de2ff`
  - Text: ![#f5f6fa](https://via.placeholder.com/15/f5f6fa/f5f6fa.png) `#f5f6fa`, with gradient and animated effects for headings.

---

## 🌀 Animations & Interactivity

- **Section Reveal:**  
  Each `.block` section animates (fade and scale in) when it enters the viewport, using the Intersection Observer API for performance and smoothness.
- **Hero Text Animation:**  
  The hero section features animated, color-changing text to highlight roles (Coder, Designer, Creator, Innovator).
- **Button & Card Hover Effects:**  
  Buttons and project cards have interactive hover states with color and shadow transitions.
- **Contact Form Animation:**  
  The contact form provides animated feedback on submission, and the mail icon animates to indicate a sent message.
- **Animated Footer:**  
  Footer text uses the same animated gradient as section headings for consistency.

---

## 📱 Responsive Design

- **Flexbox and CSS Grid** are used throughout for layout, ensuring content adapts to all screen sizes.
- **Media Queries** adjust padding, font sizes, and layout for tablets and mobile devices.
- **Mobile Navigation:**  
  The header switches to a hamburger menu on small screens, with a slide-in animated menu.

---

## ⚙️ How It Works

### 🧭 Header & Navigation

- The header is sticky and always visible.
- On desktop, navigation links are shown.
- On mobile, a hamburger icon toggles a slide-in menu with a close (X) icon.

### 👋 Hero Section

- Animated introduction with name and roles.
- Responsive image on the right.

### 👨‍💻 About Section

- Profile image and detailed bio.
- Animated heading with gradient background.

### 🗂️ Projects Section

- Each project is displayed as a card with an image, title, and description.
- Cards animate in as you scroll.

### 📬 Contact Section

- Two-column layout: info and form.
- Form fields animate on focus.
- On submit, button and mail icon animate to show success.

### 🦄 Footer

- Animated logo, navigation links, and social icons.
- Gradient and animated text for visual consistency.

---

## 🧩 Customization

- **Add/Edit Projects:**  
  Edit the `#projects` section in `index.html` to add or update your projects.
- **Change Images:**  
  Replace images in the `/assets` folder and update the `src` attributes in the HTML.
- **Update Social Links:**  
  Edit the footer section to include your real email, GitHub, and LinkedIn URLs.
- **Colors & Fonts:**  
  Adjust the CSS variables or color values in `styles.css` to match your personal branding.

---

## 💻 How to Run Locally

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/Personal-Portfolio.git
   cd Personal-Portfolio
   ```

2. **Open `index.html` in your browser.**
   - No build step is required; everything is static.

3. **(Optional) Serve with Live Server for hot reload:**
   - Use the [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) extension in VS Code, or run:
     ```bash
     npx live-server
     ```

---

## 🙌 Credits

- **Design & Development:** Abdullah Nadeem
- **Icons:** [Font Awesome](https://fontawesome.com/) <i class="fa-brands fa-font-awesome"></i>
- **Fonts:** [Google Fonts](https://fonts.google.com/) <img src="https://fonts.gstatic.com/s/i/googlefonts/mark/1.0.0/mark_48dp.png" width="18"/>
- **Inspiration:** Modern portfolio and glassmorphism UI trends

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  <b>Thank you for visiting my portfolio!</b><br>
  <i>If you have any feedback or want to collaborate, feel free to reach out via the contact form or social links below.</i>
</p>
