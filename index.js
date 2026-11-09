const express = require('express');
const app = express();
const PORT = 3000;

// Middleware para procesar cuerpos JSON
app.use(express.json());

// Ruta raíz de bienvenida
app.get('/', (req, res) => {
    res.send('Bienvenida a la API de estudiantes Computación en la Nube');
});

// Ruta GET /estudiantes: Retorna listado de estudiantes
app.get('/estudiantes', (req, res) => {
    res.json([
        { id: 1, nombre: 'Ana', programa: 'Ingeniería' },
        { id: 2, nombre: 'Luis', programa: 'Computación en la Nube' }
    ]);
});

// Ruta POST /estudiantes: Crea un nuevo registro
app.post('/estudiantes', (req, res) => {
    const nuevo = req.body;
    res.status(201).json({ mensaje: 'Estudiante creado', data: nuevo });
});

// Nuevo endpoint agregado en la rama secundaria
app.get('/saludo', (req, res) => {
    res.json({ mensaje: 'Hola desde la rama feature/nuevo-endpoint!' });
});

// Servidor escuchando en el puerto 3000
app.listen(PORT, () => {
    console.log(`Servidor corriendo exitosamente en puerto ${PORT}`);
});