# Acrobata Demente - GitHub Deploy Setup
# PowerShell Script para configurar el despliegue

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "    ACROBATA DEMENTE - DEPLOY SETUP" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

try {
    Write-Host "[1/5] Inicializando repositorio Git..." -ForegroundColor Yellow
    git init
    if ($LASTEXITCODE -ne 0) { throw "Error inicializando Git" }
    
    Write-Host "[2/5] Añadiendo archivos al repositorio..." -ForegroundColor Yellow
    git add .
    if ($LASTEXITCODE -ne 0) { throw "Error añadiendo archivos" }
    
    Write-Host "[3/5] Creando commit inicial..." -ForegroundColor Yellow
    git commit -m "feat: proyecto completo Acrobata Demente con mejoras de seguridad"
    if ($LASTEXITCODE -ne 0) { throw "Error creando commit" }
    
    Write-Host "[4/5] Configurando rama principal..." -ForegroundColor Yellow
    git branch -M main
    if ($LASTEXITCODE -ne 0) { throw "Error configurando rama" }
    
    Write-Host "[5/5] Conectando con GitHub..." -ForegroundColor Yellow
    Write-Host ""
    Write-Host "IMPORTANTE: Asegúrate de haber creado el repositorio en GitHub primero" -ForegroundColor Red
    Write-Host "URL sugerida: https://github.com/Lianacrobat/acrobatadm" -ForegroundColor Green
    Write-Host ""
    
    $confirm = Read-Host "¿Has creado el repositorio en GitHub? (s/n)"
    if ($confirm -ne "s" -and $confirm -ne "S") {
        Write-Host ""
        Write-Host "Por favor, crea el repositorio en GitHub primero:" -ForegroundColor Yellow
        Write-Host "1. Ve a https://github.com/new" -ForegroundColor White
        Write-Host "2. Nombre: AdmApp" -ForegroundColor White
        Write-Host "3. Descripción: Acrobata Demente - Tienda de productos acrobáticos" -ForegroundColor White
        Write-Host "4. Público" -ForegroundColor White
        Write-Host "5. NO inicializar con README" -ForegroundColor White
        Write-Host ""
        Read-Host "Presiona Enter para continuar..."
        exit 0
    }
    
    git remote add origin https://github.com/Lianacrobat/acrobatadm.git
    if ($LASTEXITCODE -ne 0) { throw "Error conectando con GitHub" }
    
    Write-Host "Subiendo archivos a GitHub..." -ForegroundColor Yellow
    git push -u origin main
    if ($LASTEXITCODE -ne 0) { throw "Error subiendo archivos" }
    
    Write-Host ""
    Write-Host "========================================" -ForegroundColor Green
    Write-Host "           ¡ÉXITO! 🎉" -ForegroundColor Green
    Write-Host "========================================" -ForegroundColor Green
    Write-Host ""
    Write-Host "Tu proyecto ha sido subido a GitHub exitosamente!" -ForegroundColor Green
    Write-Host ""
    Write-Host "PRÓXIMOS PASOS:" -ForegroundColor Cyan
    Write-Host ""
    Write-Host "1. Ve a: https://github.com/Lianacrobat/acrobatadm" -ForegroundColor White
    Write-Host "2. Configurar GitHub Pages:" -ForegroundColor White
    Write-Host "   - Settings > Pages" -ForegroundColor Gray
    Write-Host "   - Source: GitHub Actions" -ForegroundColor Gray
    Write-Host ""
    Write-Host "3. Configurar Secrets (CRÍTICO):" -ForegroundColor Red
    Write-Host "   - Settings > Secrets and variables > Actions" -ForegroundColor Gray
    Write-Host "   - Añadir: TELEGRAM_BOT_TOKEN" -ForegroundColor Gray
    Write-Host "   - Añadir: TELEGRAM_CHAT_ID" -ForegroundColor Gray
    Write-Host ""
    Write-Host "4. Tu sitio estará disponible en:" -ForegroundColor White
    Write-Host "   https://lianacrobata.github.io/AdmApp/" -ForegroundColor Green
    Write-Host ""
    Write-Host "Para más detalles, consulta DEPLOY.md" -ForegroundColor Yellow
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "ERROR: $($_.Exception.Message)" -ForegroundColor Red
    Write-Host ""
    Write-Host "Posibles soluciones:" -ForegroundColor Yellow
    Write-Host "- Verifica que Git esté instalado" -ForegroundColor White
    Write-Host "- Verifica tu conexión a internet" -ForegroundColor White
    Write-Host "- Verifica que el repositorio exista en GitHub" -ForegroundColor White
    Write-Host "- Verifica tus credenciales de GitHub" -ForegroundColor White
    Write-Host ""
}

Read-Host "Presiona Enter para continuar..."