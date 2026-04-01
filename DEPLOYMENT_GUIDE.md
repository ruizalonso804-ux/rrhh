# 📖 Guía de Despliegue en Render - Paso a Paso

## ✅ Prerrequisitos

1. **Cuenta de GitHub** (gratis en github.com)
2. **Cuenta de Render** (gratis en render.com)
3. **Git instalado** en tu computadora
4. **Todos los archivos** del proyecto

## 🔧 Paso 1: Preparar los Archivos Localmente

### 1.1 Crear carpeta del proyecto
```bash
# En tu computadora, crea una carpeta
mkdir zonda-tech-jobs
cd zonda-tech-jobs
```

### 1.2 Copiar archivos
Asegúrate de tener en la carpeta `zonda-tech-jobs/`:
```
zonda-tech-jobs/
├── index.html                          (Sitio principal)
├── server.js                           (Servidor)
├── package.json                        (Dependencias)
├── .env.example                        (Variables de ejemplo)
├── .gitignore                          (Archivos a ignorar)
├── render.yaml                         (Config de Render)
├── README.md                           (Documentación)
│
└── docs/
    ├── Publicacion_LinkedIn_Zonda_Tech.md
    ├── Publicacion_Portales_Empleo_Zonda_Tech.md
    ├── Publicacion_Empleo_Zonda_Tech.md
    └── Analisis_Compensacion_Zonda_Tech.md
```

### 1.3 Crear archivo .env
```bash
# Crea un archivo .env en la raíz
touch .env

# Dentro del archivo .env, añade:
PORT=3000
NODE_ENV=production
CONTACT_EMAIL=reclutamiento@zondatech.cl
COMPANY_NAME=Zonda Tech Chile
```

### 1.4 Verificar que funciona localmente (OPCIONAL)
```bash
# Instalar dependencias
npm install

# Iniciar servidor
npm start

# Abrir navegador en http://localhost:3000
# Si ves la página, ¡funciona!

# Detener servidor: Ctrl+C
```

## 📤 Paso 2: Subir a GitHub

### 2.1 Inicializar repositorio Git
```bash
cd zonda-tech-jobs

# Inicializar git
git init

# Añadir todos los archivos
git add .

# Crear primer commit
git commit -m "Initial commit: Zonda Tech Jobs Portal"
```

### 2.2 Crear repositorio en GitHub
1. Ve a https://github.com/new
2. Llena el formulario:
   - **Repository name:** `zonda-tech-jobs`
   - **Description:** "Portal de empleo para Zonda Tech Chile"
   - **Privacy:** Public (para Render)
   - Haz clic en "Create repository"

### 2.3 Conectar Git local con GitHub
```bash
# Reemplaza USERNAME con tu usuario de GitHub
git remote add origin https://github.com/USERNAME/zonda-tech-jobs.git

# Cambiar rama a main (si es necesario)
git branch -M main

# Subir los archivos
git push -u origin main
```

✅ **Resultado esperado:** Ves tus archivos en GitHub

## 🚀 Paso 3: Desplegar en Render

### 3.1 Acceder a Render
1. Ve a https://render.com
2. Haz clic en "Sign up" (o login si tienes cuenta)
3. Elige "GitHub" como opción de registro

### 3.2 Autorizar GitHub
1. Se abre GitHub
2. Haz clic en "Authorize render"
3. Vuelves a Render

### 3.3 Crear Web Service en Render
1. En Render, haz clic en **"New +"** (arriba a la derecha)
2. Selecciona **"Web Service"**
3. Se abre una ventana con tus repositorios
4. Busca **"zonda-tech-jobs"**
5. Haz clic en el botón **"Connect"** (al lado del repositorio)

### 3.4 Configurar el servicio
Llena los siguientes campos:

```
Name:                    zonda-tech-jobs
Environment:             Node
Branch:                  main
Build Command:           npm install
Start Command:           npm start
Instance Type:           Free (o Starter si tienes presupuesto)
```

Deja todo lo demás como está.

### 3.5 Añadir variables de entorno
1. Baja en la página hasta **"Environment Variables"**
2. Haz clic en **"Add Environment Variable"**
3. Añade estas variables:

```
KEY                  VALUE
----                 -----
PORT                 3000
NODE_ENV             production
CONTACT_EMAIL        reclutamiento@zondatech.cl
COMPANY_NAME         Zonda Tech Chile
```

### 3.6 Crear el servicio
1. Haz clic en **"Create Web Service"** (abajo)
2. Render comienza el proceso de build y deploy

### 3.7 Esperar a que se complete
⏳ Esto toma 2-5 minutos. Verás:
- ✅ Building...
- ✅ Deploying...
- ✅ Live (cuando esté listo)

## ✅ Verificar que funciona

### Obtener la URL
1. En Render, tu servicio mostrará una URL como:
   ```
   https://zonda-tech-jobs.onrender.com
   ```
2. Haz clic en esa URL o cópiala

### Probar el sitio
1. Abre la URL en tu navegador
2. Deberías ver:
   - Navbar con logo "Zonda Tech Chile"
   - Sección Hero con descripción
   - Botones "Aplicar Ahora" y "Descargar Información"
   - Tabs para navegar entre secciones

### Probar las funcionalidades
1. **Navegar entre tabs** - Haz clic en "Posición", "Requisitos", etc.
2. **Scroll smooth** - Haz clic en "Aplicar Ahora" (debería scrollear a contacto)
3. **Responsivo** - Redimensiona la ventana del navegador

## 🔄 Actualizar el sitio en el futuro

### Si cambias algo localmente:
```bash
# Edita los archivos que necesites
# (ej: index.html, server.js, etc)

# Commit los cambios
git add .
git commit -m "Descripción del cambio"

# Sube a GitHub
git push origin main

# Render automáticamente redeploy
# (toma 1-2 minutos)
```

## 🆘 Solucionar problemas

### Build falla con error "npm install"
**Solución:**
1. Verifica que `package.json` esté en la raíz
2. Que los nombres de archivo sean exactos
3. En Render, ve a "Logs" para ver el error

### Sitio no carga (error 404)
**Solución:**
1. Verifica que `index.html` esté en la raíz
2. Que `server.js` tenga la línea:
   ```javascript
   app.get('/', (req, res) => {
       res.sendFile(path.join(__dirname, 'index.html'));
   });
   ```

### Puerto 3000 no configurado correctamente
**Solución:**
1. En Render, ve a "Environment"
2. Añade: `PORT=3000`
3. Re-deploy (haz clic en "Manual Deploy")

### No se ve el sitio en español
**Solución:**
1. Limpia el caché del navegador (Ctrl+Shift+Del)
2. Recarga la página (Ctrl+F5)

## 📊 Monitorear el sitio

### Ver logs en tiempo real
1. En Render, en tu servicio
2. Haz clic en **"Logs"**
3. Verás todos los accesos y errores

### Re-deploy manual
1. Haz clic en **"Manual Deploy"**
2. Selecciona **"Deploy latest"**
3. Espera a que complete

## 🎯 Personalización después del despliegue

### Cambiar el email de contacto
1. Abre `index.html` localmente
2. Busca: `reclutamiento@zondatech.cl`
3. Reemplaza con tu email
4. Haz `git push`

### Cambiar el rango salarial
1. Abre `index.html`
2. Busca: `$4.200 - $5.800 USD`
3. Reemplaza con los nuevos valores
4. Haz `git push`

### Cambiar colores
1. Abre `index.html`
2. Busca la sección `<style>`
3. Modifica los códigos de color (ej: `#1B5E4C`)
4. Haz `git push`

## 🎉 ¡Listo!

Tu portal está vivo y accesible desde cualquier navegador:
```
https://zonda-tech-jobs.onrender.com
```

## 📞 Contacto

Si tienes problemas:
1. Revisa los logs en Render
2. Verifica que todos los archivos estén en la raíz
3. Asegúrate de que `package.json` tiene las dependencias
4. Contacta a Render support: support@render.com

---

**Última actualización:** Abril 2026  
**Estado:** ✅ Guía completa y testeada
