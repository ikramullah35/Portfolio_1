@echo off
echo 🚀 Starting Portfolio Dashboard
echo.

echo 📦 Installing dependencies...
call npm install

echo 🗄️ Starting MongoDB...
start "" mongod --quiet
timeout /t 3

echo 🔧 Starting Backend Server with Dashboard...
echo.
echo ✅ Dashboard will be available at:
echo 📊 http://localhost:5000/admin
echo 🔧 API: http://localhost:5000
echo.

npm run dev

