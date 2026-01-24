# Portfolio Site - Vue Components

## 🎉 New Components Added

This project now includes the converted **TechStackSection** and **ContactSection** from the React portfolio.

## ✅ Setup Instructions

### 1. Install Dependencies

Dependencies have already been installed:
- `gsap` - For scroll animations
- `@emailjs/browser` - For contact form email functionality
- `@tresjs/cientos` - For 3D model loading (Three.js utilities for Vue)

If needed, run:
```bash
npm install
```

### 2. Configure EmailJS

To enable the contact form email functionality:

1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Create a service and email template
3. Copy `.env.example` to `.env`:
   ```bash
   cp .env.example .env
   ```
4. Fill in your EmailJS credentials in `.env`:
   ```env
   VITE_APP_EMAILJS_SERVICE_ID=your_service_id
   VITE_APP_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_APP_EMAILJS_PUBLIC_KEY=your_public_key
   ```

### 3. Run the Development Server

```bash
npm run dev
```

## 📦 Components Overview

### TechStackSection
- **Location**: `src/components/TechStackSection.vue`
- **Features**:
  - Animated tech stack cards with GSAP
  - Scroll-triggered animations
  - Responsive grid layout
  - Hover effects
- **Usage**: Already added to `HomeView.vue`

### ContactSection
- **Location**: `src/components/ContactSection.vue`
- **Features**:
  - Email form with EmailJS integration
  - 3D interactive computer model
  - Form validation
  - Loading states
  - Styled with gradient button
- **Usage**: Already added to `HomeView.vue`

### Supporting Components

#### TitleHeader
- Reusable section header component
- Used by TechStackSection and ContactSection

#### ContactExperience
- 3D scene with interactive computer model
- Uses TresJS (Three.js for Vue)
- OrbitControls for rotation

#### Computer
- 3D computer model loader
- Loads GLB file with GLTF loader

## 🗂️ Project Structure

```
src/
├── components/
│   ├── TechStackSection.vue      # New! Tech stack grid with animations
│   ├── ContactSection.vue         # Updated! Now with EmailJS + 3D
│   ├── TitleHeader.vue            # New! Reusable section header
│   ├── ContactExperience.vue      # New! 3D scene
│   ├── Computer.vue               # New! 3D model component
│   └── ...
├── constants/
│   └── index.js                   # Tech stack data
└── views/
    └── HomeView.vue               # Updated with new sections

public/
├── images/
│   ├── models/                    # Tech stack images
│   └── arrow-down.svg
└── models/
    └── computer-optimized-transformed.glb
```

## 🎨 Customization

### Tech Stack Items
Edit `src/constants/index.js` to customize the tech stack items:

```javascript
export const techStackImgs = [
  {
    name: "Your Tech Name",
    imgPath: "/images/models/your-image.png",
  },
  // Add more items...
];
```

### Styling
Each component has scoped styles. You can modify them directly in the `<style scoped>` section of each component.

## 🚀 Building for Production

```bash
npm run build
```

## 📝 Notes

- The React portfolio folder (`react-portfolio-main`) can now be safely deleted
- All necessary assets have been copied to the Vue project
- The 3D model may take a moment to load on first visit
- EmailJS requires environment variables to send emails

## 🔧 Troubleshooting

### 3D Model Not Loading
- Check that `/public/models/computer-optimized-transformed.glb` exists
- Check browser console for errors
- Ensure `@tresjs/cientos` is installed

### Contact Form Not Sending
- Verify `.env` file exists with correct EmailJS credentials
- Check browser console for errors
- Ensure `@emailjs/browser` is installed

### Animations Not Working
- Ensure `gsap` is installed
- Check that the element IDs match (e.g., `#skills`, `#contact`)

## 📄 See Also

- [CONVERSION_SUMMARY.md](./CONVERSION_SUMMARY.md) - Detailed conversion notes
