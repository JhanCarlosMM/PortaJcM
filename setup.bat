@echo off
REM Setup script para Windows - Instalar dependencias del portafolio

echo.
echo ====================================
echo.  Portafolio Angular v21 - Setup
echo.
echo ====================================
echo.

REM Verificar Node.js
echo [*] Verificando Node.js...
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] Node.js no esta instalado. Descargalo de https://nodejs.org
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('node --version') do set NODE_VERSION=%%i
echo [✓] Node.js %NODE_VERSION% detectado
echo.

REM Verificar npm
echo [*] Verificando npm...
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo [X] npm no esta instalado
    pause
    exit /b 1
)
for /f "tokens=*" %%i in ('npm --version') do set NPM_VERSION=%%i
echo [✓] npm %NPM_VERSION% detectado
echo.

REM Instalar dependencias
echo [*] Instalando dependencias npm...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo [X] Error instalando dependencias
    pause
    exit /b 1
)
echo [✓] Dependencias instaladas
echo.

REM Crear directorios
echo [*] Creando estructura de carpetas...
if not exist "src\app\components" mkdir src\app\components
if not exist "src\app\features" mkdir src\app\features
if not exist "src\app\interfaces" mkdir src\app\interfaces
if not exist "src\app\services" mkdir src\app\services
if not exist "src\app\utils" mkdir src\app\utils
if not exist "src\app\constants" mkdir src\app\constants
if not exist "src\assets" mkdir src\assets
echo [✓] Estructura de carpetas lista
echo.

echo [✓] Setup completado!
echo.
echo Proximos pasos:
echo   npm start          - Iniciar servidor de desarrollo
echo   npm run build      - Compilar para produccion
echo   npm test           - Ejecutar pruebas
echo.
echo Documentacion disponible:
echo   - PORTFOLIO_GUIDE.md    - Guia completa del portafolio
echo   - COMPONENTS_GUIDE.md   - Documentacion de componentes
echo.
echo !Disfruta desarrollando! [93m^^[0m
echo.
pause
