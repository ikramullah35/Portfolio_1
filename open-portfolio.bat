@echo off
echo ================================================
echo    🚀 OPENING PORTFOLIO SERVICES AUTOMATICALLY
echo ================================================
echo.

REM Wait a moment for services to be ready
echo ⏳ Checking services status...
timeout /t 3 /nobreak >nul

echo.
echo 📱 Opening Portfolio Website...
start "" "http://localhost:5178/"

echo.
echo 📊 Opening Admin Dashboard...
start "" "http://localhost:5000/admin"

echo.
echo 🔧 Opening Connection Checker...
start "" "check-backend.html"

echo.
echo ================================================
echo    ✅ ALL SERVICES OPENED SUCCESSFULLY!
echo ================================================
echo.
echo 🎯 Your Portfolio Services:
echo    • Portfolio Website: http://localhost:5178/
echo    • Admin Dashboard:   http://localhost:5000/admin
echo    • Connection Status: check-backend.html
echo.
echo 💡 TIP: Keep this window open to see any updates
echo.
pause

