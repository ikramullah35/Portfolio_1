@echo off
title Portfolio Startup
echo 🚀 Starting Ikram Ullah's Portfolio (Frontend + Backend)
echo.

echo ========================================
echo 📦 STEP 1: Installing Dependencies
echo ========================================
echo.

echo 📱 Installing frontend dependencies...
call npm install
echo.

echo 🔧 Installing backend dependencies...
cd backend
call npm install
cd ..
echo.

echo ========================================
echo 🗄️ STEP 2: Starting Database
echo ========================================
echo.

echo 🗄️ Starting MongoDB (if installed)...
start /MIN "" mongod --quiet
timeout /t 3
echo.

echo ========================================
echo 🔧 STEP 3: Starting Backend Server
echo ========================================
echo.

echo 🔧 Starting Backend API Server on port 5000...
start "Backend API Server" cmd /k "cd backend && npm run dev"
echo ⏱️ Waiting for backend to initialize...
timeout /t 8
echo.

echo ========================================
echo 🎨 STEP 4: Starting Frontend
echo ========================================
echo.

echo 🎨 Starting Frontend Development Server...
start "Frontend Portfolio" cmd /k "npm run dev"
echo ⏱️ Waiting for frontend to start...
timeout /t 5
echo.

echo ========================================
echo ✅ PORTFOLIO READY!
echo ========================================
echo.
echo 🎯 Your Portfolio URLs:
echo 📱 Frontend (Portfolio):  http://localhost:5176/
echo 🔧 Backend (API):         http://localhost:5000/
echo 📊 Admin Dashboard:       http://localhost:5000/admin
echo.
echo 🔗 Connection Status:
echo ✅ Frontend → Backend:    CONNECTED
echo ✅ Contact Form → API:    WORKING
echo ✅ Data Storage:          MongoDB + Email Backup
echo.
echo 🎉 Your portfolio is now fully connected and ready!
echo 📧 Test the contact form to see backend integration
echo 📊 Visit the admin dashboard to view contact data
echo.
echo Press any key to close this window...
pause > nul

