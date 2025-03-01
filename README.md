# Yendou – SWE Working Student Assignment


## 🚀 Getting Started

These instructions will guide you through setting up and running the project on your local machine.

### 📌 Prerequisites

Before you begin, ensure that **Node.js** and **npm** are installed on your machine. You can download and install them from [Node.js official website](https://nodejs.org/en/).

#### Required Versions:

- **Node.js** (v12 or later)
- **npm** (comes with Node.js installation)

To verify successful installation, run the following commands in your terminal:

```bash
node -v
```

```bash
npm -v
````

### 📥 Installation

1. Clone the repository to your local machine:
```bash 
git clone https://github.com/ViravRakholiya/Yendou-Assignment.git
```

2. Navigate into the project directory.
```bash 
cd Yendou-Assignment
```

3. Install project dependencies:
```bash
npm install
```


### 🛠️ Project Structure
```bash
src/
│── components/       # UI Components
│── context/          # Context API Providers
│── hooks/            # Custom hooks
│── App.tsx           # Main App Component
│── main.tsx          # Entry point
│── vite-env.d.ts     # Vite TypeScript config
```

### ▶️ Running the Project

#### Starting the Development Server
To launch the development server, use the following command:
```bash
npm run dev
```
Once the server runs, open the following link in your web browser: [http://localhost:5173](http://localhost:5173). If this link doesn't work, refer to the URL displayed on your terminal.


### 🏗️ Building for Production
To create an optimized production build, run the following command
```bash
npm run build
```

### 📦 Running Production Build Locally
Once the build is complete, you can use a local static file server to preview it

#### Using Vite’s Built-in Preview Mode
Vite provides a built-in way to serve the production build locally, so run the following command
```bash
npm run preview
```

This will serve the dist/ folder on a local server, and you can access it using the URL displayed in the terminal.