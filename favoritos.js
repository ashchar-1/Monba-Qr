function cargarFavoritos() {
    const favs = getFavoritos(); const contenedor = $("#lista-favoritos"); const estado = $("#mensaje-estado");
    if (favs.length === 0) {
        estado.innerHTML = `<div class="favoritos-vacio"><i class="fa-regular fa-heart"></i><p>Aún no tienes lugares favoritos.<br>Explora y guarda los que más te gusten.</p></div>`;
        estado.style.display = "block"; $("#contenido-favoritos").style.display = "none"; return;
    }
    // Simulación: En un proyecto real, buscarías estos IDs en tu DB. Aquí mostramos los IDs guardados.
    contenedor.innerHTML = favs.map(id => `<div class="tarjeta-lugar"><h4 style="color: var(--color-primario);">Lugar guardado</h4><p style="font-size: 0.9rem; color: #555;">ID: ${id}</p><a href="directorio.html?id=${id}" class="btn-contacto" style="margin-top: 10px;">Ver lugar</a></div>`).join('');
    estado.style.display = "none"; $("#contenido-favoritos").style.display = "block";
}
document.addEventListener("DOMContentLoaded", cargarFavoritos);

