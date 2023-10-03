# Ricky & Morty Challenge

## Dependencias

- Yarn 1.22.19
- Node 16.16.0

## Standards

- Para los commits se respetan las siguientes normas: [https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)
- Usar inglés para los mensajes de commit.
- Para los nombres de ramas también se usa inglés.
- Las palabras se separan con `-`.
- Las ramas comienzan con alguno de los [short lead tokens](/short-lead-tokens) definidos, seguidos de un `/`, por ejemplo: `feat/tokens-configuration`

### Short lead tokens

#### Commits

- WIP = Trabajo en progreso.

#### Ramas

- **feat** = Nuevos features
- **fix** = Corrección de un bug
- **docs** = Cambios solo de documentación
- **style** = Cambios que no afectan el significado del código (espaciado, formateo de código, comillas faltantes, etc)
- **refactor** = Un cambio en el código que no arregla un bug ni agrega una funcionalidad
- **perf** = Cambio que mejora el rendimiento
- **test** = Agregar test faltantes o los corrige
- **chore** = Cambios en el build o herramientas auxiliares y librerías

**Todas las mezclas a main se hacen mediante Pull Request desde develop. Por ende, las ramas para nuevos features deben ser creadas desde develop.**

## Setup

```bash
yarn install
yarn start
```
