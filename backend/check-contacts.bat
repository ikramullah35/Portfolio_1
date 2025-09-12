@echo off
echo 📊 Portfolio Contact Data Viewer
echo.

echo Choose an option:
echo 1. View all contact submissions
echo 2. View latest contact submission
echo 3. Search by email
echo 4. Start MongoDB and check data
echo.

set /p choice="Enter your choice (1-4): "

if "%choice%"=="1" (
    echo.
    echo 📋 Fetching all contact submissions...
    node view-contacts.js all
) else if "%choice%"=="2" (
    echo.
    echo 📧 Fetching latest contact submission...
    node view-contacts.js latest
) else if "%choice%"=="3" (
    set /p email="Enter email to search for: "
    echo.
    echo 🔍 Searching for contacts with email: !email!
    node view-contacts.js search !email!
) else if "%choice%"=="4" (
    echo.
    echo 🗄️ Starting MongoDB...
    start "" mongod --quiet
    timeout /t 3
    echo.
    echo 📋 Checking database...
    node view-contacts.js all
) else (
    echo ❌ Invalid choice. Please run the script again.
)

echo.
echo Press any key to exit...
pause > nul
