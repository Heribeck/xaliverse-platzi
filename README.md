# Xaliverse 🖤

Proyecto de juego web multijugador desarrollado con Node.js, Express y JavaScript vanilla.

## Estructura del proyecto

```
├── src/
│   ├── server/              ← Backend (Express)
│   │   ├── controllers/     ← Lógica de negocio
│   │   ├── models/          ← Modelos de datos
│   │   ├── routes/          ← Rutas de la API
│   │   ├── middlewares/     ← Middlewares (auth, errores, etc.)
│   │   ├── services/        ← Servicios (BD, APIs externas)
│   │   └── utils/           ← Funciones auxiliares
│   └── client/              ← Frontend
│       ├── components/      ← Componentes UI reutilizables
│       ├── pages/           ← Vistas/páginas
│       ├── services/        ← Llamadas a la API
│       ├── styles/          ← CSS/SCSS
│       ├── scripts/         ← Módulos JS
│       └── utils/           ← Helpers del cliente
├── public/                  ← Archivos estáticos
│   ├── images/
│   ├── styles/
│   └── scripts/
├── database/
│   ├── migrations/          ← Migraciones de BD
│   └── seeds/               ← Datos iniciales
├── config/                  ← Configuración de la app
├── tests/
│   ├── unit/
│   └── integration/
└── docs/                    ← Documentación
```

## Instalación

```bash
npm install
```

## Uso

```bash
node index.js
```

## Autor

HERIBECK
