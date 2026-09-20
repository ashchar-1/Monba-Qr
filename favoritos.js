function cargarFavoritos() {
    const favs = getFavoritos(); const contenedor = $("#lista-favoritos"); const estado = $("#mensaje-estado");
    if (favs.length === 0) {
        estado.innerHTML = `<div class="favoritos-vacio"><i class="fa-regular fa-heart"></i><p>Aún no tienes lugares favoritos.<br>Explora y toca el corazón para guardarlos.</p></div>`;
        estado.style.display = "block"; $("#contenido-favoritos").style.display = "none";
        return;
    }
    contenedor.innerHTML = favs.map(f => `
        <div class="tarjeta-lugar">
            <button class="btn-fav-mini favorito-activo" data-action="fav" data-fav-id="${f.id}" title="Quitar de favoritos">
                <i class="fa-solid fa-heart"></i>
            </button>
            <h4 style="color: var(--color-primario);">${f.titulo}</h4>
            <p style="font-size: .9rem; color: #555;">Guardado en tu colección personal.</p>
            <a href="${f.url}" class="btn-contacto" style="margin-top: 10px;">Ver lugar</a>
        </div>`).join('');
    estado.style.display = "none"; $("#contenido-favoritos").style.display = "block";
    sincronizarFavoritos();
}
document.addEventListener("DOMContentLoaded", cargarFavoritos);
