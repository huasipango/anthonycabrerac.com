# Deploy Automático a Cloudflare Pages

Este proyecto está configurado para hacer deploy automático a Cloudflare Pages usando GitHub Actions.

## Configuración Requerida

### 1. Obtener Cloudflare API Token

1. Ve a [Cloudflare Dashboard](https://dash.cloudflare.com/)
2. Ve a **My Profile** → **API Tokens**
3. Crea un nuevo token con los siguientes permisos:
   - **Account**: Cloudflare Pages (Edit)
   - **Zone**: Zone (Read)
4. Copia el token generado

### 2. Obtener Account ID

1. En el dashboard de Cloudflare, ve a la página principal
2. El Account ID aparece en el sidebar derecho
3. Copia este ID

### 3. Configurar GitHub Secrets

1. Ve a tu repositorio en GitHub
2. Ve a **Settings** → **Secrets and variables** → **Actions**
3. Agrega los siguientes secrets:
   - `CLOUDFLARE_API_TOKEN`: El API token que obtuviste en el paso 1
   - `CLOUDFLARE_ACCOUNT_ID`: El Account ID que obtuviste en el paso 2

## Cómo Funciona

- **Push a main**: Cada vez que hagas push a la rama `main`, se ejecutará automáticamente el workflow
- **Pull Request**: El workflow también se ejecuta en PRs para verificar que el build funcione
- **Build**: Se instalan las dependencias y se ejecuta `pnpm build`
- **Deploy**: Se sube la carpeta `dist` a Cloudflare Pages

## Workflow del GitHub Action

El workflow está configurado en `.github/workflows/deploy.yml` y:

1. ✅ Hace checkout del código
2. ✅ Configura Node.js 20
3. ✅ Configura pnpm 10.13.1
4. ✅ Configura cache para optimizar builds
5. ✅ Instala dependencias
6. ✅ Hace build del proyecto
7. ✅ Verifica el contenido de la carpeta dist
8. ✅ Hace deploy a Cloudflare Pages (solo en main)
9. ✅ Crea previews para Pull Requests

## Características del Workflow

### 🚀 Optimizaciones

- **Cache de dependencias**: Reutiliza dependencias entre builds
- **Cache de pnpm**: Optimiza la instalación de paquetes
- **Variables de entorno**: Versiones centralizadas de Node.js y pnpm

### 🔍 Verificaciones

- **Build verification**: Confirma que el proyecto compile correctamente
- **Dist folder check**: Muestra el contenido y tamaño de la carpeta de build
- **Conditional deploy**: Solo hace deploy a producción desde main

### 🌐 Entornos

- **Production**: Deploy automático desde la rama main
- **Preview**: Deploy de preview para Pull Requests

## Configuración de Wrangler

El archivo `wrangler.toml` está configurado para:

- Definir el nombre del proyecto
- Configurar compatibilidad con Node.js
- Establecer entornos de preview y producción

## Verificación

Después de configurar los secrets:

1. Haz un push a la rama `main`
2. Ve a la pestaña **Actions** en GitHub para ver el progreso
3. Una vez completado, tu sitio estará disponible en Cloudflare Pages

## URLs de Deploy

- **Production**: https://anthonycabrerac.pages.dev
- **Preview**: Se genera automáticamente para cada PR

## Troubleshooting

### Error de API Token

- Verifica que el token tenga los permisos correctos
- Asegúrate de que el token no haya expirado

### Error de Account ID

- Verifica que estés en la cuenta correcta de Cloudflare
- El ID debe ser de la cuenta, no del dominio

### Error de Build

- Revisa los logs del workflow en GitHub Actions
- Verifica que el build funcione localmente con `pnpm build`

### Error de Deploy

- Verifica que el proyecto `anthonycabrerac` exista en Cloudflare Pages
- Confirma que el API token tenga permisos de escritura en Pages
