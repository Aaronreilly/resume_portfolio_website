# 🚀 Developer & Data Scientist Portfolio Website

An ultra-premium, modern, responsive portfolio website built for **R Aaron Reilly** (Aspiring Data Scientist, Data Analyst & Software Engineer) using **React 19**, **TypeScript**, **Tailwind CSS**, and **Vite**.

---

## 🌟 How to Edit for Future Use (Single Central File)

All information displayed across the entire portfolio website is controlled from **a single central configuration file**:

👉 **`src/portfolioConfig.ts`**

You do **not** need to touch any complex component code or HTML files to update your details!

### 📝 Editing Your Information

Open `src/portfolioConfig.ts` in your code editor to edit:
1. **Personal Information & Bio**:
   - `name`, `title`, `taglines`, `bio`, `careerObjective`, `socials` (GitHub, LinkedIn, LeetCode, Email, Phone, Location).
2. **Skills & Competencies**:
   - Grouped into categories (Data Science, ML, SQL, Web Dev, Tools) with 0-100 skill levels and descriptions.
3. **Projects & Interactive Case Studies**:
   - Title, description, technologies, GitHub link, live demo URL, problem statement, solution architecture, and metrics.
4. **Certifications & Credentials**:
   - Title, organization, issue date, credential ID, verification URL, and skills verified.
5. **Work Experience & Internships**:
   - Company, role, duration, responsibilities, achievements, technologies, and certificate link.
6. **Academic Highlights & Coursework**:
   - Semesters, subjects, lab focus, and GPA.
7. **Honors & Achievements**:
   - Competitions, hackathons, LeetCode milestones, and industrial training certificates.

---

## 🛠️ Local Development Setup

### Prerequisites
- Node.js (v18+ recommended)
- npm or bun

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Local Development Server
```bash
npm run dev
```
The website will open at `http://localhost:3000`.

### 3. Check for TypeScript / Lint Errors
```bash
node node_modules/typescript/bin/tsc --noEmit
```

### 4. Build Production Bundle
```bash
node node_modules/vite/bin/vite.js build
```

---

## 🌐 Free Web Deployment

### Deploying to GitHub Pages
1. Install `gh-pages`:
   ```bash
   npm install -D gh-pages
   ```
2. Add scripts to `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run:
   ```bash
   npm run deploy
   ```

### Deploying to Vercel or Netlify
1. Connect your GitHub repository to [Vercel](https://vercel.com) or [Netlify](https://netlify.com).
2. Set **Build Command**: `npm run build`
3. Set **Output Directory**: `dist`
4. Click **Deploy**!

---

## 💡 Developer & Customization Documentation Drawer
While running the website, click the **"Docs & Config"** button in the top navbar to open the interactive in-app guide!
