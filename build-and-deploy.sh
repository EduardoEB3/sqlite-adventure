#!/bin/bash

# Construir la aplicación
npm run build

# Copiar archivos a la carpeta de implementación en GitHub Pages
cp -r static/openapi/* docs/
cp README.md docs/
