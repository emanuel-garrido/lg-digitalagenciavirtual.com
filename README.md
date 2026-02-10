# LG.Digital - Sitio Web

Landing estática de LG.Digital (HTML/CSS/JS) lista para publicarse en GitHub Pages.

## Ver cambios en tiempo real en GitHub

Este repositorio incluye un workflow de GitHub Actions que despliega automáticamente el sitio en **GitHub Pages** cuando haces push a:

- `main`
- `master`
- `work`

Archivo del workflow:

- `.github/workflows/deploy-pages.yml`

### Activación (una sola vez)

1. En GitHub, entra al repo.
2. Ve a **Settings → Pages**.
3. En **Build and deployment**, selecciona **Source: GitHub Actions**.
4. Haz push a una de las ramas configuradas.

GitHub te va a publicar una URL tipo:

- `https://<usuario>.github.io/<repo>/`

## Verlo localmente mientras editas

En la carpeta del proyecto:

```bash
python3 -m http.server 4173
```

Luego abre:

- `http://127.0.0.1:4173`

## Estructura

- `index.html` → contenido principal
- `style.css` → estilos
- `script.js` → interacciones (menú móvil, smooth scroll, envío a WhatsApp)
- `assets/` → imágenes y recursos
