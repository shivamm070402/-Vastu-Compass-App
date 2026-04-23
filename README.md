# 🧭 Vastu Compass App

<p align="center">
  <img src="assets/screenshots/compass.png" width="250" alt="App Preview" />
</p>

<p align="center">
  A modern <b>Vastu Compass mobile app</b> built with React Native + Expo that provides real-time direction, degree, and Vastu guidance using device sensors.
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-0.7x-blue" />
  <img src="https://img.shields.io/badge/Expo-SDK%2050-black" />
  <img src="https://img.shields.io/badge/Platform-Android-green" />
  <img src="https://img.shields.io/badge/License-MIT-yellow" />
</p>

---

## ✨ Features

* 🧭 Real-time compass using magnetometer
* 🔄 Smooth animated rotation
* 📍 Live GPS location (Latitude & Longitude)
* 🏠 Vastu-based direction insights
* 📱 Clean circular UI (production-style)
* ⚡ Lightweight & optimized

---



---

## 🎥 Demo 

<p align="center">
  <img src="assets/screenshots/demo.gif" width="250" alt="Demo GIF"/>
</p>

---

## 🛠️ Tech Stack

* ⚛️ React Native
* 🚀 Expo
* 🧭 expo-sensors
* 📍 expo-location
* 🎞️ Animated API

---

## 📁 Project Structure

```bash
project-root/
│
├── app/
│   └── (tabs)/
│       └── index.tsx
│
├── assets/
│   ├── images/
│   │   ├── vastuapp.png
│   │   └── needle.png
│   │
│   └── screenshots/
│       ├── compass.png
│       ├── home.png
│       ├── location.png
│       └── demo.gif
│
├── app.json
├── eas.json
└── package.json
```

---

## ⚙️ Setup & Run

### 1️⃣ Clone Repo

```bash
git clone https://github.com/your-username/vastu-compass.git
cd vastu-compass
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Start App

```bash
npx expo start
```

👉 Scan QR using Expo Go

---

## 📦 Build APK (Universal)

Using Expo Application Services (EAS):

```bash
npm install -g eas-cli
eas login
eas build:configure
eas build -p android --profile preview
```

👉 Generates APK compatible with most Android devices

---

## ⚠️ Important Notes

### ✅ Use Relative Paths for Assets

```js
require('../../assets/images/vastuapp.png')
```

❌ Avoid:

```js
C:\Users\...
```

---

### 📡 Permissions Required

* Location access
* Sensor availability

---

### 📱 Compatibility

* Android 5.0+ (minSdkVersion 21)
* Works on ~95% devices

---

## 🧠 Vastu Logic

| Direction | Meaning                 |
| --------- | ----------------------- |
| N         | Career, Growth 🚀       |
| NE        | Wealth, Spirituality 💰 |
| E         | Health, Energy 🌿       |
| SE        | Fire, Kitchen 🔥        |
| S         | Fame ⭐                  |
| SW        | Stability 🏠            |
| W         | Profit 💼               |
| NW        | Networking 🤝           |

---

## 🔮 Future Improvements

* 🌍 Map integration
* 🎯 Compass calibration
* 🔐 Login system
* 🎨 Advanced UI animations
* 🏪 Play Store release

---

## 🚀 Download APK

👉 [Download Latest APK](#)
(*Upload your APK and replace this link*)

---

## 🤝 Contributing

Contributions are welcome!

```bash
fork → clone → branch → commit → PR 🚀
```

---

## 👨‍💻 Author

**Shivam Mohite**

---

## ⭐ Support

If you like this project:

👉 Give it a ⭐ on GitHub
👉 Share with others

---

