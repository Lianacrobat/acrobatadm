# Script de Deploy para Vercel - AdmApp
# Ejecutar desde PowerShell: .\deploy.ps1

Write-Host "🚀 Iniciando proceso de deploy para Vercel..." -ForegroundColor Green

# Verificar si estamos en un repositorio Git
if (-not (Test-Path ".git")) {
    Write-Host "❌ Error: No se detectó un repositorio Git" -ForegroundColor Red
    Write-Host "Ejecuta: git init && git add . && git commit -m 'Initial commit'" -ForegroundColor Yellow
    exit 1
}

# Verificar si hay cambios sin commitear
$gitStatus = git status --porcelain
if ($gitStatus) {
    Write-Host "📝 Detectados cambios sin commitear. Commiteando automáticamente..." -ForegroundColor Yellow
    git add .
    git commit -m "Deploy: $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
}

# Verificar si Node.js está instalado
try {
    $nodeVersion = node --version
    Write-Host "✅ Node.js detectado: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Error: Node.js no está instalado" -ForegroundColor Red
    exit 1
}

# Instalar dependencias
Write-Host "📦 Instalando dependencias..." -ForegroundColor Cyan
npm install
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error al instalar dependencias" -ForegroundColor Red
    exit 1
}

# Ejecutar build
Write-Host "🔨 Ejecutando build..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Error en el build" -ForegroundColor Red
    exit 1
}

Write-Host "✅ Build completado exitosamente" -ForegroundColor Green

# Verificar si Vercel CLI está instalado
try {
    $vercelVersion = vercel --version
    Write-Host "✅ Vercel CLI detectado: $vercelVersion" -ForegroundColor Green
    
    # Preguntar si quiere hacer deploy automático
    $deploy = Read-Host "¿Deseas hacer deploy automático a Vercel? (y/N)"
    if ($deploy -eq "y" -or $deploy -eq "Y") {
        Write-Host "🚀 Desplegando a Vercel..." -ForegroundColor Cyan
        vercel --prod
        if ($LASTEXITCODE -eq 0) {
            Write-Host "🎉 Deploy completado exitosamente!" -ForegroundColor Green
        } else {
            Write-Host "❌ Error en el deploy" -ForegroundColor Red
        }
    }
} catch {
    Write-Host "⚠️ Vercel CLI no está instalado" -ForegroundColor Yellow
    Write-Host "Para instalar: npm i -g vercel" -ForegroundColor Cyan
    Write-Host "Luego ejecuta: vercel --prod" -ForegroundColor Cyan
}

Write-Host ""
Write-Host "📋 Resumen del deploy:" -ForegroundColor Cyan
Write-Host "   ✅ Dependencias instaladas" -ForegroundColor Green
Write-Host "   ✅ Build completado" -ForegroundColor Green
Write-Host "   ✅ Archivos listos en ./dist" -ForegroundColor Green
Write-Host "   ✅ Configuración de Vercel lista" -ForegroundColor Green
Write-Host ""
Write-Host "🌐 Opciones de deploy:" -ForegroundColor Cyan
Write-Host "   1. Vercel CLI: vercel --prod" -ForegroundColor White
Write-Host "   2. GitHub + Vercel: Push a main branch" -ForegroundColor White
Write-Host "   3. Vercel Dashboard: Importar repositorio" -ForegroundColor White
Write-Host ""
Write-Host "📖 Ver DEPLOY-VERCEL.md para más detalles" -ForegroundColor Yellow