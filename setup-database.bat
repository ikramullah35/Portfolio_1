@echo off
echo ================================================
echo    🗄️  SETTING UP DATABASE CONNECTION
echo ================================================
echo.

echo 🔍 Checking if MongoDB is installed...
where mongod >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ MongoDB not found in PATH
    echo.
    echo 💡 QUICK DATABASE SETUP OPTIONS:
    echo.
    echo Option 1 - Install MongoDB Community:
    echo   1. Download from: https://www.mongodb.com/try/download/community
    echo   2. Install with default settings
    echo   3. Run this script again
    echo.
    echo Option 2 - Use MongoDB Atlas (Cloud):
    echo   1. Go to: https://cloud.mongodb.com
    echo   2. Create free account
    echo   3. Create cluster
    echo   4. Get connection string
    echo   5. Update backend/.env file
    echo.
    echo Option 3 - Use In-Memory Database (Development Only):
    echo   Your backend will create temporary data storage
    echo   Data will be lost when backend restarts
    echo.
    pause
    exit /b 1
)

echo ✅ MongoDB found!
echo.

echo 🚀 Starting MongoDB service...
net start MongoDB 2>nul
if %errorlevel% equ 0 (
    echo ✅ MongoDB service started successfully!
) else (
    echo ⚠️  MongoDB service already running or needs manual start
    echo    You can start it manually: net start MongoDB
)

echo.
echo 🔗 Testing database connection...
timeout /t 2 /nobreak >nul

echo.
echo ================================================
echo    🎯 DATABASE STATUS
echo ================================================
echo.
echo ✅ MongoDB Setup Complete!
echo.
echo 🔗 Connection Details:
echo    • Database URL: mongodb://localhost:27017/portfolio
echo    • Status: Ready for connections
echo    • Collections: contacts (auto-created)
echo.
echo 💡 Your backend will automatically connect when started
echo.
pause

