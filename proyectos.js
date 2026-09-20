const proyectosDB = [
    { id: "ruta-cacao-2024", titulo: "Ruta del Cacao de Barlovento", autor: "Trayecto III - Turismo", descripcion: "Propuesta de ruta turística cultural que conecta las haciendas cacaoteras históricas.", categoria: "Turismo Cultural", imagen: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", tags: ["Cacao", "Cultura", "Haciendas"] },
    { id: "tambor-afro-2024", titulo: "Patrimonio Sonoro: El Tambor", autor: "Trayecto II - Patrimonio", descripcion: "Documentación y preservación de los ritmos tradicionales de tambor en Curiepe.", categoria: "Patrimonio", imagen: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", tags: ["Música", "Tradición", "Afrovenezolano"] },
    { id: "gastronomia-playa-2024", titulo: "Gastronomía Playera Sostenible", autor: "Trayecto IV - Turismo", descripcion: "Inventario de la gastronomía típica de las playas de Barlovento.", categoria: "Gastronomía", imagen: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80", tags: ["Comida", "Playas", "Sostenible"] }
];

function cargarProyectos() {
    const contenedor = $("#lista-proyectos"); const estado = $("#mensaje-estado");
    contenedor.innerHTML = proyectosDB.map(p => `
        <div class="tarjeta-lugar">
            <button class="btn-fav-mini" data-action="fav" data-fav-id="proyecto-${p.id}" data-fav-titulo="${p.titulo}" data-fav-url="proyectos.html" title="Guardar proyecto">
                <i class="fa-regular fa-heart"></i>
            </button>
            <div style="display: flex; gap: 15px;">
                <div style="width: 100px; height: 100px; background-image: url('${p.imagen}'); background-size: cover; background-position: center; border-radius: 8px; flex-shrink: 0;"></div>
                <div style="flex: 1;">
                    <h4 style="color: var(--color-primario); margin-bottom: 5px;">${p.titulo}</h4>
                    <p style="font-size: 0.85rem; color: #666; margin-bottom: 5px;"><i class="fa-solid fa-user-graduate"></i> ${p.autor}</p>
                    <p style="font-size: 0.9rem; color: #555; line-height: 1.4;">${p.descripcion}</p>
                    <div class="servicios-tags" style="margin-top: 8px;">${p.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>
                </div>
            </div>
        </div>`).join('');
    estado.style.display = "none"; $("#contenido-proyectos").style.display = "block";
    sincronizarFavoritos();
}
document.addEventListener("DOMContentLoaded", cargarProyectos);
