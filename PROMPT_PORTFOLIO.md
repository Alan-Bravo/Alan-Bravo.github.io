# Prompt para Portafolio Web - CV

Necesito crear un portafolio web para mostrar mi currículum vitae usando Next.js 16 con TypeScript. A continuación están los requisitos detallados:

## Stack Tecnológico Requerido

- **Framework**: Next.js 16 con App Router (server-side rendering)
- **UI Framework**: Material UI (MUI)
- **Íconos**: Iconify (o @iconify/react)
- **Estilos**: Combinar Material UI con Tailwind CSS (ya está configurado)
- **TypeScript**: Usar TypeScript para todo el código

## Estructura y Funcionalidad

### 1. Página Principal (Home)

La página principal debe tener:

- **Menú de navegación** con las siguientes opciones:
  - Experiencia
  - Skills
  - Estudios
  - Datos de contacto
  - Links

- **Contenedor de información primordial** que incluya:
  - Nombre y Apellido
  - Puesto de trabajo: "Front end Developer"
  - Texto de objetivo profesional:
    ```
    Front-end developer con experiencia en ecommerce. 
    Con pasión por el trabajo en equipo y el aprendizaje continuo. 
    Busco nuevos desafíos que me ayuden a ampliar mis conocimientos 
    para seguir creciendo como profesional.
    ```

### 2. Navegación

- **Scroll suave**: Al hacer scroll en la página, debe mostrar las diferentes secciones de forma fluida
- **Navegación por clicks**: Al hacer click en cualquier opción del menú, debe redirigir a la sección correspondiente
- Todas las secciones deben estar en la misma página (single page application con secciones)

### 3. Diseño Visual

- **Fondo**: Blanco
- **Contenedores**: 
  - Deben resaltar con delicadeza sobre el fondo blanco (usar sombras suaves, bordes sutiles, o colores de fondo muy claros)
  - Efecto hover: cuando se pasa el mouse sobre un contenedor, debe agrandarse brevemente con una animación suave (transición de escala, por ejemplo 1.05x o 1.1x)
  - Las transiciones deben ser suaves y elegantes

### 4. Secciones a Implementar

Cada sección debe tener su propio diseño consistente con el estilo general:

- **Experiencia**: Lista de trabajos/experiencias laborales
- **Skills**: Mostrar habilidades técnicas con íconos de Iconify
- **Estudios**: Formación académica
- **Datos de contacto**: Información de contacto
- **Links**: Enlaces relevantes (GitHub, LinkedIn, etc.)

### 5. Consideraciones Técnicas

- Usar Server Components de Next.js donde sea posible
- Implementar navegación suave con scroll behavior
- Usar Material UI para componentes base (botones, cards, typography, etc.)
- Usar Iconify para todos los íconos, especialmente en la sección de Skills
- Mantener el código limpio, bien estructurado y con buenas prácticas
- Asegurar que sea responsive y se vea bien en diferentes tamaños de pantalla

### 6. Estructura de Archivos Sugerida

```
app/
  page.tsx (Home con todas las secciones)
  layout.tsx (ya existe, actualizar si es necesario)
  components/
    Navigation.tsx (menú de navegación)
    Hero.tsx (información primordial)
    Experience.tsx
    Skills.tsx
    Education.tsx
    Contact.tsx
    Links.tsx
```

## Instrucciones Adicionales

- Instalar las dependencias necesarias: `@mui/material`, `@emotion/react`, `@emotion/styled`, `@iconify/react` (o la librería de Iconify que prefieras)
- Crear un diseño moderno, profesional y minimalista
- Asegurar que las animaciones sean sutiles y no distraigan
- Usar una paleta de colores coherente y profesional
- La experiencia de usuario debe ser fluida y agradable

## Nota

Este es un proyecto existente con Next.js 16, TypeScript y Tailwind CSS ya configurado. Debes integrar Material UI y las demás librerías sin romper la configuración existente.

