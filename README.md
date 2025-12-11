# DevOps Portfolio Website

A modern, responsive portfolio website for a DevOps Engineer built with React, Vite, and Vanilla CSS.

## Features
- **Responsive Design**: Mobile-first approach.
- **Dynamic Content**: All portfolio data is loaded from a JSON file (`src/data/portfolio.json`).
- **Clean UI**: Custom design with dark mode aesthetic.
- **Sections**: Hero, Skills, Experience, Projects (with filtering), Contact.

## Project Structure
```
src/
├── components/   # React components (Header, Hero, etc.)
├── data/         # Data content (portfolio.json)
├── App.jsx       # Main application component
├── index.css     # Global styles and variables
└── main.jsx      # Entry point
```

## Getting Started

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Run Development Server**
   ```bash
   npm run dev
   ```

3. **Build for Production**
   ```bash
   npm run build
   ```

   npm run preview
   ```

## Docker & Kubernetes

### Build Docker Image
```bash
docker build -t devops-portfolio .
```

### Run Locally (Docker)
```bash
docker run -p 8080:80 devops-portfolio
```
The app will be available at `http://localhost:8080`.

### Deploy to Kubernetes
1. Ensure your image is pushed to a registry accessible by your cluster.
2. Update the image name in `k8s-deployment.yaml`.
3. Apply the manifests:
```bash
kubectl apply -f k8s-deployment.yaml
```

## Customization
- Update `src/data/portfolio.json` with your own information.
- Modify `src/index.css` to change the color scheme or typography.

## License
MIT
