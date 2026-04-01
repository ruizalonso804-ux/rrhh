# 🚀 Zonda Tech - Portal de Empleos

Portal profesional para la posición de Gerente de Marketing Estratégico en Zonda Tech Chile.

## 📋 Contenidos del Proyecto

```
zonda-tech-jobs/
├── index.html                           # Sitio principal (HTML5 completo)
├── server.js                            # Servidor Express.js
├── package.json                         # Dependencias de Node.js
├── .env.example                         # Variables de entorno de ejemplo
├── .gitignore                           # Archivos a ignorar en git
├── render.yaml                          # Configuración para Render
├── README.md                            # Este archivo
│
├── docs/
│   ├── Publicacion_LinkedIn_Zonda_Tech.md
│   ├── Publicacion_Portales_Empleo_Zonda_Tech.md
│   ├── Publicacion_Empleo_Zonda_Tech.md
│   └── Analisis_Compensacion_Zonda_Tech.md
│
└── assets/
    ├── Zonda_Tech_Gerente_Marketing.pptx
    └── imagenes/ (si es necesario)
```

## ✨ Características

✅ **Sitio Completo**
- Información exhaustiva de la posición
- 6 secciones navegables (Posición, Requisitos, KPIs, Compensación, Proceso, Empresa)
- Responsive design (mobile, tablet, desktop)
- Diseño profesional con paleta de colores Zonda Tech

✅ **Funcionalidades**
- API para aplicaciones
- API para contacto
- Descarga de información
- Scroll smooth entre secciones
- Formulario de contacto integrado

✅ **Infraestructura**
- Servidor Express.js ligero
- Configurado para Render
- Variables de entorno
- CORS habilitado

## 🏗️ Instalación Local

### Requisitos
- Node.js 18.x o superior
- npm o yarn

### Pasos

1. **Clonar o descargar el proyecto**
```bash
git clone https://github.com/tu-usuario/zonda-tech-jobs.git
cd zonda-tech-jobs
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
cp .env.example .env
# Editar .env con tus valores
```

4. **Iniciar servidor en desarrollo**
```bash
npm run dev
# o
npm start
```

5. **Acceder al sitio**
```
http://localhost:3000
```

## 🚀 Despliegue en Render

### Opción 1: Desde GitHub (Recomendado)

1. **Sube el proyecto a GitHub**
```bash
git init
git add .
git commit -m "Initial commit: Zonda Tech Jobs Portal"
git remote add origin https://github.com/tu-usuario/zonda-tech-jobs.git
git push -u origin main
```

2. **Accede a Render.com**
   - Ve a https://render.com
   - Haz clic en "New +"
   - Selecciona "Web Service"
   - Conecta tu repositorio de GitHub

3. **Configura el servicio**
   - **Name:** zonda-tech-jobs
   - **Branch:** main
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
   - **Instance Type:** Free (o pagado según necesidad)

4. **Variables de Entorno**
   - En Render, ve a "Environment"
   - Añade las variables de `.env.example`:
     ```
     PORT=3000
     NODE_ENV=production
     CONTACT_EMAIL=reclutamiento@zondatech.cl
     COMPANY_NAME=Zonda Tech Chile
     ```

5. **Desplegar**
   - Haz clic en "Create Web Service"
   - Render automáticamente hará build y deploy

### Opción 2: Desde archivo ZIP

1. **Descargar todos los archivos como ZIP**

2. **En Render:**
   - Ve a https://render.com
   - Haz clic en "New +"
   - Selecciona "Web Service"
   - Selecciona "Deploy from a Git repository"
   - O usa "Manual setup" y pega el contenido

3. **Completar configuración como en Opción 1**

## 📊 APIs Disponibles

### 1. Aplicar a la Posición
```bash
POST /api/aplicar
Content-Type: application/json

{
  "nombre": "Juan Pérez",
  "email": "juan@example.com",
  "telefono": "+56912345678",
  "experiencia": "8 años en marketing"
}

Respuesta:
{
  "status": "success",
  "message": "Aplicación recibida. Nos contactaremos pronto.",
  "email_contacto": "reclutamiento@zondatech.cl"
}
```

### 2. Enviar Mensaje de Contacto
```bash
POST /api/contacto
Content-Type: application/json

{
  "nombre": "María García",
  "email": "maria@example.com",
  "mensaje": "Tengo una pregunta sobre la posición..."
}

Respuesta:
{
  "status": "success",
  "message": "Mensaje enviado. Te responderemos pronto."
}
```

### 3. Descargar Información
```bash
GET /api/descargar-informacion

Respuesta:
{
  "status": "success",
  "message": "Información disponible para descarga",
  "data": {
    "posicion": "Gerente de Marketing Estratégico",
    "empresa": "Zonda Tech Chile",
    "sueldo": "$4.200 - $5.800 USD",
    "ubicacion": "Santiago, Modalidad Híbrida"
  }
}
```

## 📧 Integraciones Futuras

El servidor está preparado para integrar:

- **Email:** Envío de confirmación de aplicación
- **Database:** Almacenar aplicaciones en BD
- **Webhooks:** Integración con sistemas de RH
- **Analytics:** Seguimiento de aplicaciones

## 🎨 Personalización

### Cambiar Colores
En `index.html`, busca la sección de estilos:
```css
/* Colores primarios */
#1B5E4C - Verde oscuro
#2D8B7A - Teal
#5FC9A0 - Verde claro
```

### Cambiar Contacto
En `index.html`, busca:
```html
reclutamiento@zondatech.cl
```

### Cambiar Datos Salariales
En `index.html`, sección "Compensación":
```html
$4.200 - $5.800 USD
```

## 📝 Documentación Incluida

- `Publicacion_LinkedIn_Zonda_Tech.md` - Para publicar en LinkedIn
- `Publicacion_Portales_Empleo_Zonda_Tech.md` - Para portales de empleo (Trabajando.com, etc)
- `Analisis_Compensacion_Zonda_Tech.md` - Análisis detallado de salarios
- `Zonda_Tech_Gerente_Marketing.pptx` - Presentación en PowerPoint

## 🔒 Seguridad

- CORS habilitado para desarrollo
- Validación básica de formularios
- Variables de entorno para datos sensibles
- Recomendado añadir:
  - Rate limiting
  - CSRF protection
  - Validación más robusta

## 🐛 Troubleshooting

### Puerto ya en uso
```bash
# Cambiar puerto en .env
PORT=3001
```

### Dependencias no instalan
```bash
rm -rf node_modules package-lock.json
npm install
```

### Render build falla
1. Verifica que `package.json` esté en raíz
2. Revisa que `server.js` exista
3. Comprueba Build Command: `npm install`
4. Comprueba Start Command: `npm start`

## 📞 Contacto y Soporte

- **Email:** reclutamiento@zondatech.cl
- **Sitio web:** www.zondatech.cl
- **LinkedIn:** Zonda Tech Chile

## 📄 Licencia

MIT License - Libre para usar y modificar

## ✅ Checklist de Despliegue

- [ ] Todos los archivos están presentes
- [ ] `package.json` contiene todas las dependencias
- [ ] `server.js` está configurado correctamente
- [ ] `.env.example` tiene todas las variables necesarias
- [ ] `.gitignore` está configurado
- [ ] Repositorio subido a GitHub
- [ ] Render configurado y conectado
- [ ] Variables de entorno añadidas en Render
- [ ] Build completado exitosamente
- [ ] Sitio accesible en https://zonda-tech-jobs.onrender.com

## 🎯 Próximos Pasos

1. ✅ Desplegar en Render
2. ⬜ Integrar con servicio de email (SendGrid, Mailgun)
3. ⬜ Conectar a base de datos para almacenar aplicaciones
4. ⬜ Añadir dashboard de administración
5. ⬜ Implementar autenticación
6. ⬜ Analytics y tracking

---

**Versión:** 1.0.0  
**Última actualización:** Abril 2026  
**Estado:** ✅ Listo para producción
