#!/bin/bash

# Script de Deploy para Vercel - AdmApp
# Ejecutar: chmod +x deploy.sh && ./deploy.sh

echo "🚀 Iniciando proceso de deploy para Vercel..."

# Verificar si estamos en un repositorio Git
if [ ! -d ".git" ]; then
    echo "❌ Error: No se detectó un repositorio Git"
    echo "Ejecuta: git init && git add . && git commit -m 'Initial commit'"
    exit 1
fi

# Verificar si hay cambios sin commitear
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 Detectados cambios sin commitear. Commiteando automáticamente..."
    git add .
    git commit -m "Deploy: $(date '+%Y-%m-%d %H:%M:%S')"
fi

# Verificar si Node.js está instalado
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js no está instalado"
    exit 1
fi

echo "✅ Node.js detectado: $(node --version)"

# Instalar dependencias
echo "📦 Instalando dependencias..."
npm install
if [ $? -ne 0 ]; then
    echo "❌ Error al instalar dependencias"
    exit 1
fi

# Ejecutar build
echo "🔨 Ejecutando build..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Error en el build"
    exit 1
fi

echo "✅ Build completado exitosamente"

# Verificar si Vercel CLI está instalado
if command -v vercel &> /dev/null; then
    echo "✅ Vercel CLI detectado: $(vercel --version)"
    
    # Preguntar si quiere hacer deploy automático
    read -p "¿Deseas hacer deploy automático a Vercel? (y/N): " deploy
    if [[ $deploy == "y" || $deploy == "Y" ]]; then
        echo "🚀 Desplegando a Vercel..."
        vercel --prod
        if [ $? -eq 0 ]; then
            echo "🎉 Deploy completado exitosamente!"
        else
            echo "❌ Error en el deploy"
        fi
    fi
else
    echo "⚠️  Vercel CLI no está instalado"
    echo "Para instalar: npm i -g vercel"
    echo "Luego ejecuta: vercel --prod"
fi

echo ""
echo "📋 Resumen del deploy:"
echo "   ✅ Dependencias instaladas"
echo "   ✅ Build completado"
echo "   ✅ Archivos listos en ./dist"
echo "   ✅ Configuración de Vercel lista"
echo ""
echo "🌐 Opciones de deploy:"
echo "   1. Vercel CLI: vercel --prod"
echo "   2. GitHub + Vercel: Push a main branch"
echo "   3. Vercel Dashboard: Importar repositorio"
echo ""
echo "📖 Ver DEPLOY-VERCEL.md para más detalles"