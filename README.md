# Restaurent UI (static React)

This folder contains a small Vite + React static UI and a multi-stage `Dockerfile` that builds the app and serves it with Nginx.

Build with Docker:

```powershell
docker build -t restaurent-ui:latest -f Docker-tasks/frontend-project/Dockerfile Docker-tasks/frontend-project
docker run -p 8080:80 restaurent-ui:latest
```

Or for local development:

```powershell
npm install
npm run dev
```
