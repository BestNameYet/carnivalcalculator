# 🎪 Carnival Calculator

**Carnival Calculator** is a fully client-side, single-page web application for managing ticket and wristband sales at carnival events. It supports tax jurisdiction selection, cash input, and change breakdown — ideal for kiosks or mobile POS setups.

---

## 🚀 Live Demo

👉 [Launch the App](https://bestnameyet.github.io/carnivalcalculator/)

*Make sure to enable GitHub Pages in your repository settings under the root directory (`/`).*

---

## 🧭 Features

- 🎯 **Location selection** with automatic tax rate handling
- 🎟️ Sale tracking for:
  - Family Packs
  - Discounted Wristbands
  - Full-Price Wristbands
  - Ride Tickets
- 💵 **Cash received input** and **change calculation**
- 🧾 Real-time **order receipt and summary**
- 🧠 Persistent state via `localStorage`

---

## 🗂 Folder Structure

```plaintext
📁 carnivalcalculator/
├── index.html               # Main entry point
├── screens/                 # HTML fragments for each screen in the wizard flow
│   └── screen-*.html
├── scripts/                 # JS logic for state management, rendering, and navigation
│   └── *.js
```

---

## 🛠️ Setup & Deployment

You can deploy this directly using GitHub Pages:

1. Clone or upload this repo to GitHub.
2. Enable GitHub Pages:
   - Go to `Settings` → `Pages`
   - Set Source to `main` branch → `/ (root)`
3. Visit your deployed app at:

   ```
   https://bestnameyet.github.io/carnivalcalculator/
   ```

---

## ✍️ License

This project is provided as-is for educational and operational use. No warranties expressed or implied.

---

## 🙌 Acknowledgments

Built with purpose for flexible carnival operations.  
Tax data courtesy of *SalesTaxHandbook*, *zamp.com*, and *taxhero.net*.
