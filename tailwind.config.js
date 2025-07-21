/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        homeBg: "url('src/assets/ServicesBackground.jpg')",
        aboutBg: "url('src/assets/AboutBackground.jpg')",
        webDevBg: "url('src/assets/WebDevBg.jpg')",
        mobileAppsBg: "url('src/assets/MobileAppBg.jpg')",
        bulkSMSBg: "url('src/assets/BulkBg.jpg')",
        bizManagementBg: "url('src/assets/BizMgtBg.jpg')",
        webDeisgnBg: "url('src/assets/AuAxBg.jpg')",
        projectsBg: "url('src/assets/ProjectBg.jpg')",
        contactsBg: "url('src/assets/Contacts.jpg')",
        faqBg:"url('src/assets/FaqBg.jpg')",
        estimateBg:"url('src/assets/EstimateBg.jpg')"
      },
      colors : {
        primary: "yellow-500",
        secondary: "slate-800"
      }
    },
  },
  plugins: [],
}

