/* =====================================================
   MONBÁ QR · municipio.js
   Reseñas humanizadas + data realista de playas
   (Verifica cada dato en campo: tú eres el experto local)
   ===================================================== */

const municipiosDB = {
    "pedro-gual": {
        nombre: "Municipio Pedro Gual",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125586.32626649774!2d-65.77663245!3d10.15583565!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2c77df93b8909f%3A0xc39cb709b114d642!2sCupira%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve",
        mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.1558,-65.7766",
        busquedaGoogle: "Cupira Pedro Gual turismo casabe Playa Machurucuto",
        resena: "Pedro Gual es la puerta de entrada a Barlovento: el pueblo que te recibe con olor a casabe recién hecho y cochino frito en la carretera nacional. En Cúpira la vida transcurre al ritmo de los viajeros que van hacia oriente, y a un paso del pueblo se abre Machurucuto, donde el río abraza al mar y los pescadores aún sacan la cena del día. Es un municipio de gente sencilla y trabajadora que convirtió la parada de carretera en todo un arte.",
        playas: [
            { nombre: "Playa Machurucuto", oleaje: "Moderado, ideal para caminar la orilla", bandera: "amarilla", comoLlegar: "Sobre la Troncal 9, unos 20 min después de Higuerote; desvío señalizado al caserío Machurucuto.", tip: "Prueba el pescado frito en los toldos de la desembocadura." }
        ]
    },
    "brion": {
        nombre: "Municipio Brión",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125547.88785802187!2d-66.195037!3d10.4907954!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2b740523030ba3%3A0xc3fa5a73e35a1a0c!2sHiguerote%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve",
        mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.4908,-66.1950",
        busquedaGoogle: "Higuerote Brión playas Curiepe tambor turismo",
        resena: "Si Barlovento tuviera una postal, sería Higuerote: su malecón, sus toldos de coco y ese mar tranquilo como una piscina, hecho a la medida de los niños. Pero Brión también es el tambor que despierta en Curiepe cada San Juan, el oleaje bravo de Chirimena que reta a los surfistas y la fe de sus pescadores. Es el municipio donde el turismo se volvió casa, cocina y fiesta a la vez.",
        playas: [
            { nombre: "Playa Higuerote", oleaje: "Manso, aguas tipo piscina", bandera: "verde", comoLlegar: "Desde el centro de Higuerote por la Av. Costanera; 5 min en carro o 20 min a pie.", tip: "El atardecer desde el malecón es imperdible." },
            { nombre: "Playa Los Totumos", oleaje: "Manso con pozas poco profundas", bandera: "verde", comoLlegar: "Vía costera al este de Higuerote, unos 10 min en carro.", tip: "Ideal para niños pequeños por sus aguas tranquilas." },
            { nombre: "Playa Chirimena", oleaje: "Fuerte, zona de surfistas", bandera: "roja", comoLlegar: "Desvío de la vía costera, unos 25 min desde Higuerote.", tip: "Si no surfeas, mira desde la arena: el espectáculo está garantizado." }
        ]
    },
    "acevedo": {
        nombre: "Municipio Acevedo",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125586.32626649774!2d-66.3667!3d10.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2c731a22222223%3A0x1111111111111111!2sCaucagua%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve",
        mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.2833,-66.3667",
        busquedaGoogle: "Caucagua Acevedo ruta del cacao haciendas turismo",
        resena: "Caucagua huele a cacao: aquí se cosecha, se seca y se tuesta el 'oro marrón' que le dio fama mundial a Barlovento. Entre haciendas centenarias y esquinas de aire colonial, el municipio Acevedo guarda la memoria de las antiguas tierras cacaoteras y la calidez de un pueblo que saluda con un 'buenos días' que suena a abrazo. Es el corazón verde y montañoso de la región.",
        playas: []
    },
    "andres-bello": {
        nombre: "Municipio Andrés Bello",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125547.88785802187!2d-65.9833!3d10.2833!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2c731a22222223%3A0x2222222222222222!2sSan%20Jos%C3%A9%20de%20Barlovento%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve",
        mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.2833,-65.9833",
        busquedaGoogle: "San José de Barlovento ríos tambores artesanos turismo",
        resena: "San José de Barlovento es un pueblo de ríos y tamboreros: entre montañas y cacaotales aún resuena el golpe del mazo de los artesanos que tallan la madera que después sonará en las fiestas. Aquí el tiempo baja la velocidad entre baños de pozo cristalino y conversaciones de plaza al atardecer. Es el destino perfecto para quien busca un Barlovento auténtico, sin multitudes.",
        playas: []
    },
    "buroz": {
        nombre: "Municipio Buroz",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125586.32626649774!2d-66.1333!3d10.3667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2c731a22222223%3A0x3333333333333333!2sMamporal%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve",
        mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.3667,-66.1333",
        busquedaGoogle: "Mamporal Buroz Boca de Uchire cacao playas turismo",
        resena: "Mamporal vive entre dos mundos: el cacao que perfuma sus haciendas y el mar que se abre en Boca de Uchire, donde el atardecer convierte el agua en oro. Buroz es tradición afrodescendiente, cocinas dulces y pescadores que todavía cuentan historias de la costa. Un municipio que se descubre despacio, como se saborea un buen chocolate.",
        playas: [
            { nombre: "Playa Boca de Uchire", oleaje: "Moderado con brisa constante", bandera: "amarilla", comoLlegar: "Por la Troncal 9, unos 35 min después de Higuerote hacia oriente; entrada en el pueblo de Boca de Uchire.", tip: "Quédate al atardecer: es de los más hermosos de Barlovento." }
        ]
    },
    "paez": {
        nombre: "Municipio Páez",
        mapaUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125547.88785802187!2d-65.9833!3d10.3167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2c731a22222223%3A0x4444444444444444!2sR%C3%ADo%20Chico%2C%20Miranda!5e0!3m2!1ses!2sve!4v1700000000000!5m2!1ses!2sve",
        mapsNavegacion: "https://www.google.com/maps/dir/?api=1&destination=10.3167,-65.9833",
        busquedaGoogle: "Río Chico Páez Tacarigua de la Laguna turismo manglares",
        resena: "Río Chico vive de cara a la laguna: entre canales, garzas y botes que salen de madrugada a la faena. Páez es un municipio de agua —la laguna de Tacarigua, el río Tuy, sus manglares— y de una cocina que sabe a mar y a campo al mismo tiempo. Su gente conserva la calma de quien conoce los horarios de la marea de memoria.",
        playas: [
            { nombre: "Costa de Tacarigua (mar y laguna)", oleaje: "Manso en zona lagunar; moderado en la barra del mar", bandera: "verde", comoLlegar: "Desde Río Chico toma la vía a Tacarigua de la Laguna (~25 min); hay paseos en bote hasta la costa.", tip: "Combina laguna y mar en un mismo día con los botes locales." }
        ]
    }
};

function cargarMunicipio() {
    const id = getParam("id");
    const m = municipiosDB[id];
    const contenedor = $("#contenido-municipio");
    const estado = $("#mensaje-estado");

    if (!m) {
        $("#header-titulo").textContent = "Error";
        estado.innerHTML = `<i class="fa-solid fa-triangle-exclamation fa-2x"></i><p>Municipio no encontrado.</p>`;
        return;
    }

    $("#header-titulo").textContent = m.nombre;
    $("#municipio-nombre").innerHTML = `<i class="fa-solid fa-map-location-dot"></i> ${m.nombre}`;
    $("#municipio-resena").textContent = m.resena;
    $("#mapa-iframe").src = m.mapaUrl;
    $("#btn-como-llegar").dataset.maps = m.mapsNavegacion;
    $("#link-google").href = `https://www.google.com/search?q=${encodeURIComponent(m.busquedaGoogle)}`;

    if (m.playas && m.playas.length > 0) {
        $("#seccion-playas").style.display = "block";
        $("#contenedor-playas").innerHTML = m.playas.map(p => `
            <div class="tarjeta-playa">
                <div class="playa-header">
                    <h4><i class="fa-solid fa-umbrella-beach"></i> ${p.nombre}</h4>
                    <span class="badge-bandera b-${p.bandera}"><i class="fa-solid fa-flag"></i> Bandera ${p.bandera}</span>
                </div>
                <p class="playa-dato"><i class="fa-solid fa-water"></i> <span><strong>Oleaje:</strong> ${p.oleaje}</span></p>
                <p class="playa-dato"><i class="fa-solid fa-route"></i> <span><strong>Cómo llegar:</strong> ${p.comoLlegar}</span></p>
                <p class="playa-dato tip"><i class="fa-solid fa-lightbulb"></i> <span>${p.tip}</span></p>
            </div>
        `).join("");
    }

    estado.style.display = "none";
    contenedor.style.display = "block";
}

document.addEventListener("DOMContentLoaded", cargarMunicipio);