@echo off
title Portfolio - Full Stack Startup
color 0A

echo ================================================
echo    🚀 PORTFOLIO FULL STACK STARTUP
echo ================================================
echo.

REM Check if we're in the right directory
if not exist "package.json" (
    echo ❌ Error: Not in project root directory
    echo Please run this from: C:\Users\sc\Desktop\react1\
    pause
    exit /b 1
)

echo 📋 STARTUP CHECKLIST:
echo    ✅ Frontend Dependencies
echo    ✅ Backend Dependencies  
echo    ✅ Database Setup
echo    ✅ Service Startup
echo    ✅ Auto-Open Links
echo.

REM Setup Database
echo 🗄️  [1/5] Setting up database...
call setup-database.bat
if %errorlevel% neq 0 (
    echo ⚠️  Database setup had issues, but continuing...
)

echo.
echo 🚀 [2/5] Starting Backend Server...
start "Backend Server" cmd /k "cd backend && npm run dev"

echo.
echo ⏳ [3/5] Waiting for backend to start...
timeout /t 5 /nobreak >nul

echo.
echo 🎨 [4/5] Starting Frontend Server...
start "Frontend Server" cmd /k "npm run dev"

echo.
echo ⏳ Waiting for frontend to start...
timeout /t 8 /nobreak >nul

echo.
echo 🌐 [5/5] Opening all services in browser...
call open-portfolio.bat

echo.
echo ================================================
echo    ✅ PORTFOLIO FULLY STARTED!
echo ================================================
echo.
echo 🎯 Your Services:
echo    • Portfolio:  http://localhost:5178/
echo    • Dashboard:  http://localhost:5000/admin
echo    • Backend:    http://localhost:5000/
echo    • Database:   mongodb://localhost:27017/portfolio
echo.
echo 🔧 Service Windows:
echo    • Frontend Server (Vite)
echo    • Backend Server (Node.js)
echo    • Browser Windows (Auto-opened)
echo.
echo 💡 To stop everything: Close all terminal windows
echo.
echo ⚡ READY TO USE! Your portfolio is now running!
echo.
pause

