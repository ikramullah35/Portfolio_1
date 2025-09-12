@echo off
echo 🚀 Starting Portfolio Development Environment
echo.

echo 📦 Installing backend dependencies...
cd backend
call npm install
echo.

echo 🗄️ Starting MongoDB (if installed)...
start "" mongod --quiet
timeout /t 3

echo 🔧 Starting Backend Server...
start "Backend Server" cmd /k "npm run dev"
echo.

echo ⏱️ Waiting for backend to start...
timeout /t 5

echo 🎨 Starting Frontend...
cd ..
start "Frontend Dev Server" cmd /k "npm run dev"

echo.
echo ✅ Both servers should be starting!
echo 📱 Frontend: http://localhost:5174
echo 🔧 Backend:  http://localhost:5000
echo.
echo Press any key to close this window...
pause > nul
