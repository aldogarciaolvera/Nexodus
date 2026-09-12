# Nexodus

Nexodus es una aplicación móvil desarrollada con **React Native** y **Expo (v57)**, diseñada con un enfoque minimalista, técnico y de lujo (Stealth Luxury) conocido como **Obsidian Cyan**.

## 🛠 Stack Tecnológico

- **Framework:** React Native / Expo (v57)
- **Lenguaje:** TypeScript
- **Navegación:** React Navigation v7 (Bottom Tabs, Native Stack)
- **Manejo de Estado:** Zustand
- **Gestor de Paquetes:** pnpm

## 🏗 Arquitectura (Feature-Sliced Design)

El proyecto sigue estrictamente los principios de **Clean Architecture** estructurando el código dentro del directorio `src/`:

- `src/assets/`: Recursos estáticos (imágenes, fuentes, etc.).
- `src/components/`: Componentes UI reutilizables y aislados.
- `src/features/`: Módulos de la aplicación agrupados por funcionalidad (ej. todo, workout, diet, finance).
- `src/hooks/`: Custom hooks de React.
- `src/services/`: Integraciones con APIs externas y servicios.
- `src/store/`: Manejo de estado global (Zustand).
- `src/utils/`: Funciones de utilidad generales.

*Referencia: [`ARCHITECTURE.md`](./ARCHITECTURE.md)*

## 🎨 Diseño Visual (Obsidian Cyan)

La aplicación implementa un sistema de diseño propio caracterizado por:
- **Modo Oscuro Estricto:** Lienzo neutral (`#0D0E11`) con superficies elevadas (`#171922`, `#1B1E28`).
- **Acento Principal:** Cian eléctrico (`#00F0FF`) para los estados activos y llamadas a la acción.
- **Tipografía:** `Geist` para cuerpos y títulos; `JetBrains Mono` para métricas, tags y números.
- **Geometría:** Uso de bordes redondeados (16px para tarjetas, píldoras para tags) sin sombras proyectadas, basando la elevación en capas de color tonal.

*Referencia: [`DESIGN.md`](./DESIGN.md)*

## 🆕 Últimos Cambios

- **Navegación**: Migración de Native Stack a `@react-navigation/bottom-tabs` con una barra inferior personalizada (`BottomNav`).
- **Arquitectura y Diseño**:
  - Creación de las carpetas faltantes (`assets`, `hooks`, `services`, `store`) para cumplir con `Clean Architecture`.
  - Remoción de sombras (Drop Shadows) en tarjetas (como `DailyTodoCard`) para respetar las guías de diseño de `Stealth Luxury`.
- **Tipografía**: Integración de `@expo-google-fonts/geist` y `@expo-google-fonts/jetbrains-mono` cargadas dinámicamente en el inicio de la app.
- **Módulo Finance & Wealth (Money)**: 
  - Pantalla completa con diseño "Stealth Luxury".
  - Tarjetas modulares: `NetWorthCard`, `WeeklyOutflowCard` (con gráfico dinámico), `OperatingTargetsCard`, `TransactionsCard`, y `CapitalEfficiencyCard`.
  - Integración de modal de transacción flotante (`TransactionModal`).

## 🚀 Instalación y Uso

Asegúrate de tener instalado [pnpm](https://pnpm.io/) y Node.js.

```bash
# 1. Instalar dependencias
pnpm install

# 2. Iniciar el servidor de desarrollo de Expo
pnpm start

# Opciones adicionales:
pnpm run android
pnpm run ios
```
