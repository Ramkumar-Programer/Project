@echo off
setlocal enabledelayedexpansion

set "packages=tensorflow streamlit yfinance numpy pandas matplotlib sklearn"

for %%p in (%packages%) do (
  set "package=%%p"
  call :check_install !package!
)

streamlit run Files\Final_Year_Project.py"

goto :eof

:check_install
pip show %1 >nul 2>&1
if !errorlevel! neq 0 (
  echo Installing %1...
  pip install %1
) else (
  echo %1 is already installed.
)
goto :eof