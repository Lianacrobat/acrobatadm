@echo off
echo ========================================
echo    ACROBATA DEMENTE - DEPLOY SETUP
echo ========================================
echo.

echo [1/5] Inicializando repositorio Git...
git init
if %errorlevel% neq 0 (
    echo Error: No se pudo inicializar Git
    pause
    exit /b 1
)

echo [2/5] Añadiendo archivos al repositorio...
git add .
if %errorlevel% neq 0 (
    echo Error: No se pudieron añadir los archivos
    pause
    exit /b 1
)

echo [3/5] Creando commit inicial...
git commit -m "feat: proyecto completo Acrobata Demente con mejoras de seguridad"
if %errorlevel% neq 0 (
    echo Error: No se pudo crear el commit
    pause
    exit /b 1
)

echo [4/5] Configurando rama principal...
git branch -M main
if %errorlevel% neq 0 (
    echo Error: No se pudo configurar la rama principal
    pause
    exit /b 1
)

echo [5/5] Conectando con GitHub...
echo.
echo IMPORTANTE: Asegurate de haber creado el repositorio en GitHub primero
echo URL sugerida: https://github.com/lianacrobata/AdmApp
echo.
set /p confirm="¿Has creado el repositorio en GitHub? (s/n): "
if /i "%confirm%" neq "s" (
    echo.
    echo Por favor, crea el repositorio en GitHub primero:
    echo 1. Ve a https://github.com/new
    echo 2. Nombre: AdmApp
    echo 3. Descripcion: Acrobata Demente - Tienda de productos acrobaticos
    echo 4. Publico
    echo 5. NO inicializar con README
    echo.
    pause
    exit /b 0
)

git remote add origin https://github.com/lianacrobata/AdmApp.git
if %errorlevel% neq 0 (
    echo Error: No se pudo conectar con GitHub
    echo Verifica que el repositorio exista y la URL sea correcta
    pause
    exit /b 1
)

echo Subiendo archivos a GitHub...
git push -u origin main
if %errorlevel% neq 0 (
    echo Error: No se pudieron subir los archivos
    echo Verifica tu conexion y credenciales de GitHub
    pause
    exit /b 1
)

echo.
echo ========================================
echo           ¡EXITO! 🎉
echo ========================================
echo.
echo Tu proyecto ha sido subido a GitHub exitosamente!
echo.
echo PROXIMOS PASOS:
echo.
echo 1. Ve a: https://github.com/lianacrobata/AdmApp
echo 2. Configurar GitHub Pages:
echo    - Settings ^> Pages
echo    - Source: GitHub Actions
echo.
echo 3. Configurar Secrets (CRITICO):
echo    - Settings ^> Secrets and variables ^> Actions
echo    - Añadir: TELEGRAM_BOT_TOKEN
echo    - Añadir: TELEGRAM_CHAT_ID
echo.
echo 4. Tu sitio estara disponible en:
echo    https://lianacrobata.github.io/AdmApp/
echo.
echo Para mas detalles, consulta DEPLOY.md
echo.
pause