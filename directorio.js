const lugaresDB = {
    "buroz": {
        playas: [{ id: "playa-mamporal", nombre: "Playa Mamporal", ubicacion: "Municipio Buroz", mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.3667,-66.1333", imagenes: ["https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], descripcion: "Arena dorada y aguas tranquilas, ideal para familias.", servicios: [{ nombre: "Estacionamiento", icono: "fa-car" }], comercios: [] }],
        comer: [{ id: "comida-buroz", nombre: "Empanadería La Plaza", ubicacion: "Frente a la Plaza Bolívar", mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.3667,-66.1333", imagenes: ["https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"], descripcion: "Las mejores empanadas de Mamporal.", servicios: [{ nombre: "Comida rápida", icono: "fa-utensils" }], comercios: [{ negocio: "La Plaza", producto: "Empanada de Cazón", precio: "$2", telefono: "584120000001" }] }]
    }
};

function moverCarrusel(direccion) { const carrusel = $("#carrusel-imagenes"); if (carrusel) { const ancho = carrusel.clientWidth; carrusel.scrollBy({ left: ancho * direccion, behavior: 'smooth' }); } }

function cargarDirectorio() {
    const idLugar = getParam('id'); const municipio = getParam('municipio'); const categoria = getParam('categoria');
    const estado = $("#mensaje-estado"); const principal = $("#contenido-principal");
    const vistaDetalle = $("#vista-detalle"); const vistaLista = $("#vista-lista");
    const enlaceRest = $("#enlace-restaurante"); enlaceRest.href = municipio ? `restaurante.html?municipio=${municipio}` : 'restaurante.html';

    if (idLugar) {
        let lugarEncontrado = null;
        for (const muni in lugaresDB) { for (const cat in lugaresDB[muni]) { const arr = lugaresDB[muni][cat]; const hallado = arr.find(p => p.id === idLugar); if (hallado) { lugarEncontrado = hallado; break; } } if (lugarEncontrado) break; }
        if (lugarEncontrado) {
            $("#titulo-header").textContent = lugarEncontrado.nombre; $("#lugar-nombre").textContent = lugarEncontrado.nombre;
            $("#lugar-ubicacion").textContent = lugarEncontrado.ubicacion; $("#lugar-descripcion").textContent = lugarEncontrado.descripcion;
            $("#carrusel-imagenes").innerHTML = lugarEncontrado.imagenes.map(img => `<div class="slide" style="background-image: url('${img}');"></div>`).join('');
            $("#contenedor-servicios").innerHTML = lugarEncontrado.servicios.map(srv => `<span class="tag"><i class="fa-solid ${srv.icono}"></i> ${srv.nombre}</span>`).join('');
            $("#contenedor-comercios").innerHTML = lugarEncontrado.comercios.map(com => { const msg = encodeURIComponent(`Hola, vi tu servicio de ${com.producto} en Monbá QR.`); return `<div class="tarjeta-comercio"><div class="comercio-header"><span class="comercio-nombre">${com.negocio}</span><span class="comercio-precio">${com.precio}</span></div><p class="comercio-desc">Ofrece: ${com.producto}</p><a href="https://wa.me/${com.telefono}?text=${msg}" target="_blank" class="btn-contacto"><i class="fa-brands fa-whatsapp"></i> Contactar</a></div>`; }).join('');
            $("#btn-ruta").dataset.maps = lugarEncontrado.mapsNavegacion;
            vistaDetalle.style.display = 'block'; vistaLista.style.display = 'none';
        } else { $("#titulo-header").textContent = "No encontrado"; estado.innerHTML = `<i class="fa-solid fa-circle-xmark fa-2x"></i><p>Lugar no disponible.</p>`; principal.style.display = 'block'; return; }
    } else if (municipio && categoria) {
        const lugaresMunicipio = lugaresDB[municipio];
        if (lugaresMunicipio && lugaresMunicipio[categoria]) {
            const lista = lugaresMunicipio[categoria];
            $("#titulo-header").textContent = `${categoria.charAt(0).toUpperCase() + categoria.slice(1)} - ${municipio.replace(/-/g,' ')}`;
            $("#titulo-lista").textContent = `Resultados para "${categoria}"`;
            $("#contenedor-lista").innerHTML = lista.map(lugar => `<a href="directorio.html?id=${lugar.id}" class="tarjeta-lugar"><h4>${lugar.nombre}</h4><p><i class="fa-solid fa-location-dot"></i> ${lugar.ubicacion}</p><p>${lugar.descripcion}</p></a>`).join('');
            vistaLista.style.display = 'block'; vistaDetalle.style.display = 'none';
        } else { $("#titulo-header").textContent = "Sin resultados"; $("#titulo-lista").textContent = "No se encontraron lugares."; $("#contenedor-lista").innerHTML = ''; vistaLista.style.display = 'block'; vistaDetalle.style.display = 'none'; }
    } else { $("#titulo-header").textContent = "Directorio"; estado.innerHTML = `<i class="fa-solid fa-circle-info fa-2x"></i><p>Selecciona un municipio y categoría.</p>`; principal.style.display = 'block'; return; }
    estado.style.display = 'none'; principal.style.display = 'block';
}
document.addEventListener("DOMContentLoaded", cargarDirectorio);

