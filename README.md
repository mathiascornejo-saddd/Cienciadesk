# CienciaDesk PWA v0.1
Aplicación web progresiva para Android y Windows. Pantallas: Inicio, Currículum (estructura sin contenido oficial importado), Laboratorio (inventario local), Organización (tareas locales), Asistente (plantillas sin IA externa).

## Publicación
Publicar todos los archivos de esta carpeta en un hosting HTTPS estático (por ejemplo GitHub Pages, Netlify o Cloudflare Pages). Abrir la URL en Chrome Android > menú > Instalar aplicación. La instalación PWA requiere HTTPS o localhost.

## Limitaciones
Los datos se guardan en localStorage de cada navegador y **no se sincronizan** entre Android y Windows. No hay backend ni autenticación. No hay carga oficial de OAs e indicadores ni integración con modelos de IA. Para datos importantes, se requiere implementar exportación y copias de seguridad antes de uso en producción.
