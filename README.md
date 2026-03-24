# Automatización Frontend - Sauce Demo

Este proyecto contiene una suite de pruebas automatizadas para la aplicación web [Sauce Demo](https://www.saucedemo.com/), utilizando Playwright + Cucumber y aplicando el patrón de diseño Page Object Model (POM).

---

## Tecnologías utilizadas

- Node.js
- Playwright
- Cucumber (BDD)
- JavaScript
- dotenv

---

## Estructura del proyecto
```text
saucedemo-playwright-cucumber/
│
├── features/ # Escenarios en Gherkin
├── steps/ # Definición de steps
├── pages/ # Page Object Model
├── support/ # Hooks y configuración
├── utils/ # Datos de prueba (opcional)
│
├── cucumber.js
├── package.json
├── .env
└── README.md

```
---

##  Escenarios cubiertos

### Login
- Login exitoso con usuario válido
- Login con credenciales inválidas
- Login con usuario bloqueado

### Carrito
- Agregar producto al carrito
- Validar cantidad de productos

### 🧾 Checkout
- Flujo completo de compra:
    - Login
    - Agregar producto
    - Carrito
    - Checkout
    - Confirmación de compra

---

## Instalación

1. Clonar el repositorio:

```bash
git clone <url-del-repo>
```

2. Instalar dependencias:
```bash
   npm install
```

---

## Ejecución de pruebas
- Ejecutar todos los escenarios:
```bash
npm test
```
- Ejecutar por módulos:
```bash
npm run test:login
npm run test:cart
npm run test:checkout
```

---

## Configuración

El proyecto utiliza variables de entorno definidas en el archivo .env:
```bash
BASE_URL=https://www.saucedemo.com/
```

---

## Patrón de diseño aplicado

Se implementó el patrón **Page Object Model (POM)** para:

- Separar lógica de UI de los steps
- Mejorar la mantenibilidad
- Reutilizar código
- Facilitar la escalabilidad

---

## Notas
- El navegador se ejecuta en modo visible (headless: false)
- Cada escenario se ejecuta de forma independiente
- Se utilizan hooks (Before / After) para manejar el ciclo de vida del navegador
 
---

## Autor

Reto técnico desarrollado por **Luz Olguita Chumacero Calle** para evaluación de puesto QA Junior.