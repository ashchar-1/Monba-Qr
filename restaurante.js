const negociosDB = {
    "la-desembocadura": { nombre: "Restaurante La Desembocadura", portada: "https://images.unsplash.com/photo-1544148103-0773bf10d330?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80", descripcion: "El mejor pescado fresco de Machurucuto.", telefono: "584120000000", coords: "10.1558,-65.7766", menu: [{ categoria: "Platos Principales", items: [{ nombre: "Pargo Frito Playero", desc: "Con tostones y ensalada.", precio: "$15", img: "https://images.unsplash.com/photo-1599084993091-1cb5c0721cc6?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80" }] }] }
};

function cargarNegocio() {
    const idNegocio = getParam('id') || "la-desembocadura"; const negocio = negociosDB[idNegocio];
    const contenedor = $("#perfil-negocio"); const estado = $("#mensaje-estado");
    if (negocio) {
        $("#foto-portada").style.backgroundImage = `url('${negocio.portada}')`; $("#nombre-negocio").textContent = negocio.nombre;
        $("#desc-negocio").textContent = negocio.descripcion;
        $("#btn-ws-general").href = `https://wa.me/${negocio.telefono}?text=Hola, estoy viendo su perfil en Monbá QR.`;
        $("#btn-ruta-rest").dataset.maps = `https://www.google.com/maps/dir/?api=1&destination=${negocio.coords}`;
        const contenedorMenu = $("#contenedor-menu"); let htmlMenu = '';
        negocio.menu.forEach(seccion => {
            htmlMenu += `<h3 style="font-size: 1.2rem; color: var(--color-primario); margin: 20px 0 10px 0; border-bottom: 2px solid var(--color-arena); padding-bottom: 5px; display: inline-block;">${seccion.categoria}</h3>`;
            seccion.items.forEach(plato => {
                const msjPedido = encodeURIComponent(`Hola, vi el ${plato.nombre} en Monbá QR. Quisiera pedir uno.`);
                htmlMenu += `<div class="tarjeta-lugar" style="flex-direction: row; gap: 15px;"><div style="width: 100px; height: 100px; background-image: url('${plato.img}'); background-size: cover; background-position: center; border-radius: 8px; flex-shrink: 0;"></div><div style="flex: 1; display: flex; flex-direction: column; justify-content: center;"><div style="font-size: 1.05rem; font-weight: bold; color: var(--color-texto); margin-bottom: 3px;">${plato.nombre}</div><div style="font-size: 0.85rem; color: #777; margin-bottom: 8px; line-height: 1.3;">${plato.desc}</div><div style="display: flex; justify-content: space-between; align-items: center; margin-top: auto;"><span style="font-weight: bold; color: #fb8500; font-size: 1.1rem;">${plato.precio}</span><a href="https://wa.me/${negocio.telefono}?text=${msjPedido}" target="_blank" class="btn-contacto" style="width: auto; padding: 6px 12px;"><i class="fa-brands fa-whatsapp"></i> Pedir</a></div></div></div>`;
            });
        });
        contenedorMenu.innerHTML = htmlMenu; estado.style.display = 'none'; contenedor.style.display = 'block';
    }
}
document.addEventListener("DOMContentLoaded", cargarNegocio);

