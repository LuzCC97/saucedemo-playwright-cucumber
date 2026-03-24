# Informe de Estrategia de Automatización

## 1. Objetivo

El objetivo del presente reto fue desarrollar una suite de pruebas automatizadas para la aplicación web Sauce Demo, cubriendo los flujos funcionales principales del sistema: autenticación, gestión del carrito de compras y proceso de checkout.

La solución fue diseñada priorizando claridad, mantenibilidad y buenas prácticas de automatización frontend.

---

## 2. Herramientas utilizadas

Para la implementación se utilizaron las siguientes herramientas:

- **Playwright**: framework de automatización para interacción con navegadores modernos.
- **Cucumber**: framework BDD (Behavior Driven Development) que permite definir escenarios en lenguaje natural (Gherkin).
- **JavaScript**: lenguaje de programación utilizado en la implementación.
- **Node.js**: entorno de ejecución.
- **dotenv**: manejo de variables de entorno (por ejemplo, la URL base).

Estas herramientas fueron seleccionadas por su integración sencilla y su enfoque moderno en automatización.

---

## 3. Patrón de diseño aplicado

Se implementó el patrón **Page Object Model (POM)** con el objetivo de separar la lógica de interacción con la interfaz de usuario de la lógica de prueba.

Esto permitió:

- centralizar selectores y acciones por página,
- reducir duplicidad de código,
- mejorar la mantenibilidad,
- facilitar la escalabilidad de la suite.

Se definieron Page Objects para las principales pantallas:
- LoginPage
- InventoryPage
- CartPage
- CheckoutPage

---

## 4. Cobertura de escenarios

La suite automatizada cubre los siguientes escenarios:

### Login
- Inicio de sesión exitoso con usuario válido (`standard_user`)
- Validación de error con credenciales inválidas
- Validación de acceso denegado para usuario bloqueado (`locked_out_user`)

###  Carrito
- Agregar producto al carrito
- Visualizar producto dentro del carrito

### Checkout
- Flujo completo de compra:
    - Login
    - Agregar producto
    - Acceso al carrito
    - Proceso de checkout
    - Confirmación de compra

---

## 5. Criterios de selección de escenarios

Los escenarios fueron seleccionados en base a los criterios de aceptación del reto y priorizando los flujos críticos del usuario.

Se consideraron como prioritarios:

- autenticación del usuario,
- validación de restricciones de acceso,
- manipulación del carrito,
- visualización de productos,
- finalización del proceso de compra.

La estrategia se enfocó en cubrir tanto escenarios positivos como negativos relevantes.

---

## 6. Conclusión

La solución implementada cumple con los requerimientos funcionales del reto y presenta una estructura organizada, mantenible y escalable.

El uso de Playwright, Cucumber y el patrón Page Object Model permitió construir una suite clara, reutilizable y adecuada para un entorno profesional de automatización QA.