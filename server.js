const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use(express.static(path.join(__dirname)));

// Rutas principales
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Ruta para descargar información (simulado)
app.get('/api/descargar-informacion', (req, res) => {
    res.json({
        status: 'success',
        message: 'Información disponible para descarga',
        data: {
            posicion: 'Gerente de Marketing Estratégico',
            empresa: 'Zonda Tech Chile',
            sueldo: '$4.200 - $5.800 USD',
            ubicacion: 'Santiago, Modalidad Híbrida'
        }
    });
});

// Ruta para enviar aplicación
app.post('/api/aplicar', (req, res) => {
    const { nombre, email, telefono, experiencia } = req.body;
    
    if (!nombre || !email) {
        return res.status(400).json({
            status: 'error',
            message: 'Nombre y email son requeridos'
        });
    }

    // Aquí iría la lógica para guardar la aplicación
    console.log('Nueva aplicación:', { nombre, email, telefono, experiencia });
    
    res.json({
        status: 'success',
        message: 'Aplicación recibida. Nos contactaremos pronto.',
        email_contacto: 'reclutamiento@zondatech.cl'
    });
});

// Ruta para contacto
app.post('/api/contacto', (req, res) => {
    const { nombre, email, mensaje } = req.body;
    
    if (!nombre || !email || !mensaje) {
        return res.status(400).json({
            status: 'error',
            message: 'Todos los campos son requeridos'
        });
    }

    console.log('Mensaje de contacto:', { nombre, email, mensaje });
    
    res.json({
        status: 'success',
        message: 'Mensaje enviado. Te responderemos pronto.'
    });
});

// Manejo de errores 404
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: 'Ruta no encontrada'
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`
╔════════════════════════════════════════╗
║   ZONDA TECH - JOB PORTAL             ║
║   Servidor activo en puerto ${PORT}      ║
║   Gerente de Marketing Estratégico    ║
╚════════════════════════════════════════╝
    `);
    console.log(`\nSitio disponible en: http://localhost:${PORT}`);
    console.log('API de aplicaciones en: POST /api/aplicar');
    console.log('API de contacto en: POST /api/contacto');
});

module.exports = app;
