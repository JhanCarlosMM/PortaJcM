#!/bin/bash

# Setup script para instalar todas las dependencias del portafolio

echo "🚀 Iniciando setup del portafolio Angular v21..."
echo ""

# Verificar Node.js
echo "✓ Verificando Node.js..."
if ! command -v node &> /dev/null; then
    echo "✗ Node.js no está instalado. Por favor instálalo desde https://nodejs.org"
    exit 1
fi
echo "✓ Node.js $(node --version) detectado"
echo ""

# Verificar npm
echo "✓ Verificando npm..."
if ! command -v npm &> /dev/null; then
    echo "✗ npm no está instalado"
    exit 1
fi
echo "✓ npm $(npm --version) detectado"
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias npm..."
npm install
if [ $? -ne 0 ]; then
    echo "✗ Error instalando dependencias"
    exit 1
fi
echo "✓ Dependencias instaladas"
echo ""

# Crear directorios faltantes
echo "📁 Creando estructura de carpetas..."
mkdir -p src/app/components
mkdir -p src/app/features
mkdir -p src/app/interfaces
mkdir -p src/app/services
mkdir -p src/app/utils
mkdir -p src/app/constants
mkdir -p src/assets
echo "✓ Estructura de carpetas lista"
echo ""

# Compilar tipos
echo "🔧 Compilando tipos TypeScript..."
npm run build
if [ $? -ne 0 ]; then
    echo "⚠️  Advertencia en compilación (no crítico)"
fi
echo ""

echo "✅ Setup completado!"
echo ""
echo "Próximos pasos:"
echo "1. npm start          - Iniciar servidor de desarrollo"
echo "2. npm run build      - Compilar para producción"
echo "3. npm test           - Ejecutar pruebas"
echo ""
echo "📚 Documentación disponible:"
echo "   - PORTFOLIO_GUIDE.md    - Guía completa del portafolio"
echo "   - COMPONENTS_GUIDE.md   - Documentación de componentes"
echo ""
echo "¡Disfruta desarrollando! 🎉"
