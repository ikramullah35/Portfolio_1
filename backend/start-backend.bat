@echo off
echo 🔧 Starting Portfolio Backend Server
echo.

echo 📦 Installing dependencies...
call npm install

echo 🗄️ Starting MongoDB...
start "" mongod --quiet
timeout /t 3

echo 🚀 Starting Backend API Server...
npm run dev
