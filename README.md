# CienciaDesk PWA v0.2

Actualización del módulo curricular. Mantiene las secciones de laboratorio, organización y asistente de v0.1.

## Publicación en GitHub Pages

Sube **todos los archivos del contenido de esta carpeta** a la raíz del repositorio `cienciadesk`, reemplazando los anteriores. GitHub Pages: Settings > Pages > Deploy from a branch > main > /(root). Recarga la página tras la publicación; el Service Worker cambia de caché a v02.

## Contenido curricular

La aplicación no incluye textos de OA ni indicadores inventados. Importa archivos JSON verificados con la fuente oficial. Descarga una plantilla desde el propio módulo. El esquema de cada objeto es: `id`, `curso`, `area`, `codigo`, `descripcion`, `indicadores` (lista de textos), `fuenteUrl`, `fuenteTipo`. Se validan campos, URL y ejes. La importación actualiza por `id` sin borrar los otros OA.

## Persistencia y límites

Los OA, el seguimiento, el inventario y las tareas se guardan en `localStorage` del navegador. No hay sincronización entre Android y Windows. Exporta tu repositorio como copia de seguridad. GitHub Pages es alojamiento estático, no base de datos. El asistente sigue siendo una plantilla local, sin IA conectada.
