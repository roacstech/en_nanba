@echo off
cd /d "%~dp0backend"
echo ===================================================
echo   STARTING EN NANBA BACKEND (PORT 4000)
echo ===================================================
node dist/main.js
pause
