#!/bin/bash

# Construir la aplicación
npm run build

# Copiar archivos a la carpeta de implementación en GitHub Pages
cp -r docs/openapi/* dist/
cp README.md dist/

# Confirmar y empujar cambios al repositorio
git config --local user.email "actions@github.com"
git config --local user.name "GitHub Actions"

git add .
git commit -m "Deploy to GitHub Pages"
git push
