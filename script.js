// 1. Función para cargar archivo JSON del idioma
async function cargarTraducciones(idioma) {
  try {
    const response = await fetch(`lang/${idioma}.json`);
    const data = await response.json();
    aplicarTraducciones(data);
  } catch (error) {
    console.error(`Error cargando el archivo de idioma (${idioma}):`, error);
  }
}

// 2. Función para aplicar traducciones a los elementos HTML
function aplicarTraducciones(textos) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (textos[key]) el.innerHTML = textos[key];
  });
}

// 3. Detectar cambio de idioma en el selector
document.getElementById('idioma').addEventListener('change', (e) => {
  const idiomaSeleccionado = e.target.value;
  cargarTraducciones(idiomaSeleccionado);
});

// 4. Cargar por defecto idioma 'es' al iniciar
window.addEventListener('DOMContentLoaded', () => {
  cargarTraducciones('es');
});
