const IMG = {
  t1: "img/t1.jpg",
  art1: "img/art1.jpg",
  tel: "img/tel.jpg",
  hands: "img/hands.jpg",
  cest: "img/cest.jpg",
  gem: "img/gem.jpg",
  pet: "img/pet.jpg",
  jar: "img/jar.jpg",
  cuc: "img/cuc.jpg",
  art2: "img/art2.jpg",
  man: "img/man.jpg",
  cam: "img/cam.jpg",
  r1: "img/r1.jpg",
  r4: "img/r4.jpg",
  gall: "img/gall.jpg",
  tag: "img/tag.jpg",
  tag1: "img/tag1.jpg",
  tag2: "img/tag2.jpg",
  tag3: "img/tag3.jpg",
  vas: "img/vas.jpg",
  chi: "img/chi.jpg",
  gua: "img/gua.jpg",
  car: "img/car.jpg",
  car2: "img/car2.jpg",
  car3: "img/car3.jpg",
  guan: "img/guan.jpg",
  rua: "img/rua.jpg",
  esq: "img/esq.jpg",
  lana: "img/lana.jpg",
  vena: "img/vena.jpg",
  horm: "img/horm.jpg",
  bici: "img/bici.jpg",
  mes: "img/mes.jpg",
  arttagu: "img/arttagu.jpg",
  artana: "img/artana.jpg",
  artcar: "img/artcar.jpg",
  teje: "img/teje.jpg",
  laur: "img/laur.jpg",
  alfa: "img/alfa.jpg",
  teje: "img/teje.jpg"
};

const HERO_OFICIOS = [
  {
    oficio: "Alfarería",
    detalle: "Arcilla · torno y modelado",
    lugar: "Taller de barro · Ráquira",
    tipo: "barro",
    fondo: "hands",
    colores: ["#FBE6BE", "#F3B76B", "#8A3A14"],
    luz: { cielo: 0xFFE3B0, suelo: 0x8A3A14, rim: 0xF39325 }
  },
  {
    oficio: "Cestería",
    detalle: "Esparto · entrelazado",
    lugar: "Campo de esparto · Tenza y Cerinza",
    tipo: "fibra",
    fondo: "cest",
    colores: ["#A7CF52", "#5F8C1E", "#1F3A0A"],
    luz: { cielo: 0xE9F5C0, suelo: 0x1F3A0A, rim: 0xE3A23A }
  },
  {
    oficio: "Tejeduría",
    detalle: "Lana · hilado en huso",
    lugar: "Telar de ruanas · Nobsa",
    tipo: "lana",
    fondo: "tel",
    colores: ["#B03348", "#5A1024", "#2A0A12"],
    luz: { cielo: 0xFFF3D6, suelo: 0x5A1024, rim: 0xF39325 }
  }
];

const OF = [
  ["Tallado", "Madera, tagua, carbón", "t1", "Gubias y paciencia: el dibujo aparece al quitar material."],
  ["Tejeduría", "Lana de oveja", "tel", "Hilos que se cruzan en el telar hasta volverse ruana."],
  ["Alfarería", "Arcilla", "hands", "Barro que sube en el torno y toma forma entre las manos."],
  ["Cestería", "Esparto, fique", "cest", "Fibras entrelazadas que se vuelven canastos y petacas."],
  ["Otros", "Cuero, piedras", "gem", "Cuero, esmeraldas y otros materiales de la región."]
];

const CH = [
  ["Material", "La tierra da la lana, la arcilla, la fibra y la madera.", "r4", "🌱"],
  ["Manos", "Detrás de cada pieza hay alguien que aprendió mirando.", "hands", "🖐️"],
  ["Técnica", "Telar, torno, gubia: saberes que se heredan.", "tel", "🧵"],
  ["Proceso", "Horas de repetición, ajustes y detalle.", "t1", "⏳"],
  ["Historia", "Cada artesano guarda la memoria de su oficio.", "art1", "📖"],
  ["Objeto", "La pieza final lleva todo esto adentro.", "r1", "🏺"]
];

const HOW = [
  ["Materia prima", "Lana de oveja de la región.", "r4"],
  ["Lavado y limpieza", "Se eliminan las impurezas.", "man"],
  ["Hilado", "La lana se hila manualmente.", "tel"],
  ["Tejido", "En telar tradicional.", "tel"],
  ["Producto final", "Ruana tejida a mano.", "r2"]
];

const PIEZAS = [
  {
    id: "ruana",
    nombre: "Ruana tejida en telar",
    precio: 220000,
    municipio: "Nobsa",
    oficio: "Tejeduría",
    categoria: "Prendas",
    material: "Lana de oveja",
    tecnica: "Tejido en telar",
    artesano: "Ana Torres",
    imagen: "rua",
    descripcion: "Prenda emblemática de Boyacá, tejida en telar con lana de oveja.",
    destacada: true,
  },
  {
    id: "canasto",
    nombre: "Canasto cobre",
    precio: 80000,
    municipio: "Duitama",
    oficio: "Cestería",
    categoria: "Hogar",
    material: "Esparto",
    tecnica: "Entrelazado",
    artesano: "Pedro Ruiz",
    imagen: "gua",
    descripcion: "Canasto de esparto entrelazado a mano, firme y ligero.",
  },
  {
    id: "mantas",
    nombre: "Mantas tejidas",
    precio: 160000,
    municipio: "Tunja",
    oficio: "Tejeduría",
    categoria: "Hogar",
    material: "Lana",
    tecnica: "Telar horizontal",
    artesano: "José López",
    imagen: "man",
    descripcion: "Mantas de lana tejidas en telar horizontal.",
    destacada: true,
  },
  {
    id: "vajilla",
    nombre: "Vajilla",
    precio: 100000,
    municipio: "Ráquira",
    oficio: "Alfarería",
    categoria: "Decoración",
    material: "Arcilla",
    tecnica: "Modelado",
    artesano: "Felipe Melo",
    imagen: "jar",
    descripcion: "Jarrón de arcilla modelado a mano.",
    destacada: true,
  },
  {
    id: "vasija",
    nombre: "Vasija Chibcha",
    precio: 135000,
    municipio: "Sogamoso",
    oficio: "Alfarería",
    categoria: "Cocina",
    material: "Arcilla",
    tecnica: "Modelado",
    artesano: "Manuel Gómez",
    imagen: "chi",
    descripcion: "Vasija chibcha de arcilla modelados a mano.",
  },
  {
    id: "florero",
    nombre: "Florero",
    precio: 55000,
    municipio: "Villa de Leyva",
    oficio: "Alfarería",
    categoria: "Hogar",
    material: "Arcilla",
    tecnica: "Modelado",
    artesano: "Amalia Rodríguez",
    imagen: "vas",
    descripcion: "Florero decorativo",
  },
  {
    id: "canasto",
    nombre: "Canasto gallina",
    precio: 95000,
    municipio: "Cerinza",
    oficio: "Cestería",
    categoria: "Hogar",
    material: "Esparto",
    tecnica: "Entrelazado",
    artesano: "Luz Quintero",
    imagen: "gall",
    descripcion: "Canasto en forma de gallina útil para colocar huevos.",
    destacada: true,
  },
  {
    id: "petacas",
    nombre: "Petacas",
    precio: 85000,
    municipio: "Guacamayas",
    oficio: "Cestería",
    categoria: "Hogar",
    material: "Fique",
    tecnica: "Entrelazado",
    artesano: "María González",
    imagen: "pet",
    descripcion: "Canastos de fique con entrelazado tradicional.",
  },
  {
    id: "guantes",
    nombre: "Guantes de lana",
    precio: 60000,
    municipio: "Sotaquirá",
    oficio: "Tejeduría",
    categoria: "Prendas",
    material: "Lana de oveja",
    tecnica: "Telar horizontal",
    artesano: "José López",
    imagen: "guan",
    descripcion: "Guantes de lana de oveja para el frío.",
  },
  {
    id: "cucharas",
    nombre: "Cucharas",
    precio: 45000,
    municipio: "Monguí",
    oficio: "Tallado",
    categoria: "Cocina",
    material: "Madera",
    tecnica: "Tallado",
    artesano: "Artesano de Duitama",
    imagen: "cuc",
    descripcion: "Cucharas de madera talladas a mano.",
    destacada: true,
  },
  {
    id: "tortuga",
    nombre: "Tortuga",
    precio: 65000,
    municipio: "Chiquinquirá",
    oficio: "Tallado",
    categoria: "Decoración",
    material: "Tagua",
    tecnica: "Tallado con torno",
    artesano: "Hernando Cortés",
    imagen: "tag",
    descripcion: "Figura tallada en tagua, conocida como marfil vegetal.",
    destacada: true,
    prueba: true,
  },
  {
    id: "virgen",
    nombre: "Virgen",
    precio: 72000,
    municipio: "Tópaga",
    oficio: "Tallado",
    categoria: "Hogar",
    material: "Carbón",
    tecnica: "Tallado",
    artesano: "Luis Torres",
    imagen: "car",
    descripcion: "Virgen tallado con dedicación en carbón.",
    prueba: true,
  },
];

const MUNICIPIOS = [
  {
    nombre: "Nobsa",
    imagen: "rua",
    oficio: "Tejeduría",
    material: "Lana de oveja",
    tecnica: "Tejido en telar",
    descripcion: "Municipio ruanero: la lana de oveja se hila y se teje en telar para hacer ruanas, mantas y prendas de abrigo.",
    turismo: ["Recorrido por talleres de tejeduría", "Plaza y mercado del pueblo"],
    experiencias: [
      ["Visita a un taller de telar", "Ver cómo se arma una ruana, de la fibra a la prenda."],
      ["Compra directa", "Llevar la pieza desde el lugar donde se hace."],
    ],
    coordenadas: [5.767, -72.939],
    piezas: ["ruana", "mantas", "guantes", "gorros", "bufandas"],
    fotos: ["man", "rua", "guan"],
    prueba: true,
  },
  {
    nombre: "Ráquira",
    imagen: "jar",
    oficio: "Alfarería",
    material: "Arcilla",
    tecnica: "Modelado",
    descripcion: "Capital del barro: calles de colores, talleres y tiendas donde la arcilla se modela a mano.",
    turismo: ["Calle principal y tiendas de cerámica", "Talleres de alfarería abiertos al público"],
    experiencias: [
      ["Taller de modelado", "Probar el barro con las manos de un alfarero."],
    ],
    coordenadas: [5.539, -73.633],
    piezas: ["jarron", "pocillos", "platos", "alcancias"],
    fotos: ["jar", "vas", "r1"],
    prueba: true,
  },
  {
    nombre: "Tenza",
    imagen: "gall",
    oficio: "Cestería",
    material: "Esparto",
    tecnica: "Entrelazado",
    descripcion: "Pueblo de fibras: el esparto y el fique se entrelazan en canastos, individuales y accesorios.",
    turismo: ["Talleres de cestería", "Paisaje de la provincia de Oriente"],
    coordenadas: [5.073, -73.421],
    piezas: ["canastos", "individuales", "aretes"],
    fotos: ["pet", "gall", "gua"],
    prueba: true,
  },
  {
    nombre: "Cerinza",
    imagen: "pet",
    oficio: "Cestería",
    material: "Esparto",
    tecnica: "Entrelazado",
    descripcion: "Tierra de petacas: el esparto se entrelaza a mano para hacer piezas de uso diario.",
    turismo: ["Talleres de esparto"],
    coordenadas: [5.953, -72.955],
    piezas: ["petaca"],
    fotos: ["pet", "gall", "gua"],
    prueba: true,
  },

  {
    nombre: "Chiquinquirá",
    imagen: "tag",
    oficio: "Talla",
    material: "Tagua",
    tecnica: "Tallado de contorno",
    descripcion: "Talla de tagua, el marfil vegetal: de una semilla dura nacen figuras y detalles.",
    turismo: ["Basílica y plaza principal", "Talleres de talla"],
    coordenadas: [5.617, -73.817],
    piezas: ["figura-tagua"],
    fotos: ["tag1", "tag2", "tag3"],
    prueba: true,
  },
  {
    nombre: "Tunja",
    imagen: "cuc",
    oficio: "Tallado",
    material: "Madera",
    tecnica: "Armado y torno",
    descripcion: "Capital de Boyacá: la talla en madera convive con su centro histórico.",
    turismo: ["Centro histórico", "Iglesias y museos"],
    coordenadas: [5.535, -73.367],
    piezas: ["mesas"],
    fotos: ["mes", "cam"],
    prueba: true,
  },
  {
    nombre: "Duitama",
    imagen: "mes",
    oficio: "Tallado",
    material: "Madera",
    tecnica: "Tallado",
    descripcion: "Talleres de madera y fibras: cucharas talladas, juguetes armados y canastos.",
    turismo: ["Plaza y mercado", "Talleres de carpintería"],
    coordenadas: [5.827, -73.034],
    piezas: ["canasto", "camion", "cucharas"],
    fotos: ["cam", "cuc"],
    prueba: true,
  },
  {
    nombre: "Villa de Leyva",
    imagen: "r1",
    oficio: "Alfarería",
    material: "Arcilla",
    tecnica: "Modelado manual",
    descripcion: "Pueblo colonial de calles empedradas, con cerámica y fibras naturales en sus talleres.",
    turismo: ["Plaza mayor empedrada", "Talleres de cerámica"],
    coordenadas: [5.633, -73.525],
    piezas: ["jarron", "pocillos", "platos", "alcancias"],
    fotos: ["jar", "vas", "r1"],
    prueba: true,
  },
  {
    nombre: "Sutamarchán",
    imagen: "vas",
    oficio: "Alfarería",
    material: "Arcilla",
    tecnica: "Modelado manual",
    descripcion: "Tradición de cerámica en un valle cercano a Ráquira.",
    turismo: ["Talleres de cerámica"],
    coordenadas: [5.619, -73.634],
    piezas: ["jarron", "pocillos", "platos", "alcancias"],
    fotos: ["jar", "vas", "r1"],
    prueba: true,
  },
  {
    nombre: "Gámeza",
    imagen: "man",
    oficio: "Tejeduría",
    material: "Lana de oveja",
    tecnica: "Telar horizontal",
    descripcion: "Lana de oveja hilada y tejida en telar para prendas y piezas de hogar.",
    turismo: ["Talleres de tejeduría"],
    coordenadas: [5.833, -72.808],
    piezas: ["ruana", "mantas", "guantes", "gorros", "bufandas"],
    fotos: ["man", "rua", "guan"],
    prueba: true,
  },
  {
    nombre: "Guacamayas",
    imagen: "gua",
    oficio: "Cestería",
    material: "Fique",
    tecnica: "Cestería en rollo",
    descripcion: "Fibras entrelazadas en espiral para hacer mochilas y canastos.",
    turismo: ["Talleres de cestería"],
    coordenadas: [6.455, -72.5],
    piezas: ["petaca", "canastos"],
    fotos: ["pet", "gall", "gua"],
    prueba: true,
  },
  {
    nombre: "Sotaquirá",
    imagen: "guan",
    oficio: "Tejeduría",
    material: "Lana de oveja",
    tecnica: "Crochet",
    descripcion: "Lana tejida a mano en crochet y telar.",
    turismo: ["Talleres de tejeduría"],
    coordenadas: [5.767, -73.243],
    piezas: ["ruana", "mantas", "guantes", "gorros", "bufandas"],
    fotos: ["man", "rua", "guan"],
    prueba: true,
  },
];

const ARTESANOS = [
  {
    nombre: "Ana Torres",
    municipio: "Nobsa",
    oficio: "Tejeduría",
    material: "Lana de oveja",
    tecnica: "Tejido en telar",
    experiencia: 15,
    imagen: "artana",
    fotos: ["rua", "guan", "man"],
    descripcion: "Aprendió el oficio de su madre y su abuela. 15 años de experiencia.",
    cita: "La ruana no es solo una prenda, es el resultado de muchas manos, de historias y de amor por nuestra tierra.",
    peso: 3,
    inicio: true,
  },
  {
    nombre: "Hernando Cortés",
    municipio: "Chiquinquirá",
    oficio: "Tallado",
    material: "Tagua",
    tecnica: "Tallado con torno",
    imagen: "arttagu",
    fotos: ["tag", "tag1", "tag2"],
    descripcion: "Especialista en tallado contorno en material de tagua.",
    peso: 2,
    inicio: true,
  },
  {
    nombre: "Amalia Rodríguez",
    municipio: "Ráquira",
    oficio: "Alfarería",
    material: "Arcilla",
    tecnica: "Modelado",
    imagen: "alfa",
    fotos: ["jar", "vas", "r1"],
    descripcion: "Modela jarrones, pocillos y platos de arcilla en Ráquira.",
    peso: 2,
    inicio: true,
    prueba: true,
  },
  {
    nombre: "Luz Quintero",
    municipio: "Tenza",
    oficio: "Cestería",
    material: "Esparto",
    tecnica: "Entrelazado",
    imagen: "teje",
    fotos: ["pet", "gall", "gua"],
    descripcion: "Maestra artesana con énfasis en cestería en esparto.",
    peso: 1,
    inicio: true,
  },
  {
    nombre: "Luis Torres",
    municipio: "Tópaga",
    oficio: "Tallado",
    material: "Carbón",
    tecnica: "Tallado",
    imagen: "artcar",
    fotos: ["car", "car"],
    descripcion: "Da vida a figuras en carbón.",
    peso: 1,
    prueba: true,
  },
];



const RM = matchMedia(
  "(prefers-reduced-motion:reduce)"
).matches;

const $ = (s, r = document) =>
  r.querySelector(s);

const $$ = (s, r = document) =>
  [...r.querySelectorAll(s)];

const money = n =>
  "$" + n.toLocaleString("es-CO");

let cart = {};

try {
  cart = JSON.parse(
    localStorage.getItem("qua") || "{}"
  );
} catch (e) {}

const save = () => {
  try {
    localStorage.setItem(
      "qua",
      JSON.stringify(cart)
    );
  } catch (e) {}

  $("#bd").textContent =
    Object.values(cart).reduce(
      (a, b) => a + b,
      0
    );
};


// ================================
// PARTE 2 · LÓGICA Y VISTAS
// ================================

/* ---- Normalizador de texto (claves de municipio, búsquedas) ---- */
const norm = s =>
  String(s || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/gi, " ")
    .trim()
    .toLowerCase();

/* ---- Imágenes: acepta clave de IMG, ruta o vacío (→ recuadro pendiente) ---- */
const svgUri = s =>
  "data:image/svg+xml," +
  encodeURIComponent(s)
    .replace(/\(/g, "%28")
    .replace(/\)/g, "%29")
    .replace(/'/g, "%27");

const phImg = (txt = "") => svgUri(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 500">` +
  `<rect width="400" height="500" fill="#EEEFB2"/>` +
  `<path d="M0 60L60 0M0 140L140 0M0 220L220 0M0 300L300 0M0 380L380 0M0 460L460 0M40 500L400 140M120 500L400 220M200 500L400 300M280 500L400 380M360 500L400 460" stroke="#F39325" stroke-opacity=".35" stroke-width="3"/>` +
  `<circle cx="200" cy="230" r="46" fill="none" stroke="#5A1024" stroke-width="5"/>` +
  `<path d="M180 240l14-16 12 12 10-8 14 12z" fill="#5A1024"/>` +
  `<text x="200" y="320" text-anchor="middle" font-family="Quicksand,sans-serif" font-size="22" font-weight="700" fill="#5A1024">Imagen pendiente</text>` +
  (txt ? `<text x="200" y="352" text-anchor="middle" font-family="Quicksand,sans-serif" font-size="18" fill="#5A1024">${String(txt).replace(/[<&>"]/g, "")}</text>` : "") +
  `</svg>`
);

IMG.vacio = phImg();

const imgKey = (id, src, label) => {
  if (!src) { IMG["ph_" + id] = phImg(label); return "ph_" + id; }
  if (IMG[src]) return src;
  IMG["u_" + id] = src;
  return "u_" + id;
};

/* Si un archivo de imagen no existe, se muestra el recuadro pendiente */
addEventListener("error", e => {
  const t = e.target;
  if (t && t.tagName == "IMG" && !t.dataset.ph) {
    t.dataset.ph = 1;
    t.src = IMG.vacio;
  }
}, true);

/* ---- PIEZAS → formato interno P ---- */
const precioNum = v =>
  typeof v == "number" ? v : (+String(v || "").replace(/\D/g, "") || 0);

const P = PIEZAS.map(x => ({
  id: x.id,
  n: x.nombre,
  pr: precioNum(x.precio),
  mun: x.municipio,
  of: x.oficio,
  cat: x.categoria || "",
  mat: x.material,
  tec: x.tecnica,
  art: x.artesano,
  desc: x.descripcion || "",
  prueba: !!x.prueba,
  dest: !!x.destacada,
  img: imgKey("p_" + x.id, x.imagen, x.nombre),
  gal: x.galeria ? x.galeria.map((g, i) => imgKey("p_" + x.id + "_" + i, g, x.nombre)) : undefined
}));

/* ---- MUNICIPIOS + ARTESANOS → TERR (lo que lee el mapa) ---- */
const TERR = Object.fromEntries(MUNICIPIOS.map(m => {
  const k = norm(m.nombre);
  return [k, {
    nombre: m.nombre,
    desc: m.descripcion,
    tur: m.turismo,
    exp: m.experiencias,
    coord: m.coordenadas,
    prueba: !!m.prueba,
    piezas: m.piezas || [],
    fotos: [imgKey("m_" + k, m.imagen, m.nombre), ...(m.fotos || []).map((f, i) => imgKey("m_" + k + "_" + i, f, m.nombre))],
    artesanos: ARTESANOS.filter(a => norm(a.municipio) == k).map(a => ({
      n: a.nombre,
      ai: undefined,
      img: imgKey("a_" + norm(a.nombre).replace(/ /g, "-"), a.imagen, a.nombre),
      saber: a.descripcion,
      cita: a.cita
    })),
    extra: {
      oficios: [m.oficio].filter(Boolean),
      tecnicas: [m.tecnica].filter(Boolean),
      materiales: [m.material].filter(Boolean)
    }
  }];
}));

const card = (p, c = "") => `
  <a class="${c}" href="#/pieza/${p.id}" data-cat="${p.cat}">
    <div class="im">
      <img src="${IMG[p.img]}" alt="${p.n}" loading="lazy">
      ${p.cat ? `<span class="pz-tag">${p.cat}</span>` : ""}
    </div>
    <h3>${p.n}</h3>
    <div class="mut">${p.mun} · ${/^Artesano de/.test(p.art) ? "Artesano local" : p.art}</div>
    <div class="pz-pr"><span>${p.of}</span><b>${money(p.pr)}</b></div>
  </a>
`;

/* ---- Íconos por familia de oficio (mapa de hilos) ---- */
const FAMICON = { Tejeduría: "🧶", Alfarería: "🏺", Cestería: "🧺", Talla: "🪵", Otros: "🧵" };

/* ---- Mapa de hilos del inicio: ubica municipios por sus coordenadas ---- */
function tzGeo() {
  const L = MUNICIPIOS.filter(m => m.coordenadas);
  if (!L.length) return { pins: [], d: "" };
  const la = L.map(m => m.coordenadas[0]);
  const lo = L.map(m => m.coordenadas[1]);
  const a = Math.min(...la), b = Math.max(...la);
  const c = Math.min(...lo), d = Math.max(...lo);
  const pad = .1, kx = (d - c) || 1, ky = (b - a) || 1;
  const pins = L.map(m => ({
    m,
    x: (pad + (1 - 2 * pad) * (m.coordenadas[1] - c) / kx) * 100,
    y: (pad + (1 - 2 * pad) * (b - m.coordenadas[0]) / ky) * 100
  }));
  const T = [...pins].sort((p, q) => p.x - q.x);
  let dd = `M${T[0].x.toFixed(1)} ${T[0].y.toFixed(1)}`;
  for (let i = 1; i < T.length; i++) {
    const p = T[i - 1], q = T[i], mx = ((p.x + q.x) / 2).toFixed(1);
    dd += ` C${mx} ${p.y.toFixed(1)} ${mx} ${q.y.toFixed(1)} ${q.x.toFixed(1)} ${q.y.toFixed(1)}`;
  }
  return { pins, d: dd };
}

const cut = (t, n) =>
  !t ? "" : t.length > n ? t.slice(0, n).replace(/\s+\S*$/, "") + "…" : t;


// VISTAS

const V = {};

V[""] = () => {
  const tz = tzGeo();
  const feat = P.filter(p => p.dest);
  const cats = [...new Set(feat.map(p => p.cat).filter(Boolean))];
  const manos = ART.filter(a => a.inicio).slice(0, 4);

  return `
  <section class="hero" data-o="0">
    <div class="wrap">
      <div>
        <h1>
          <span>Artesanías</span>
          <span>que cuentan</span>
          <span>historias</span>
        </h1>

        <p>
          Gira la pieza, cambia el oficio y descubre
          de qué y cómo se hace lo que Boyacá
          hace con las manos.
        </p>

        <a class="btn or" href="#oficios">Explorar</a>
      </div>

      <div class="stage" data-o="0">
        <div class="amb" aria-hidden="true">
          ${HERO_OFICIOS.map((h, i) => `
            <div class="amb-l" data-t="${h.tipo}" style="--c1:${h.colores[0]};--c2:${h.colores[1]};--c3:${h.colores[2]};--bg:url(${h.fondo ? IMG[h.fondo] || h.fondo : ""})">
              <i class="amb-bg"></i>
              <i class="amb-pat"></i>
              ${[1, 2, 3, 4, 5, 6, 7].map(n => `<b class="amb-p" style="--n:${n}"></b>`).join("")}
            </div>`).join("")}
          <i class="amb-floor"></i>
        </div>

        <canvas
          id="cv"
          tabindex="0"
          aria-label="Pieza 3D. Arrastra o usa las flechas para girarla"
        ></canvas>

        <div class="info">
          <div class="chips" role="group" aria-label="Oficio"></div>
          <p id="ti" style="margin:10px 0 0" aria-live="polite"></p>
          <p class="amb-lg" id="tl"></p>
        </div>
      </div>
    </div>
  </section>

  <section class="mb" aria-labelledby="mb-t">
    <div class="wrap mb-in">
      <div class="mb-art">
        <img class="mascota" src="img/mascota_tagua.svg" alt="Mascota de Qua: dos figuras de tagua" width="280" height="265" loading="lazy">
      </div>

      <div class="mb-tx">
        <span class="mb-k">Tu guía por Boyacá</span>
        <h2 id="mb-t">Cada pieza que abres suma un sello</h2>
        <p>Te acompañamos en el recorrido: abre piezas, conoce a quienes las hacen y llena tu pasaporte artesanal con territorios, oficios y materiales.</p>
        <div class="mb-bt">
          <button class="btn" onclick="ppOpen()">Abrir mi pasaporte</button>
          <a class="btn ghost" href="#/boyaca">Ir al mapa</a>
        </div>
      </div>

      <aside class="mb-pp" aria-label="Sellos del pasaporte">
        <div class="mb-ph">
          <h3>Tu pasaporte</h3>
          <span><b id="mbn">${PP.mun.length}</b> / ${MUNS.length} sellos</span>
        </div>
        <ul class="mb-st">
          ${MUNS.map(m => `
            <li>
              <a class="mb-s${PP.mun.includes(m) ? " on" : ""}" href="#/catalogo?mun=${encodeURIComponent(m)}" title="${PP.mun.includes(m) ? "Sello conseguido" : "Abre una pieza de " + m + " para sellarlo"}">
                <i>${m.slice(0, 2)}</i><span>${m}</span>
              </a>
            </li>`).join("")}
        </ul>
        <p class="mb-hn">Abre una pieza de cada municipio para sellar su casilla.</p>
      </aside>
    </div>
  </section>

  <section class="s wrap" id="oficios">
    <h2>Cinco oficios, un territorio</h2>

    <p class="mut" style="max-width:52ch">
      Toca un oficio para abrirlo.
      Cada uno lleva a las piezas hechas
      con esa técnica.
    </p>

    <div class="acc">
      ${OF.map((o, i) => `
        <button
          class="pan"
          aria-expanded="${i == 2}"
          style="background-image:url(${IMG[o[2]]})"
          data-o="${o[0]}"
        >
          <span class="t">
            <h3>${o[0]}</h3>
            <span class="m">
              ${o[1]}. ${o[3]}<br>
              <a href="#/catalogo?of=${o[0]}" style="color:var(--or);font-weight:700">
                Ver piezas de ${o[0].toLowerCase()}
              </a>
            </span>
          </span>
        </button>
      `).join("")}
    </div>
  </section>

  <section class="g-tz" aria-labelledby="tzh">
    <div class="wrap g-tz-in">
      <div class="tz-tx">
        <h2 id="tzh">¿De dónde viene cada pieza?</h2>
        <p>
          Cada artesanía nace en un lugar concreto. Sigue el hilo
          de municipio en municipio y descubre el territorio, la técnica
          y las manos detrás de lo que llevas.
        </p>

        <ul class="tz-l">
          <li><i aria-hidden="true">📍</i><span><b>Territorio</b> El lugar le da el material y el nombre.</span></li>
          <li><i aria-hidden="true">🧵</i><span><b>Técnica</b> El saber que pasa de mano en mano.</span></li>
          <li><i aria-hidden="true">🖐️</i><span><b>Manos</b> Quien la hace y por qué.</span></li>
        </ul>

        <a class="btn" href="#/boyaca">Explorar el mapa</a>
      </div>

      <div class="tz-map" role="group" aria-label="Municipios con artesanías unidos por un hilo">
        <i class="tz-zz" aria-hidden="true"></i>
        <svg class="tz-th" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <path d="${tz.d}" pathLength="1"></path>
        </svg>
        ${tz.pins.map(({ m, x, y }) => {
          const f = fam(m.oficio);
          return `
          <a class="tz-pin" href="#/boyaca/${slug(m.nombre)}" style="left:${x.toFixed(1)}%;top:${y.toFixed(1)}%;--c:${OFC[f]}"
             data-n="${m.nombre}" data-o="${m.oficio}" data-t="${m.tecnica || ""}" data-c="${(m.piezas || []).length}"
             aria-label="${m.nombre}: ${m.oficio}">
            <span aria-hidden="true">${FAMICON[f]}</span>
          </a>`;
        }).join("")}
        <img class="mascota tz-m" src="img/mascota_tagua.svg" alt="" width="150" height="142" loading="lazy">
        <p class="tz-cap" id="tzc" aria-live="polite">Toca un punto: cada municipio guarda un oficio.</p>
      </div>
    </div>
  </section>

  <section
    class="chain"
    style="height:${CH.length * 87}vh"
    aria-label="De la materia al objeto"
  >
    <div class="st">
      <div class="cn-l">
        <p class="cn-top">
          <span>Cómo nace una pieza</span>
          <b id="cn">1 / ${CH.length}</b>
        </p>

        <div class="w" id="cw">Material</div>
        <p class="d" id="cd"></p>

        <div class="thread">
          ${CH.map((c, i) => `
            <button data-i="${i}" aria-label="Etapa ${i + 1}: ${c[0]}">
              <em aria-hidden="true">${c[3] || i + 1}</em>
              <span><small>${i + 1}</small>${c[0]}</span>
            </button>
          `).join("")}
        </div>
      </div>

      <div class="ph">
        ${CH.map(c => `<img src="${IMG[c[2]]}" alt="">`).join("")}
        <span class="cn-bd" id="cb" aria-hidden="true"></span>
      </div>
    </div>
  </section>

  <section class="s pz-s">
    <div class="wrap pz-h">
      <div>
        <h2>Piezas para empezar</h2>
        <p class="mut">Una primera selección: elige una y sigue su hilo hasta las manos que la hicieron.</p>
      </div>
      <div class="pz-fl" role="group" aria-label="Filtrar por categoría">
        <button class="pz-f" data-c="" aria-pressed="true">Todas</button>
        ${cats.map(c => `<button class="pz-f" data-c="${c}" aria-pressed="false">${c}</button>`).join("")}
      </div>
    </div>

    <div class="rail pz-g" tabindex="0" aria-label="Piezas destacadas">
      ${feat.map(p => card(p, "pz")).join("")}
    </div>

    <div class="wrap">
      <a class="btn" href="#/catalogo">Ver todas las artesanías</a>
    </div>
  </section>

  <section class="s wrap mn" aria-labelledby="mn-t">
    
    <div class="mn-h">
      <h2 id="mn-t">Las manos detrás</h2>
      <p class="mut">Cada pieza empieza en las manos de alguien. Estas son algunas de las personas que mantienen vivos los oficios de Boyacá.</p>
    </div>

    <div class="mn-g n${manos.length}">
      ${manos.map((a, i) => `
        <a class="mn-c mn-${i + 1}" href="#/artesano/${a.id}" style="--c:${OFC[a.fam]}">
          <span class="mn-ph"><img src="${IMG[a.fotos[0]]}" alt="${a.n}" loading="lazy"></span>
          <span class="mn-b">
            <small class="mn-k">${a.of[0]}${a.tec[0] ? " · " + a.tec[0] : ""}</small>
            <h3>${a.n}</h3>
            <span class="mn-m">${a.mun}</span>
            <span class="mn-d">${cut(a.saber, i ? 90 : 150) || "Perfil por completar."}</span>
            ${i == 0 && a.cita ? `<q class="mn-q">${cut(a.cita, 110)}</q>` : ""}
            <span class="mn-go">Ver perfil <i aria-hidden="true">→</i></span>
          </span>
        </a>`).join("")}
    </div>

    <a class="btn" href="#/artesanos">Conocer a todos</a>
  </section>
`;
};


V.boyaca = () => `
  <section
    class="geo"
    aria-label="Mapa de Boyacá por municipios"
  >
    <svg
      class="g-svg"
      role="group"
      aria-label="Mapa de Boyacá dividido por municipios"
      viewBox="0 0 1000 700"
    ></svg>

    <svg
      class="g-lines"
      aria-hidden="true"
    ></svg>

    <div
      class="g-orb"
      aria-hidden="true"
    ></div>

    <div class="g-ui g-head">
      <h1>
        Conoce <b>Boyacá</b>
      </h1>

      <p>
        Elige un municipio y sigue el hilo:
        territorio, técnica, material, objeto y saber.
      </p>

      <div class="g-search">
        <span aria-hidden="true">⌕</span>

        <label
          class="sr"
          for="gq"
        >
          Buscar municipio
        </label>

        <input
          id="gq"
          type="search"
          list="gdl"
          placeholder="Buscar municipio"
          autocomplete="off"
        >

        <datalist id="gdl"></datalist>
      </div>

      <div
        class="g-count"
        aria-live="polite"
      ></div>
    </div>

    <div class="g-ui g-hint">
      Arrastra para moverte · Ctrl + rueda para acercar
    </div>

    <div
      class="g-ui g-filters"
      role="group"
      aria-label="Filtrar por oficio"
    >
      <button
        class="g-f"
        data-f=""
        aria-pressed="true"
      >
        Todos
      </button>

      ${Object.entries(OFC).map(([k, c]) => `
        <button
          class="g-f"
          data-f="${k}"
          style="--c:${c}"
          aria-pressed="false"
        >
          <i></i>${k}
        </button>
      `).join("")}
    </div>

    <div class="g-ui g-zoom">
      <button
        data-z="in"
        aria-label="Acercar"
      >
        +
      </button>

      <button
        data-z="out"
        aria-label="Alejar"
      >
        −
      </button>

      <button
        data-z="all"
        aria-label="Ver todo Boyacá"
      >
        ⌂
      </button>
    </div>

    <div
      class="g-ui g-empty"
      role="region"
      aria-label="Cargar límites municipales"
    >
      <h2>
        Falta cargar los límites de Boyacá
      </h2>

      <p>
        Este mapa usa los polígonos oficiales
        de cada municipio; no dibuja formas aproximadas.
      </p>

      <ol>
        <li>
          Descarga los límites reales de los 123
          municipios (GeoJSON, licencia MIT):

          <a
            href="https://github.com/mwlware/geojson_boyaca/blob/main/boyaca_geojson_123_municipios.geojson"
            target="_blank"
            rel="noopener"
          >
            repositorio mwlware/geojson_boyaca
          </a>.

          También sirve cualquier GeoJSON
          o TopoJSON del DANE.
        </li>

        <li>
          Cárgalos aquí o suéltalos sobre el mapa.
          El filtro de Boyacá (código 15) es automático.
        </li>
      </ol>

      <label class="g-file">
        Cargar archivo

        <input
          type="file"
          accept=".json,.geojson,.topojson,application/json"
        >
      </label>

      <p
        class="g-err"
        role="alert"
        hidden
      ></p>
    </div>

    <label
      class="g-chg"
      hidden
    >
      Cambiar límites cargados

      <input
        type="file"
        accept=".json,.geojson,.topojson,application/json"
      >
    </label>

    <div
      class="g-tip"
      aria-hidden="true"
    ></div>

    <div
      id="gl"
      class="sr"
      aria-live="polite"
    ></div>

    <aside
      class="g-pnl"
      hidden
      aria-label="Ficha del municipio"
    >
      <div class="g-ph">
        <button class="g-back">
          ← Volver al mapa
        </button>

        <h2 tabindex="-1"></h2>
        <p></p>
      </div>

      <div
        class="g-rail"
        role="tablist"
        aria-label="Recorrido del territorio"
      >
        ${PASOS.map(p => `
          <button role="tab">
            ${p}
          </button>
        `).join("")}
      </div>

      <div
        class="g-body"
        role="tabpanel"
      ></div>

      <div class="g-pnav">
        <button
          class="btn ghost"
          data-p
        >
          Anterior
        </button>

        <button
          class="btn"
          data-n
        >
          Siguiente
        </button>
      </div>
    </aside>
  </section>
`;


V.proceso = () => `
  <div
    class="wrap"
    style="padding-top:48px"
  >
    <h1
      style="font-size:clamp(2.4rem,6vw,5rem)"
    >
      El proceso de cada pieza
    </h1>

    <p style="max-width:44ch">
      Cada artesanía es el resultado de un
      conocimiento que se transmite de generación
      en generación. Desliza para recorrerlo.
    </p>
  </div>

  <div
    class="pro"
    tabindex="0"
    aria-label="Pasos del proceso"
  >
    ${[
      [
        "Materia prima",
        "Se seleccionan los materiales naturales " +
        "de la región: lana, madera, cerámica.",
        "r4"
      ],
      [
        "Preparación",
        "Se limpian, se secan y acondicionan " +
        "para iniciar la elaboración.",
        "man"
      ],
      [
        "Técnica",
        "Se aplican las técnicas tradicionales " +
        "transmitidas por generaciones.",
        "tel"
      ],
      [
        "Detalles",
        "Se cuidan los acabados, los colores y " +
        "la forma que dan vida a cada pieza.",
        "t1"
      ],
      [
        "Pieza final",
        "Se obtiene una artesanía única, con " +
        "identidad cultural y valor propio.",
        "r1"
      ]
    ].map((s, i) => `
      <article>
        <div class="im">
          <img
            src="${IMG[s[2]]}"
            alt=""
            loading="lazy"
          >
        </div>

        <div class="n">
          ${i + 1}
        </div>

        <h2 style="font-size:2rem">
          ${s[0]}
        </h2>

        <p>${s[1]}</p>
      </article>
    `).join("")}
  </div>
`;


V.carrito = () => {
  const it = Object.entries(cart)
    .filter(e => e[1] > 0)
    .map(([id, q]) => [
      P.find(p => p.id == id),
      q
    ]);

  const sub = it.reduce(
    (a, [p, q]) => a + p.pr * q,
    0
  );

  const env = it.length ? 12000 : 0;

  if (!it.length) {
    return `
      <div
        class="wrap"
        style="padding:64px 0"
      >
        <img class="mascota me" src="img/mascota_tagua.svg" alt="" width="170" height="161" loading="lazy">
        <h1>Tu carrito está vacío</h1>

        <p>
          Elige una pieza y conoce quién la hizo
          antes de llevarla.
        </p>

        <a
          class="btn"
          href="#/catalogo"
        >
          Explorar artesanías
        </a>
      </div>
    `;
  }

  const p0 = it[0][0];

  return `
    <div
      class="wrap"
      style="padding-top:40px"
    >
      <div
        style="
          display:flex;
          justify-content:space-between;
          align-items:baseline;
          flex-wrap:wrap;
          gap:10px
        "
      >
        <h1>Tu carrito</h1>

        <a href="#/catalogo">
          Seguir comprando →
        </a>
      </div>

      ${it.map(([p, q]) => `
        <div class="ci">
          <img
            src="${IMG[p.img]}"
            alt=""
          >

          <div>
            <b>${p.n}</b>

            <div class="mut">
              ${money(p.pr)} ·
              ${p.art} ·
              ${p.mun}
            </div>
          </div>

          <div
            class="qty"
            data-c="${p.id}"
          >
            <button
              aria-label="Menos de ${p.n}"
              data-d="-1"
            >
              −
            </button>

            <span>${q}</span>

            <button
              aria-label="Más de ${p.n}"
              data-d="1"
            >
              +
            </button>

            <button
              aria-label="Quitar ${p.n}"
              data-d="x"
            >
              🗑
            </button>
          </div>
        </div>
      `).join("")}

      <div class="tot">
        <div>
          <span>Subtotal</span>
          <span>${money(sub)}</span>
        </div>

        <div>
          <span>Envío</span>
          <span>${money(env)}</span>
        </div>

        <div class="t">
          <span>Total</span>
          <span>${money(sub + env)}</span>
        </div>

        <button class="btn">
          Finalizar compra
        </button>
      </div>

      <h2 style="font-size:1.6rem">
        Tu empaque informativo
      </h2>

      <p class="mut">
        Junto a tu artesanía recibirás un empaque
        con la historia del artesano y un código QR
        para conocer más.
      </p>

      <div class="emp">
        <img
          src="${IMG.qr}"
          alt="Código QR de ejemplo"
        >

        <div>
          <b>${p0.art}</b>
          <div>
            ${p0.mun} · ${p0.tec}
          </div>
        </div>

        <a
          class="btn or"
          href="#/${p0.ai
            ? "artesano/" + p0.ai
            : "artesanos"}"
        >
          Conoce su historia
        </a>
      </div>
    </div>
  `;
};


// COMPORTAMIENTOS

function home() {
  $$(".pan").forEach(b => {
    b.onclick = e => {
      if (e.target.closest("a")) return;

      $$(".pan").forEach(x =>
        x.setAttribute(
          "aria-expanded",
          x == b
        )
      );
    };
  });

  const ch = $(".chain");
  const im = $$(".ph img");
  const bt = $$(".thread button");

  let cur = -1;

  const set = i => {
    if (i == cur) return;

    cur = i;

    $("#cw").textContent = CH[i][0];
    $("#cd").textContent = CH[i][1];
    $("#cn").textContent = (i + 1) + " / " + CH.length;
    $("#cb").textContent = CH[i][3] || (i + 1);
    ch.style.setProperty("--n", i);
    ch.style.setProperty("--k", CH.length - 1);

    im.forEach((m, j) =>
      m.classList.toggle("on", j == i)
    );

    bt.forEach((b, j) => {
      b.classList.toggle("on", j <= i);
      b.classList.toggle("now", j == i);
    });
  };

  set(0);

  const sc = () => {
    if (!ch.isConnected) return;

    const r = ch.getBoundingClientRect();

    const p = Math.min(
      .999,
      Math.max(
        0,
        -r.top / (r.height - innerHeight)
      )
    );

    set(Math.floor(p * CH.length));
  };

  addEventListener(
    "scroll",
    sc,
    { passive: true }
  );

  bt.forEach((b, i) => {
    b.onclick = () =>
      scrollTo({
        top:
          ch.offsetTop +
          (ch.offsetHeight - innerHeight) *
          (i + .5) / CH.length
      });
  });

  const T = [
    [
      "Alfarería",
      "Arcilla · torno y modelado",
      0xC1622B,
      [
        [0, -1.1],
        [.55, -1.1],
        [.8, -.6],
        [.95, 0],
        [.75, .6],
        [.4, .85],
        [.35, 1.15],
        [.5, 1.3]
      ],
      0
    ],
    [
      "Cestería",
      "Esparto · entrelazado",
      0xE3A23A,
      [
        [0, -.8],
        [.9, -.8],
        [1.15, -.2],
        [1.15, .4],
        [1, .8],
        [.95, .8]
      ],
      1
    ],
    [
      "Tejeduría",
      "Lana · hilado en huso",
      0xD9D6CC,
      [
        [0, -1.3],
        [.08, -1.3],
        [.12, -.8],
        [.55, -.3],
        [.7, 0],
        [.55, .3],
        [.12, .8],
        [.08, 1.3],
        [0, 1.3]
      ],
      0
    ]
  ];

  /* Los nombres de los chips salen de HERO_OFICIOS (contenido editable) */
  T.forEach((t, i) => {
    if (!HERO_OFICIOS[i]) return;
    t[0] = HERO_OFICIOS[i].oficio;
    t[1] = HERO_OFICIOS[i].detalle;
  });

  const cs = $(".chips", $(".stage"));

  cs.innerHTML = T.map((t, i) => `
    <button
      class="chip"
      aria-pressed="${!i}"
    >
      ${t[0]}
    </button>
  `).join("");

  /* ---- Ambientación por oficio: fondo + luz + texto, todo en un solo cambio ---- */
  const hero = $(".hero");
  const stage = $(".stage");
  const lay = $$(".amb-l");
  let LT = HERO_OFICIOS[0].luz;
  let onPick = null;

  const amb = i => {
    const H = HERO_OFICIOS[i];

    lay.forEach((l, j) => l.classList.toggle("on", j == i));
    hero.dataset.o = stage.dataset.o = i;
    hero.style.setProperty("--amb", H.colores[1]);
    $("#tl").textContent = H.lugar;
    $("#ti").textContent = H.oficio + " · " + H.detalle;
    LT = H.luz;
  };

  amb(0);

  cs.onclick = e => {
    const b = e.target.closest(".chip");

    if (!b) return;

    const i = $$(".chip", cs).indexOf(b);

    $$(".chip", cs).forEach(x =>
      x.setAttribute("aria-pressed", x == b)
    );

    amb(i);
    if (onPick) onPick(i);
  };

  if (!RM) {
    stage.addEventListener("pointermove", e => {
      if (e.pointerType == "touch") return;

      const r = stage.getBoundingClientRect();

      stage.style.setProperty("--px", ((e.clientX - r.left) / r.width - .5) * 2);
      stage.style.setProperty("--py", ((e.clientY - r.top) / r.height - .5) * 2);
    });
  }

  if (!window.THREE) return;

  const cv = $("#cv");

  const R = new THREE.WebGLRenderer({
    canvas: cv,
    alpha: true,
    antialias: true
  });

  const S = new THREE.Scene();

  const C = new THREE.PerspectiveCamera(
    35,
    1,
    .1,
    50
  );

  C.position.set(0, .3, 6.2);

  S.add(
    new THREE.AmbientLight(
      0xffffff,
      .38
    )
  );

  const L = new THREE.DirectionalLight(
    0xffffff,
    .9
  );

  L.position.set(3, 4, 5);
  S.add(L);

  const HL = new THREE.HemisphereLight(0xfff3d6, 0x5A1024, .55);
  const cTmp = new THREE.Color();

  S.add(HL);

  const RL = new THREE.DirectionalLight(0xF39325, .65);

  RL.position.set(-4, 2, -3);
  S.add(RL);

  const g = new THREE.Group();

  S.add(g);

  let m;
  let w;
  let ry = 0;
  let rx = .2;
  let dr = false;
  let lx = 0;
  let ly = 0;

/* Modelos 3D procedurales: curvas suaves, texturas y detalles propios de cada oficio */
  const smooth = (pts, n) =>
    new THREE.CatmullRomCurve3(
      pts.map(p => new THREE.Vector3(p[0], p[1], 0))
    ).getPoints(n).map(v =>
      new THREE.Vector2(Math.max(0, v.x), v.y)
    );

  const tex = (draw, w, h, rx, ry) => {
    const c = document.createElement("canvas");

    c.width = w;
    c.height = h;
    draw(c.getContext("2d"), w, h);

    const t = new THREE.CanvasTexture(c);

    t.wrapS = t.wrapT = THREE.RepeatWrapping;
    t.repeat.set(rx, ry);
    t.anisotropy = 4;

    return t;
  };

  const mat = (col, rough, map) =>
    new THREE.MeshStandardMaterial({
      color: col,
      roughness: rough,
      map: map || null,
      side: THREE.DoubleSide
    });

  const lathe = (pts, material) =>
    new THREE.Mesh(
      new THREE.LatheGeometry(pts, 72),
      material
    );

  const ring = (y, r, t, col) => {
    const k = new THREE.Mesh(
      new THREE.TorusGeometry(r, t, 12, 72),
      mat(col, .6)
    );

    k.rotation.x = Math.PI / 2;
    k.position.y = y;

    return k;
  };

  const MK = [
    /* Alfarería: vasija de arcilla con engobe, bandas y borde */
    () => {
      const o = new THREE.Group();

      const clay = tex((c, w, h) => {
        c.fillStyle = "#C1622B";
        c.fillRect(0, 0, w, h);

        for (let i = 0; i < 900; i++) {
          c.fillStyle = i % 3
            ? "rgba(90,16,36,.12)"
            : "rgba(238,239,178,.14)";

          c.fillRect(
            Math.random() * w,
            Math.random() * h,
            1 + Math.random() * 2.5,
            1 + Math.random() * 2.5
          );
        }
      }, 256, 256, 1, 1);

      o.add(lathe(
        smooth([
          [0, -1.2], [.5, -1.2], [.78, -.85], [1.02, -.2],
          [.98, .35], [.7, .8], [.42, 1.0], [.4, 1.2], [.55, 1.38]
        ], 90),
        mat(0xffffff, .62, clay)
      ));

      o.add(ring(-.2, 1.03, .035, 0x5A1024));
      o.add(ring(.35, .99, .035, 0xEEEFB2));
      o.add(ring(1.38, .55, .05, 0x8a3a14));
      o.add(ring(-1.2, .52, .05, 0x8a3a14));

      return o;
    },

    /* Cestería: cuerpo tejido, aro y asa */
    () => {
      const o = new THREE.Group();

      const weave = tex((c, w, h) => {
        const n = 8;
        const cw = w / n;
        const ch = h / n;

        for (let i = 0; i < n; i++) {
          for (let j = 0; j < n; j++) {
            c.fillStyle = (i + j) % 2 ? "#E3A23A" : "#C98A22";
            c.fillRect(i * cw, j * ch, cw, ch);
            c.fillStyle = "rgba(90,16,36,.28)";
            c.fillRect(i * cw, j * ch, cw, 2);
            c.fillRect(i * cw, j * ch, 2, ch);
          }
        }
      }, 128, 128, 14, 5);

      o.add(lathe(
        smooth([
          [0, -.9], [.7, -.9], [1.0, -.5], [1.15, .1],
          [1.1, .65], [1.12, .9]
        ], 60),
        mat(0xffffff, .9, weave)
      ));

      o.add(ring(.9, 1.12, .06, 0x9a6a1f));
      o.add(ring(-.9, .7, .05, 0x9a6a1f));

      const h = new THREE.Mesh(
        new THREE.TorusGeometry(1.12, .05, 10, 56, Math.PI),
        mat(0x9a6a1f, .8)
      );

      h.position.y = .9;
      h.scale.y = .7;
      o.add(h);
      o.position.y = -.4;

      return o;
    },

    /* Tejeduría: huso con tortera y ovillo de lana */
    () => {
      const o = new THREE.Group();

      const yarn = tex((c, w, h) => {
        const p = h / 16;

        c.fillStyle = "#D9D6CC";
        c.fillRect(0, 0, w, h);
        c.fillStyle = "#C2BCA8";

        for (let k = -1; k < 18; k++) {
          const y = k * p;

          c.beginPath();
          c.moveTo(0, y);
          c.lineTo(w, y + p);
          c.lineTo(w, y + p * 1.5);
          c.lineTo(0, y + p * .5);
          c.closePath();
          c.fill();
        }
      }, 128, 256, 1, 1);

      const shaft = new THREE.Mesh(
        new THREE.CylinderGeometry(.035, .05, 3.4, 16),
        mat(0x8a5a2b, .7)
      );

      shaft.position.y = .2;
      o.add(shaft);

      const whorl = lathe(
        smooth([[0, -.06], [.62, -.06], [.66, 0], [.62, .06], [0, .06]], 20),
        mat(0x5A1024, .55)
      );

      whorl.position.y = -.55;
      o.add(whorl);

      const cop = lathe(
        smooth([
          [0, 0], [.2, 0], [.42, .35], [.5, .85], [.42, 1.35], [.12, 1.5], [0, 1.52]
        ], 50),
        mat(0xffffff, .95, yarn)
      );

      cop.position.y = -.4;
      o.add(cop);

      const thread = new THREE.Mesh(
        new THREE.TubeGeometry(
          new THREE.CatmullRomCurve3([
            new THREE.Vector3(.04, 1.15, 0),
            new THREE.Vector3(.35, 1.55, .1),
            new THREE.Vector3(.75, 1.45, .15),
            new THREE.Vector3(.9, 1.0, .1),
            new THREE.Vector3(.8, .55, .05)
          ]),
          40, .014, 6, false
        ),
        mat(0xD9D6CC, .9)
      );

      o.add(thread);
      o.position.y = -.2;

      return o;
    }
  ];

  const build = i => {
    const t = T[i];

    if (m) {
      g.remove(m);

      m.traverse(x => {
        if (x.geometry) x.geometry.dispose();

        if (x.material) {
          if (x.material.map) x.material.map.dispose();
          x.material.dispose();
        }
      });
    }

    m = MK[i]();
    g.add(m);

    $("#ti").textContent =
      t[0] + " · " + t[1];
  };

  g.position.y = .25;

  build(0);

  onPick = build;

  cv.onpointerdown = e => {
    dr = true;
    lx = e.clientX;
    ly = e.clientY;

    cv.setPointerCapture(
      e.pointerId
    );
  };

  cv.onpointerup = () =>
    dr = false;

  cv.onpointermove = e => {
    if (!dr) return;

    ry +=
      (e.clientX - lx) * .01;

    rx +=
      (e.clientY - ly) * .01;

    lx = e.clientX;
    ly = e.clientY;
  };

  cv.onkeydown = e => {
    const k = {
      ArrowLeft: [-.2, 0],
      ArrowRight: [.2, 0],
      ArrowUp: [0, -.2],
      ArrowDown: [0, .2]
    }[e.key];

    if (k) {
      ry += k[0];
      rx += k[1];
      e.preventDefault();
    }
  };

  new ResizeObserver(() => {
    const b =
      cv.getBoundingClientRect();

    R.setPixelRatio(
      Math.min(2, devicePixelRatio)
    );

    R.setSize(
      b.width,
      b.height,
      false
    );

    C.aspect =
      b.width / b.height;

    C.updateProjectionMatrix();
  }).observe(cv);

  (function loop() {
    if (!$("#cv")) return;

    if (!RM && !dr)
      ry += .006;

    g.rotation.set(
      rx,
      ry,
      0
    );

    if (!RM)
      g.position.y = .25 + Math.sin(performance.now() / 900) * .04;

    if (LT) {
      HL.color.lerp(cTmp.set(LT.cielo), .05);
      HL.groundColor.lerp(cTmp.set(LT.suelo), .05);
      RL.color.lerp(cTmp.set(LT.rim), .05);
    }

    R.render(S, C);

    requestAnimationFrame(loop);
  })();
}



// CONOCE BOYACÁ (datos en MUNICIPIOS, arriba)

const DEMO = {
  desc:
    "Aquí irá la descripción breve del municipio, " +
    "su historia artesanal y su paisaje.",

  exp: [
    [
      "Visita a un taller",
      "Ejemplo: conocer el proceso junto al artesano."
    ],
    [
      "Compra directa",
      "Ejemplo: llevar la pieza desde el lugar donde se hace."
    ]
  ],

  tur: [
    "Atractivo cultural cercano 1",
    "Atractivo cultural cercano 2"
  ]
};


const OFC = {
  Tejeduría: "#EEEFB2",
  Alfarería: "#F39325",
  Cestería: "#79AC2B",
  Talla: "#E52529",
  Otros: "#F7C98B"
};


const fam = o =>
  /tall/i.test(o)
    ? "Talla"
    : OFC[o]
      ? o
      : "Otros";


const MATC = {
  lana: "#EEEFB2",
  arcilla: "#D9823B",
  esparto: "#B9C95A",
  madera: "#C58B4F",
  pino: "#D7A86E",
  cuero: "#8A4B2B",
  tagua: "#F2EAD0"
};


const matc = m => {
  const k = Object.keys(MATC)
    .find(k => norm(m).includes(k));

  return MATC[k] || "#F39325";
};


const PASOS = [
  "Artesanías",
  "Técnica",
  "Material",
  "Saber",
  "Experiencia"
];

/* 2) LECTURA DE LÍMITES REALES (GeoJSON o TopoJSON; se filtra Boyacá = código DIVIPOLA 15xxx) */
const pick=(p,ks)=>{for(const k of ks){const kk=Object.keys(p||{}).find(x=>x.toLowerCase()==k.toLowerCase());if(kk&&p[kk]!=null&&p[kk]!=='')return p[kk]}};
function geoFeatures(j){
 if(j&&j.type==='Topology'){if(!window.topojson)throw Error('No cargó la librería TopoJSON');
  const ks=Object.keys(j.objects),k=ks.find(k=>/mpio|muni/i.test(k))||ks.sort((a,b)=>(j.objects[b].geometries||[]).length-(j.objects[a].geometries||[]).length)[0];j=topojson.feature(j,j.objects[k])}
 const fs=(j.type==='FeatureCollection'?j.features:j.type==='Feature'?[j]:[]).filter(f=>f.geometry&&/Polygon/.test(f.geometry.type));
 if(!fs.length)throw Error('El archivo no contiene polígonos');
 const info=f=>{const p=f.properties||{};let c=pick(p,['MPIO_CDPMP','MPIO_CCNCT','COD_MPIO','CODIGO_DANE','DIVIPOLA','ADM2_PCODE','MPIO_CODIGO','cod_dane']);
  if(c==null){const m=pick(p,['MPIO_CCDGO']),d=pick(p,['DPTO_CCDGO','DPTO']);if(m!=null&&d!=null)c=String(d).padStart(2,'0')+String(m).padStart(3,'0')}
  if(c==null&&f.id!=null)c=f.id;c=String(c??'').replace(/\D/g,'');if(c.length==4)c='0'+c;
  let n=pick(p,['MPIO_CNMBR','NOMBRE_MPI','NOM_MPIO','MPIO_NOMBRE','MUNICIPIO','ADM2_ES','NOMBRE','name','NOMBRE_ENT']);
  if(n==null){const ks=Object.keys(p).filter(k=>typeof p[k]==='string'&&isNaN(p[k]));const uq=k=>new Set(fs.map(g=>(g.properties||{})[k])).size/fs.length;ks.sort((a,b)=>(uq(b)>.9)-(uq(a)>.9)||(/mun|mpio|nom|name/i.test(b)-/mun|mpio|nom|name/i.test(a))||uq(b)-uq(a));n=ks.length?p[ks[0]]:'Municipio'}
  const dep=pick(p,['DPTO_CNMBR','NOMBRE_DPT','ADM1_ES','DEPARTAMENTO']);return{f,code:c,name:String(n),dep:dep?norm(dep):''}};
 let L=fs.map(info),B=L.filter(x=>x.code.length==5&&x.code.startsWith('15'));
 if(!B.length)B=L.filter(x=>x.dep==='boyaca');
 if(!B.length&&L.length>=100&&L.length<=130)B=L;
 if(!B.length)throw Error('No encontré municipios de Boyacá (código 15xxx). Revisa que el archivo sea del Marco Geoestadístico (DANE).');
 return B}
const title=s=>s.toLowerCase().replace(/(^|\s)(\S)/g,(m,a,b)=>a+b.toUpperCase()).replace(/\b(De|Del|La|Las|El|Los|Y)\b/g,x=>x.toLowerCase()).replace(/^./,c=>c.toUpperCase());
function prepGeo(j){
 const B=geoFeatures(j),polys=x=>x.f.geometry.type==='Polygon'?[x.f.geometry.coordinates]:x.f.geometry.coordinates;
 let a=1e9,b=-1e9,c=1e9,d=-1e9;B.forEach(x=>{x.P=polys(x);x.P.forEach(p=>p[0].forEach(([lo,la])=>{a=Math.min(a,lo);b=Math.max(b,lo);c=Math.min(c,la);d=Math.max(d,la)}))});
 if(Math.abs(a)>180||Math.abs(d)>90)throw Error('Las coordenadas no están en grados (WGS84). Reproyecta el archivo a EPSG:4326.');
 const k=Math.cos((c+d)/2*Math.PI/180),S=1000/((b-a)*k),W=1000,H=(d-c)*S,vx=[],gx=(lo)=>(lo-a)*k*S,gy=(la)=>(d-la)*S;
 const vert=new Map();
 B.forEach((x,i)=>{let D='',bb=[1e9,1e9,-1e9,-1e9],big=0;
  x.P.forEach(poly=>poly.forEach((r,ri)=>{let last=null,pts=[];
   r.forEach(([lo,la])=>{if(ri==0){const key=Math.round(lo*1000)+'_'+Math.round(la*1000);(vert.get(key)||vert.set(key,new Set).get(key)).add(i)}
    const X=gx(lo),Y=gy(la);if(!last||(X-last[0])**2+(Y-last[1])**2>.25){pts.push(last=[X,Y])}});
   if(pts.length<4)pts=r.map(([lo,la])=>[gx(lo),gy(la)]);
   D+='M'+pts.map(p=>p[0].toFixed(1)+' '+p[1].toFixed(1)).join('L')+'Z';
   if(ri==0){let ar=0,cx=0,cy=0;for(let t=0;t<pts.length-1;t++){const[p,q]=[pts[t],pts[t+1]],cr=p[0]*q[1]-q[0]*p[1];ar+=cr;cx+=(p[0]+q[0])*cr;cy+=(p[1]+q[1])*cr}
    const A=Math.abs(ar)/2;if(A>big&&ar){big=A;x.cx=cx/(3*ar);x.cy=cy/(3*ar)}
    pts.forEach(p=>{bb=[Math.min(bb[0],p[0]),Math.min(bb[1],p[1]),Math.max(bb[2],p[2]||p[0]),Math.max(bb[3],p[1])]})}}));
  x.d=D;x.bb=[bb[0],bb[1],bb[2],bb[3]];x.nm=title(x.name);x.key=norm(x.name);if(x.cx==null){x.cx=(bb[0]+bb[2])/2;x.cy=(bb[1]+bb[3])/2}});
 B.forEach(x=>x.nb=new Set);vert.forEach(s=>{if(s.size>1)s.forEach(i=>s.forEach(j=>i!=j&&B[i].nb.add(j)))});
 B.forEach((x,i)=>{if(!x.nb.size){B.map((y,j)=>[j,(x.cx-y.cx)**2+(x.cy-y.cy)**2]).filter(e=>e[0]!=i).sort((p,q)=>p[1]-q[1]).slice(0,4).forEach(e=>x.nb.add(e[0]))}});
 return{W,H,F:B}}
const idb=(mode,fn)=>new Promise((res,rej)=>{const o=indexedDB.open('trama',1);o.onupgradeneeded=()=>o.result.createObjectStore('geo');o.onerror=()=>rej(o.error);o.onsuccess=()=>{const t=o.result.transaction('geo',mode),r=fn(t.objectStore('geo'));t.oncomplete=()=>res(r.result);t.onerror=()=>rej(t.error)}});
async function geoSource(){
 for(const u of ['data/boyaca-municipios.geojson','https://raw.githubusercontent.com/mwlware/geojson_boyaca/main/boyaca_geojson_123_municipios.geojson']){try{const r=await fetch(u);if(r.ok)return await r.json()}catch(e){}}
 try{return await idb('readonly',s=>s.get('boyaca'))}catch(e){}return null}

/* 3) VISTA-MODELO de cada municipio a partir de TERR + P */
function modelo(f,G){const d=TERR[f.key]||null,pz=((d&&d.piezas)||[]).map(id=>P.find(p=>p.id==id)).filter(Boolean),u=a=>[...new Set(a)],e=(d&&d.extra)||{};
 const ofs=u([...pz.map(p=>p.of),...(e.oficios||[])]),tecs=u([...pz.map(p=>p.tec),...(e.tecnicas||[])]),mats=u([...pz.map(p=>p.mat),...(e.materiales||[])]);
 const near=[...f.nb].map(i=>G.F[i]).filter(n=>TERR[n.key]);
 return{f,d,pz,ofs,tecs,mats,has:!!d,fams:u(ofs.map(fam)),near,col:OFC[ofs.length?fam(ofs[0]):'Otros']}}

/* 4) ESCENA */
function geoApp(){
 const R=$('.geo'),svg=$('.g-svg',R),tip=$('.g-tip',R),pnl=$('.g-pnl',R),orb=$('.g-orb',R),lines=$('.g-lines',R),live=$('#gl'),NS='http://www.w3.org/2000/svg';
 const mob=()=>matchMedia('(max-width:820px)').matches;
 document.documentElement.style.setProperty('--hh',$('header').offsetHeight+'px');
 let G=null,M=[],vb={x:0,y:0,w:1000,h:700},raf=0,sel=-1,step=0,hov=-1,moved=false,fam0=null,ptr=new Map(),pinch=0,Sw=1,Sh=1,orbItems=[],gm,gh,hl,sl,rg;
 const size=()=>{const r=R.getBoundingClientRect();Sw=r.width;Sh=r.height};
 const apply=()=>{svg.setAttribute('viewBox',`${vb.x} ${vb.y} ${vb.w} ${vb.h}`);svg.classList.toggle('zoomed',G&&(sel>=0||vb.w<home().w*.92));place()};
 const insets=s=>{if(!mob())return s?{l:36,r:(pnl.offsetWidth||440)+56,t:70,b:40}:{l:Math.min(400,Sw*.3),r:40,t:30,b:76};return s?{l:8,r:8,t:70,b:Sh*.64+8}:{l:8,r:8,t:92,b:64}};
 const fitRect=(bb,I,pad,minW)=>{const aw=Sw-I.l-I.r,ah=Sh-I.t-I.b,bw=bb[2]-bb[0],bh=bb[3]-bb[1];let u=Math.min(aw*(1-pad)/bw,ah*(1-pad)/bh);if(minW)u=Math.min(u,Sw/minW);
  return{x:(bb[0]+bb[2])/2-(I.l+aw/2)/u,y:(bb[1]+bb[3])/2-(I.t+ah/2)/u,w:Sw/u,h:Sh/u}};
 const home=()=>fitRect([0,0,G.W,G.H],insets(false),.04);
 const go=(t,dur=650)=>{cancelAnimationFrame(raf);if(RM||!dur){vb=t;apply();return}const a={...vb},t0=performance.now();(function f(n){let k=Math.min(1,(n-t0)/dur);k=1-Math.pow(1-k,3);vb={x:a.x+(t.x-a.x)*k,y:a.y+(t.y-a.y)*k,w:a.w+(t.w-a.w)*k,h:a.h+(t.h-a.h)*k};apply();if(k<1)raf=requestAnimationFrame(f)})(t0)};
 const zoomAt=(cx,cy,f)=>{const r=svg.getBoundingClientRect(),H0=home(),w=Math.min(H0.w*1.2,Math.max(G.W/14,vb.w/f)),px=vb.x+(cx-r.left)/Sw*vb.w,py=vb.y+(cy-r.top)/Sh*vb.h;vb={w,h:w*Sh/Sw,x:px-(cx-r.left)/Sw*w,y:py-(cy-r.top)/Sh*w*Sh/Sw};apply()};
 const scr=(x,y)=>[(x-vb.x)/vb.w*Sw,(y-vb.y)/vb.h*Sh];
 /* construcción del mapa */
 function build(g){G=g;size();M=G.F.map(f=>modelo(f,G));
  svg.innerHTML=`<g class="gm">${M.map((m,i)=>`<path class="mu${m.has?' has':''}" data-i="${i}" d="${m.f.d}" style="--i:${(i*7)%120};--c:${m.col}" role="button" tabindex="${m.has?0:-1}" aria-label="${m.f.nm}${m.has?', con artesanías':''}"></path>`).join('')}</g><g class="gh"><path class="g-hl"></path><path class="g-sel"></path><circle class="g-ring"></circle></g>`;
  gm=$('.gm',svg);hl=$('.g-hl',svg);sl=$('.g-sel',svg);rg=$('.g-ring',svg);
  $('#gdl').innerHTML=M.map(m=>`<option value="${m.f.nm}">`).join('');
  const n=M.filter(m=>m.has).length;$('.g-count',R).innerHTML=`<b>${n}</b> de ${M.length} municipios con piezas registradas`;
  $('.g-empty',R)?.remove();$('.g-chg',R).hidden=false;
  if(M.length!==123)console.warn('Boyacá tiene 123 municipios; se cargaron',M.length);
  vb=home();apply();
  const pre=(location.hash.split('/')[2]||'');const i=M.findIndex(m=>m.f.key==norm(pre));if(pre&&i>=0)setTimeout(()=>select(i),400)}
 /* hover */
 const hlOn=(i,mode)=>{const el=mode=='sel'?sl:hl,m=M[i];if(!m){el.classList.remove('on');return}el.setAttribute('d',m.f.d);el.style.setProperty('--c',m.col);el.getBoundingClientRect();el.classList.add('on')};
 function hover(i,ev){if(i===hov)return;M[hov]&&[...M[hov].f.nb].forEach(j=>gm.children[j].classList.remove('nb'));hov=i;
  if(i<0||i===sel){hl.classList.remove('on');tip.classList.remove('on');return}
  hlOn(i);[...M[i].f.nb].forEach(j=>i!=sel&&gm.children[j].classList.add('nb'));
  const m=M[i];tip.innerHTML=`<b>${m.f.nm}</b><small>${m.has?m.pz.length?`${m.pz.length} ${m.pz.length>1?'piezas':'pieza'} · ${m.ofs.join(', ')}`:m.ofs.join(', '):'Aún sin artesanías registradas'}</small>`;tip.classList.add('on')}
 const tipPos=(x,y)=>{const r=R.getBoundingClientRect();let l=x-r.left+16,t=y-r.top+16;l=Math.min(l,Sw-tip.offsetWidth-8);t=Math.min(t,Sh-tip.offsetHeight-8);tip.style.transform=`translate(${l}px,${t}px)`};
 /* selección */
 function select(i,focus=true){if(!M[i])return;sel=i;const m=M[i];step=0;hover(-1);
  $$('.mu',gm).forEach((e,j)=>e.classList.toggle('sel',j==i));svg.classList.add('hs');R.classList.add('is-sel');hlOn(i,'sel');
  pnl.hidden=false;buildPanel();requestAnimationFrame(()=>requestAnimationFrame(()=>{pnl.classList.add('open');size();go(fitRect(m.f.bb,insets(true),.55,G.W/6),700)}));
  rg.setAttribute('cx',m.f.cx);rg.setAttribute('cy',m.f.cy);rg.classList.remove('go');rg.getBoundingClientRect();rg.style.stroke=m.col;rg.classList.add('go');
  live.textContent=m.f.nm+' seleccionado';history.replaceState(null,'','#/boyaca/'+m.f.key.replace(/ /g,'-'));
  if(focus)setTimeout(()=>$('.g-ph h2',pnl)?.focus({preventScroll:true}),350)}
 function close(){const i=sel;sel=-1;svg.classList.remove('hs');R.classList.remove('is-sel');pnl.classList.remove('open');sl.classList.remove('on');$$('.mu.sel',gm).forEach(e=>e.classList.remove('sel'));
  setTimeout(()=>{if(sel<0)pnl.hidden=true},520);clearOrbit();size();go(home(),650);history.replaceState(null,'','#/boyaca');if(i>=0)(M[i].has?gm.children[i]:$('.g-search input',R)).focus({preventScroll:true})}
 /* panel narrativo */
 const demo=t=>`<span class="g-demo">${t||'Contenido de prueba'}</span>`;
 const chips=(a)=>a.map(n=>`<button class="g-chip" style="--c:${n.col}" data-go="${M.indexOf(n)}"><i></i>${n.f.nm}</button>`).join('');
 function buildPanel(){const m=M[sel];$('.g-ph h2',pnl).textContent=m.f.nm;$('.g-ph p',pnl).textContent=m.has?`${m.pz.length?m.pz.length+(m.pz.length>1?' piezas':' pieza')+' · ':''}${m.ofs.join(', ')}`:'Boyacá';
  $('.g-rail',pnl).hidden=$('.g-pnav',pnl).hidden=!m.has;render()}
 function render(){const m=M[sel],B=$('.g-body',pnl),LS=PASOS.length-1;
  $$('.g-rail button',pnl).forEach((b,i)=>{b.setAttribute('aria-selected',i==step);b.classList.toggle('done',i<step)});
  $('[data-p]',pnl).disabled=step==0;const nx=$('[data-n]',pnl);nx.textContent=step==LS?'Volver al mapa':(mob()?'Siguiente':'Siguiente: '+PASOS[step+1]);
  let h='',it=[];const d=m.d||{},ph=k=>IMG[k]||'';
  if(!m.has){h=`<div class="g-big">Sin registros</div><p>Todavía no hay artesanías asociadas a este municipio en la plataforma.</p>${m.f.nb.size?`<p><b>Explora cerca:</b></p><div class="g-near">${chips(m.near)||'<span class="mut">Ningún vecino con registros aún.</span>'}</div>`:''}`}
  else if(step==0){const ft=d.fotos||[];h=`<div class="g-big">Artesanías</div><p>${d.desc||DEMO.desc}${d.prueba||!d.desc?demo():''}</p><div class="g-pcs">${m.pz.map((p,i)=>`<a class="g-pc" href="#/pieza/${p.id}" style="animation-delay:${i*70}ms"><img src="${ph(p.img)}" alt=""><span><b>${p.n}</b><small>${p.tec} · ${p.mat}</small></span></a>`).join('')}${m.pz.length?'':`<figure class="g-arch" style="grid-column:1/-1;margin:0"><img src="${ph(ft[0])}" alt="Oficio de ${m.f.nm}"></figure>`}</div>${m.pz.length?`<a class="btn" href="#/catalogo?mun=${encodeURIComponent(m.pz[0].mun)}">Ver todas en el catálogo</a>`:`<p>Oficio registrado: <b>${m.ofs.join(', ')}</b>. Aún no hay piezas en el catálogo.</p>`}${m.near.length?`<p style="margin-top:18px"><b>Sigue por un municipio vecino</b></p><div class="g-near">${chips(m.near)}</div>`:''}`;
   it=m.pz.length?m.pz.slice(0,4).map(p=>({kind:'foto',img:p.img,label:p.n,href:'#/pieza/'+p.id})):ft.slice(0,3).map(k=>({kind:'foto',img:k,label:''}))}
  else if(step==1){h=`<div class="g-big">Técnica</div><p>Saberes que se aprenden haciendo y se heredan entre generaciones.</p>${m.tecs.length?m.tecs.map(t=>`<div class="g-li"><div><b>${t}</b><small>${m.pz.filter(p=>p.tec==t).map(p=>p.n).join(', ')||'Técnica registrada, pieza por definir'}</small></div></div>`).join(''):'<p class="mut">Técnicas por registrar.</p>'}<a class="btn ghost" href="#/proceso">Ver el proceso completo</a>`;
   it=m.tecs.slice(0,4).map(t=>({kind:'chip',label:t,c:m.col}))}
  else if(step==2){h=`<div class="g-big">Material</div><p>Lo que da el territorio y las manos transforman.</p>${m.mats.map(x=>`<div class="g-li"><span class="g-sw" style="background:${matc(x)}"></span><div><b>${x}</b><small>${m.pz.filter(p=>p.mat==x).map(p=>p.n).join(', ')||'Material registrado, pieza por definir'}</small></div></div>`).join('')||'<p class="mut">Materiales por registrar.</p>'}`;
   it=m.mats.slice(0,4).map(x=>({kind:'chip',label:x,c:matc(x)}))}
  else if(step==3){const A=d.artesanos||[];h=`<div class="g-big">Saber</div>${A.map(a=>`<div class="g-li">${a.img?`<img class="g-av" src="${ph(a.img)}" alt="">`:''}<div><b>${a.n}</b><small>${a.saber||'Historia y saber por documentar'}${a.saber?'':demo()}</small>${a.cita?`<p class="g-q">“${a.cita}”</p>`:''}<a href="#/artesano/${slug(a.n)}" style="font-weight:700">Conoce su historia</a></div></div>`).join('')||`<p>Aún no hay artesanos registrados. ${demo()}</p>`}`;
   it=A.slice(0,4).map(a=>({kind:a.img?'foto':'chip',img:a.img,label:a.n,c:m.col,href:'#/artesano/'+slug(a.n)}))}
  else{h=`<div class="g-big">Experiencia</div><p><b>Qué hacer aquí</b> ${d.exp&&!d.prueba?'':demo()}</p>${(d.exp||DEMO.exp).map(e=>`<div class="g-li"><div><b>${e[0]}</b><small>${e[1]}</small></div></div>`).join('')}<p><b>Otros lugares para explorar</b> ${d.tur&&!d.prueba?'':demo()}</p>${(d.tur||DEMO.tur).map(t=>`<div class="g-li"><div><b>${t}</b></div></div>`).join('')}<a class="btn" href="#/catalogo?mun=${encodeURIComponent(m.pz[0]?m.pz[0].mun:m.f.nm)}">Ver piezas de ${m.f.nm}</a>`;
   it=(d.exp||DEMO.exp).slice(0,3).map(e=>({kind:'chip',label:e[0],c:'#79AC2B'}))}
  B.innerHTML=h;B.scrollTop=0;orbitSet(m.has?it:[])}
 /* elementos que orbitan el territorio seleccionado */
 function clearOrbit(){orbItems=[];orb.innerHTML='';lines.innerHTML=''}
 function orbitSet(items){clearOrbit();if(mob()||!items.length)return;orbItems=items.map((it,k)=>{const el=document.createElement(it.href?'a':'div');if(it.href)el.href=it.href;el.className='g-fl '+it.kind;el.style.setProperty('--d',k*70+'ms');
   el.innerHTML=it.kind=='foto'&&it.img?`<img src="${IMG[it.img]}" alt="">${it.label?`<span>${it.label}</span>`:''}`:`<span>${it.c?`<i style="background:${it.c}"></i>`:''}${it.label}</span>`;orb.append(el);
   const ln=document.createElementNS(NS,'line');lines.append(ln);return{el,ln}});place();requestAnimationFrame(()=>requestAnimationFrame(()=>orbItems.forEach(o=>o.el.classList.add('on'))))}
 function place(){if(sel<0||!orbItems.length)return;const m=M[sel],[ax,ay]=scr(m.f.cx,m.f.cy),n=orbItems.length,span=Math.min(1.9,.62*n),Rd=Math.min(230,Math.max(150,Sw*.17));
  orbItems.forEach((o,k)=>{const a=Math.PI+(n>1?(k/(n-1)-.5)*span:0),x=Math.min(Sw-(insets(true).r)-70,Math.max(80,ax+Math.cos(a)*Rd)),y=Math.min(Sh-80,Math.max(110,ay+Math.sin(a)*Rd*.9));
   o.el.style.left=x+'px';o.el.style.top=y+'px';o.ln.setAttribute('x1',ax);o.ln.setAttribute('y1',ay);o.ln.setAttribute('x2',x);o.ln.setAttribute('y2',y)})}
 /* eventos */
 svg.addEventListener('pointerover',e=>{if(e.pointerType=='touch')return;const p=e.target.closest('.mu');hover(p?+p.dataset.i:-1)});
 svg.addEventListener('pointermove',e=>{if(e.pointerType!='touch'&&hov>=0)tipPos(e.clientX,e.clientY)});
 svg.addEventListener('pointerleave',()=>hover(-1));
 svg.addEventListener('focusin',e=>{const p=e.target.closest('.mu');if(p){hover(+p.dataset.i);const[x,y]=scr(M[+p.dataset.i].f.cx,M[+p.dataset.i].f.cy),r=svg.getBoundingClientRect();tipPos(r.left+x,r.top+y)}});
 svg.addEventListener('focusout',()=>hover(-1));
 svg.addEventListener('keydown',e=>{const p=e.target.closest('.mu');if(p&&(e.key=='Enter'||e.key==' ')){e.preventDefault();select(+p.dataset.i)}});
 svg.addEventListener('click',e=>{if(moved){moved=false;return}const p=e.target.closest('.mu');if(p)select(+p.dataset.i,true)});
 svg.addEventListener('wheel',e=>{if(!(e.ctrlKey||e.metaKey))return;e.preventDefault();zoomAt(e.clientX,e.clientY,Math.exp(-e.deltaY*.003))},{passive:false});
 svg.addEventListener('pointerdown',e=>{ptr.set(e.pointerId,{x:e.clientX,y:e.clientY,sx:e.clientX,sy:e.clientY});moved=false;cancelAnimationFrame(raf)});
 svg.addEventListener('pointermove',e=>{const p=ptr.get(e.pointerId);if(!p)return;
  if(ptr.size==2){const [a,b]=[...ptr.values()],o=Math.hypot(a.x-b.x,a.y-b.y);p.x=e.clientX;p.y=e.clientY;const[c,d]=[...ptr.values()],n=Math.hypot(c.x-d.x,c.y-d.y);if(o&&n){zoomAt((c.x+d.x)/2,(c.y+d.y)/2,n/o);moved=true}return}
  if(!moved&&Math.hypot(e.clientX-p.sx,e.clientY-p.sy)<6)return;if(!moved){moved=true;svg.classList.add('drag');try{svg.setPointerCapture(e.pointerId)}catch(_){}hover(-1)}
  vb.x-=(e.clientX-p.x)*vb.w/Sw;vb.y-=(e.clientY-p.y)*vb.h/Sh;p.x=e.clientX;p.y=e.clientY;apply()});
 const up=e=>{ptr.delete(e.pointerId);if(!ptr.size){svg.classList.remove('drag');setTimeout(()=>moved=false,0)}};svg.addEventListener('pointerup',up);svg.addEventListener('pointercancel',up);
 $('[data-z="in"]',R).onclick=()=>zoomAt(R.getBoundingClientRect().left+Sw/2,R.getBoundingClientRect().top+Sh/2,1.5);
 $('[data-z="out"]',R).onclick=()=>zoomAt(R.getBoundingClientRect().left+Sw/2,R.getBoundingClientRect().top+Sh/2,1/1.5);
 $('[data-z="all"]',R).onclick=()=>{if(sel>=0)close();else go(home(),500)};
 $('.g-back',pnl).onclick=close;
 pnl.addEventListener('click',e=>{const a=e.target.closest('[data-go]');if(a)return select(+a.dataset.go)});
 $$('.g-rail button',pnl).forEach((b,i)=>b.onclick=()=>{step=i;render()});
 $('[data-p]',pnl).onclick=()=>{if(step>0){step--;render()}};$('[data-n]',pnl).onclick=()=>{if(step<PASOS.length-1){step++;render()}else close()};
 R.addEventListener('keydown',e=>{if(e.key=='Escape'&&sel>=0)close()});
 const sr=$('.g-search input',R),find=()=>{const i=M.findIndex(m=>m.f.key==norm(sr.value));if(i>=0){select(i);sr.blur()}};sr.addEventListener('change',find);sr.addEventListener('keydown',e=>{if(e.key=='Enter')find()});
 $$('.g-f',R).forEach(b=>b.onclick=()=>{const f=b.dataset.f||null;fam0=f;$$('.g-f',R).forEach(x=>x.setAttribute('aria-pressed',x==b));
  M.forEach((m,i)=>{const e=gm.children[i];e.classList.toggle('off',!!f&&!(m.has&&m.fams.includes(f)));if(f&&m.has&&m.fams.includes(f)){e.classList.remove('beat');e.getBoundingClientRect();e.classList.add('beat')}});
  live.textContent=f?M.filter(m=>m.has&&m.fams.includes(f)).length+' municipios con '+f:'Todos los oficios'});
 let rt;addEventListener('resize',()=>{clearTimeout(rt);rt=setTimeout(()=>{if(!G||!R.isConnected)return;size();document.documentElement.style.setProperty('--hh',$('header').offsetHeight+'px');go(sel>=0?fitRect(M[sel].f.bb,insets(true),.55,G.W/6):home(),0);if(sel>=0)render()},150)});
 /* carga de archivo */
 const load=async file=>{try{const j=JSON.parse(await file.text());const g=prepGeo(j);try{await idb('readwrite',s=>s.put(j,'boyaca'))}catch(e){}if(G)close();build(g)}catch(err){showErr(err.message)}};
 const showErr=t=>{let e=$('.g-err',R);if(!e)return;e.textContent=t;e.hidden=false};
 R.addEventListener('change',e=>{if(e.target.matches('.g-file input,.g-chg input')&&e.target.files[0])load(e.target.files[0])});
 ['dragover','dragenter'].forEach(t=>R.addEventListener(t,e=>{e.preventDefault();R.classList.add('drop')}));['dragleave','drop'].forEach(t=>R.addEventListener(t,e=>{e.preventDefault();R.classList.remove('drop');if(t=='drop'&&e.dataTransfer.files[0])load(e.dataTransfer.files[0])}));
  size();geoSource().then(j=>{if(j)build(prepGeo(j))}).catch(e=>showErr(e.message))}

/* Interacciones del inicio que no dependen del 3D (filtro de piezas, mapa de hilos) */
function homeExtras() {
  /* Piezas para empezar: filtro por categoría */
  $$(".pz-f").forEach(b => {
    b.onclick = () => {
      const c = b.dataset.c;

      $$(".pz-f").forEach(x => x.setAttribute("aria-pressed", x == b));
      $$(".pz-g .pz").forEach(a => {
        a.hidden = !!c && a.dataset.cat != c;
      });
    };
  });

  /* ¿De dónde viene cada pieza?: leyenda al pasar por un punto */
  const cap = $("#tzc");
  const pins = $$(".tz-pin");

  const show = p => {
    const n = +p.dataset.c;

    cap.innerHTML =
      `<b>${p.dataset.n}</b> · ${p.dataset.o}` +
      (p.dataset.t ? ` · ${p.dataset.t}` : "") +
      (n ? ` · ${n} ${n > 1 ? "piezas" : "pieza"}` : "") +
      ` <a href="${p.getAttribute("href")}">Ver en el mapa</a>`;

    pins.forEach(x => x.classList.toggle("on", x == p));
  };

  pins.forEach(p => {
    p.addEventListener("pointerover", e => {
      if (e.pointerType != "touch") show(p);
    });

    p.addEventListener("focus", () => show(p));

    p.addEventListener("click", e => {
      if (matchMedia("(hover:none)").matches && !p.classList.contains("on")) {
        e.preventDefault();
        show(p);
      }
    });
  });

  const mp = $(".tz-map");

  if (mp) {
    new IntersectionObserver(([e], o) => {
      if (e.isIntersecting) {
        mp.classList.add("in");
        o.disconnect();
      }
    }, { threshold: .3 }).observe(mp);
  }
}


/* ===================== Catálogo: exploración ===================== */
const LENS=[['oficios','🧶','Oficios','of'],['materiales','🌱','Materiales','mat'],['territorios','📍','Territorios','mun'],['procesos','👐','Procesos','tec'],['categorias','🏷️','Categorías','cat'],['objetos','🏺','Objetos',null],['artesanos','👩‍🎨','Artesanos','art'],['experiencias','🧭','Experiencias','exp']];
const HINT={categorias:'Qué es la pieza: prendas, cocina, decoración, juego…',oficios:'Cada oficio es una forma distinta de transformar el territorio.',materiales:'Lo que da la tierra y las manos transforman.',territorios:'Cada municipio guarda un saber distinto.',procesos:'Las técnicas cuentan cómo se hace cada pieza.',objetos:'Todas las piezas, sin filtros: entra a la que te llame.',artesanos:'Detrás de cada pieza hay unas manos.',experiencias:'Lo que podrías ver y vivir alrededor de un oficio (ejemplos por reemplazar).'};
const FL={cat:'Categoría',of:'Oficio',mat:'Material',mun:'Territorio',tec:'Proceso',art:'Artesano',exp:'Experiencia'};
/* Textos de apoyo editoriales (frases) y experiencias DE EJEMPLO: reemplazar con contenido verificado */
const FRASE={Tejeduría:'Cada hilo cuenta una historia.',Alfarería:'El barro guarda la huella de las manos.',Cestería:'Fibras que se entrelazan hasta volverse forma.',Talla:'La forma aparece al quitar lo que sobra.',Otros:'Saberes que pasan de mano en mano.'};
const EXPD={Tejeduría:'Ver cómo se teje en telar',Alfarería:'Conocer el trabajo en el torno',Cestería:'Ver el entrelazado de fibras',Talla:'Ver el tallado de cerca',Otros:'Conocer el oficio con su artesano'};
const GEN=[['Materia prima','Se seleccionan los materiales naturales de la región, como la lana, la madera, la cerámica.'],['Preparación','Se limpian, se secan y acondicionan para iniciar el proceso de elaboración.'],['Técnica','Se aplican las técnicas tradicionales que han sido transmitidas por generaciones.'],['Detalles','Se cuidan los acabados, los colores y la forma, que dan vida a cada pieza.'],['Pieza final','Finalmente, se obtiene una artesanía única, con identidad cultural y valor propio.']];
P.forEach(p=>{p.fam=fam(p.of);p.exp=EXPD[p.fam]});
const uniq=a=>[...new Set(a)],slug=s=>norm(s).replace(/ /g,'-');
const ofMatch=(p,v)=>norm(p.of)==norm(v)||p.fam==fam(v);
const hasF=(p,k,v)=>k=='of'?ofMatch(p,v):p[k]==v;
const canon=(k,v)=>k=='of'?(P.find(p=>ofMatch(p,v))||{of:v}).of:v;
const demoT=t=>`<span class="g-demo">${t||'Por completar'}</span>`;
const artInfo=p=>{const t=TERR[norm(p.mun)],a=t&&t.artesanos.find(x=>x.n==p.art);return a||{n:p.art}};
const stepsFor=p=>p.id=='ruana'?HOW.map(h=>({t:h[0],d:h[1],img:h[2]})):GEN.map(g=>({t:g[0],d:g[1],img:p.img,gen:1}));
const gcol=(k,v,i)=>k=='of'?OFC[fam(v)]:k=='mat'?matc(v):['#F39325','#79AC2B','#E52529','#EEEFB2'][i%4];
/* utilidades de animación */
function reveal(){const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.15});$$('.rv').forEach(e=>io.observe(e))}
let ptk=0;addEventListener('scroll',()=>{if(RM||innerWidth<=820||ptk)return;ptk=requestAnimationFrame(()=>{ptk=0;$$('[data-px]').forEach(e=>{const r=e.getBoundingClientRect();if(r.bottom<-200||r.top>innerHeight+200)return;e.style.setProperty('--py',((r.top+r.height/2-innerHeight/2)*(+e.dataset.px)).toFixed(1)+'px')})})},{passive:true});
let tt;const toast=t=>{const e=$('.toast');e.textContent=t;e.classList.add('on');clearTimeout(tt);tt=setTimeout(()=>e.classList.remove('on'),3200)};
/* pasaporte artesanal: los sellos se ganan al abrir una pieza */
const PPK='trama-pp';let PP={mun:[],fam:[],mat:[]};try{PP=Object.assign(PP,JSON.parse(localStorage.getItem(PPK)||'{}'))}catch(e){}
const MUNS=uniq(P.map(p=>p.mun)).sort();
const ppCount=()=>{const b=$('.pp-b b');if(b)b.textContent=PP.mun.length+'/'+MUNS.length};
const ppSave=()=>{try{localStorage.setItem(PPK,JSON.stringify(PP))}catch(e){}ppCount()};
function discover(p){const n=[];[['mun',p.mun],['fam',p.fam],['mat',p.mat]].forEach(([k,v])=>{if(!PP[k].includes(v)){PP[k].push(v);n.push(v)}});if(n.length){ppSave();toast('Nuevo sello: '+n.join(' · '))}}
function ppOpen(){const d=$('.pp-d');$('div',d).innerHTML=`<button class="pp-x" aria-label="Cerrar pasaporte" onclick="this.closest('dialog').close()">×</button><img class="mascota mp" src="img/mascota_tagua.svg" alt="" width="170" height="161" loading="lazy"><h2>Tu pasaporte artesanal</h2><p>Cada pieza que abres sella su territorio, su oficio y su material.</p>
<h3>Territorios: ${PP.mun.length} de ${MUNS.length}</h3><div class="pp-m">${MUNS.map(m=>{const ok=PP.mun.includes(m),p=P.find(x=>x.mun==m);return ok?`<div class="pp-t"><img src="${IMG[p.img]}" alt=""><b>${m}</b></div>`:`<div class="pp-t lk" aria-label="Territorio por descubrir">?</div>`}).join('')}</div>
<h3>Oficios</h3><div class="pp-f">${Object.keys(OFC).map(f=>`<span class="pp-o${PP.fam.includes(f)?' on':''}" style="--c:${OFC[f]}">${f}</span>`).join('')}</div>
<h3>Materiales descubiertos: ${PP.mat.length}</h3><div class="pp-f">${PP.mat.map(m=>`<span class="pp-o on" style="--c:${matc(m)}">${m}</span>`).join('')||'<span class="mut">Aún ninguno. Abre una pieza para empezar.</span>'}</div>
<p style="margin:22px 0 0;display:flex;gap:10px;flex-wrap:wrap"><a class="btn" href="#/catalogo" onclick="this.closest('dialog').close()">Seguir explorando</a><button class="btn ghost" style="color:var(--wi)" onclick="PP={mun:[],fam:[],mat:[]};ppSave();ppOpen()">Reiniciar</button></p>`;if(!d.open)d.showModal()}

/* ---------- Catálogo ---------- */
V.catalogo=()=>`<section class="ct-in"><div class="wrap"><h1>¿Qué quieres descubrir?</h1><div class="ct-lens" role="group" aria-label="Quiero descubrir">${LENS.map(l=>`<button class="ct-l" data-l="${l[0]}" aria-pressed="false"><span aria-hidden="true">${l[1]}</span>${l[2]}</button>`).join('')}</div><p class="ct-hint" id="ch"></p><p class="ct-st">${P.length} piezas · ${uniq(P.map(p=>p.mun)).length} municipios · ${ART.length} artesanos</p><div class="ct-vals" id="cv" role="group" aria-label="Opciones para combinar"></div><div class="ct-s"><span aria-hidden="true">⌕</span><label class="sr" for="qq">Buscar</label><input id="qq" type="search" placeholder="Buscar por nombre, artesano o municipio" autocomplete="off"></div></div></section><div class="ct-rt" id="crt" aria-live="polite"></div><div id="cr"></div><section class="ct-sh" id="cs"></section>`;
let CS={lens:'oficios',sel:{of:[],mat:[],mun:[],tec:[],art:[],exp:[],cat:[]},q:''},lastPz=null;
const matches=(p,skip)=>Object.entries(CS.sel).every(([k,vs])=>k==skip||!vs.length||vs.some(v=>hasF(p,k,v)))&&(!CS.q||norm([p.n,p.art,p.mun,p.mat,p.tec,p.of,p.cat,p.desc].join(' ')).includes(norm(CS.q)));
const pc=(p,j,c)=>`<a class="pc ${c||'s'+j%4}" href="#/pieza/${p.id}" data-id="${p.id}"><div class="pi"><img src="${IMG[p.img]}" alt="${p.n}">${p.cat?`<span class="pc-cat">${p.cat}</span>`:''}<div class="po"><small>${p.mun}</small><span>${p.mat} · ${p.tec}</span><em>${p.desc||'“'+FRASE[p.fam]+'”'}</em><u>${/^Artesano de/.test(p.art)?p.art:'Hecha por '+p.art}</u></div></div><div class="pt"><b>${p.n}</b><span>${p.mun} · ${/^Artesano de/.test(p.art)?'Artesano local':p.art}</span><i class="pc-pr">${money(p.pr)}</i></div></a>`;
const rel=g=>{const as=uniq(g.items.map(p=>p.art)).filter(n=>!/^Artesano de/.test(n)).slice(0,4),ts=uniq(g.items.map(p=>p.tec)).slice(0,3);return as.length||ts.length?`<div class="ch-rel">${as.map(n=>{const a=ART.find(x=>x.id==slug(n));return a?`<a href="#/artesano/${a.id}">👤 ${n}</a>`:`<span>👤 ${n}</span>`}).join('')}${ts.map(t=>`<span>🧵 ${t}</span>`).join('')}</div>`:''};
function groups(hit){const k=LENS.find(l=>l[0]==CS.lens)[3];if(!k)return[{label:'Objetos',kick:'Todas las piezas',sub:`${hit.length} ${hit.length>1?'piezas':'pieza'} para descubrir`,c:'#F39325',items:hit}];
 const m=new Map();hit.forEach(p=>(m.get(p[k])||m.set(p[k],[]).get(p[k])).push(p));
 return[...m].sort((a,b)=>b[1].length-a[1].length||a[0].localeCompare(b[0])).map(([v,it],i)=>({label:v,kick:FL[k],k,c:gcol(k,v,i),items:it,sub:`${it.length} ${it.length>1?'piezas':'pieza'} · ${uniq(it.map(p=>k=='mun'?p.of:p.mun)).join(', ')}${k=='exp'?' · experiencia de ejemplo':''}`}))}
const chapter=(g,i)=>`<section class="ch t${i%4}" style="--c:${g.c}"><div class="ch-h"><span class="ch-k"><i></i>${g.kick}</span><h2 class="ch-w" data-px="-.07">${g.label}</h2><p>${g.sub}${g.k=='mun'?` · <a href="#/boyaca/${slug(g.label)}">Ver en el mapa</a>`:''}</p>${rel(g)}</div><div class="ch-row">${g.items.map((p,j)=>pc(p,j)).join('')}</div></section>`;
function vals(k){const base=P.filter(p=>matches(p,k)),tot=new Map();P.forEach(p=>tot.set(p[k],(tot.get(p[k])||0)+1));
 return[...tot].sort((a,b)=>b[1]-a[1]||a[0].localeCompare(b[0])).map(([v])=>[v,base.filter(p=>p[k]==v).length])}
function flip(before,first){if(RM)return;const d=innerWidth<=900?320:520;let n=0;$$('#cr .pc,#cs .pc').forEach(el=>{const o=before.get(el.dataset.id),r=el.getBoundingClientRect();
 if(o&&!first){const dx=o.left-r.left,dy=o.top-r.top,sx=o.width/r.width,sy=o.height/r.height;if(Math.abs(dx)+Math.abs(dy)>2||Math.abs(sx-1)>.02)el.animate([{transformOrigin:'0 0',transform:`translate(${dx}px,${dy}px) scale(${sx},${sy})`},{transformOrigin:'0 0',transform:'none'}],{duration:d,easing:'cubic-bezier(.2,.8,.2,1)'})}
 else if(r.top<innerHeight*1.4)el.animate([{opacity:0,transform:'translateY(28px) scale(.95)'},{opacity:1,transform:'none'}],{duration:d,delay:Math.min(n++,8)*50,easing:'ease-out',fill:'backwards'})})}
function paint(first){const before=new Map();$$('#cr .pc,#cs .pc').forEach(e=>before.set(e.dataset.id,e.getBoundingClientRect()));
 const hit=P.filter(p=>matches(p)),rest=P.filter(p=>!hit.includes(p)),L=LENS.find(l=>l[0]==CS.lens),k=L[3];
 $$('.ct-l').forEach(b=>b.setAttribute('aria-pressed',b.dataset.l==CS.lens));$('#ch').textContent=HINT[CS.lens];
 $('#cv').innerHTML=k?vals(k).map(([v,n],i)=>`<button class="ct-v" style="--c:${gcol(k,v,i)};animation-delay:${i*25}ms" data-k="${k}" data-v="${v}" aria-pressed="${CS.sel[k].includes(v)}" ${n?'':'data-z'}><i></i>${k=='exp'?v+' (ejemplo)':v}<small>${n}</small></button>`).join(''):'';
 const ch=Object.entries(CS.sel).flatMap(([k,vs])=>vs.map(v=>`<button class="ct-x" data-k="${k}" data-v="${v}" aria-label="Quitar ${FL[k]}: ${v}">${FL[k]} → ${v} <span aria-hidden="true">×</span></button>`));
 $('#crt').innerHTML=(ch.length?'<span>Tu ruta</span>'+ch.join('<span class="ct-pl">+</span>')+'<span class="ct-pl">=</span>':'<span>Elige algo arriba para empezar tu ruta</span> <span class="ct-pl">·</span>')+` <b>${hit.length}</b> ${hit.length==1?'pieza':'piezas'}`+(ch.length||CS.q?'<button class="ct-clr" data-clear>Empezar de nuevo</button>':'');
 $('#cr').innerHTML=hit.length?groups(hit).map(chapter).join(''):`<div class="ct-e"><img class="mascota me" src="img/mascota_tagua.svg" alt="" width="170" height="161" loading="lazy"><h2>Ninguna pieza une esa ruta todavía</h2><p>Quita algún paso de tu ruta y mira qué aparece.</p><button class="btn" data-clear>Empezar de nuevo</button></div>`;
 $('#cs').innerHTML=rest.length?`<div class="wrap"><h2>${hit.length?'Sigue explorando':'Otras piezas para descubrir'}</h2><div class="ct-sr">${rest.map(p=>pc(p,0)).join('')}</div></div>`:'';
 flip(before,first);const pr=new URLSearchParams();pr.set('lens',CS.lens);Object.entries(CS.sel).forEach(([k,v])=>v.length&&pr.set(k,v.join('|')));if(CS.q)pr.set('q',CS.q);history.replaceState(null,'','#/catalogo?'+pr)}
function catalog(q){const m=$('#main');CS.q=q.q||'';Object.keys(CS.sel).forEach(k=>CS.sel[k]=q[k]?q[k].split('|').filter(Boolean).map(v=>canon(k,v)):[]);
 const fk=Object.keys(CS.sel).find(k=>CS.sel[k].length);CS.lens=LENS.some(l=>l[0]==q.lens)?q.lens:fk?LENS.find(l=>l[3]==fk)[0]:'oficios';
 const qq=$('#qq');qq.value=CS.q;let t;qq.oninput=()=>{clearTimeout(t);t=setTimeout(()=>{CS.q=qq.value.trim();paint()},200)};
 m.onclick=e=>{const l=e.target.closest('[data-l]');if(l){CS.lens=l.dataset.l;return paint()}
  const v=e.target.closest('.ct-v,.ct-x');if(v){const s=CS.sel[v.dataset.k],i=s.indexOf(v.dataset.v);i<0?s.push(v.dataset.v):s.splice(i,1);return paint()}
  if(e.target.closest('[data-clear]')){Object.keys(CS.sel).forEach(k=>CS.sel[k]=[]);CS.q='';qq.value='';return paint()}
  const a=e.target.closest('.pc');if(a){lastPz=a.dataset.id;$$('[style*="view-transition-name"]').forEach(x=>x.style.viewTransitionName='');const im=$('img',a);if(im)im.style.viewTransitionName='pieza-img'}};
 const fine=matchMedia('(hover:hover) and (min-width:901px)').matches&&!RM;
 if(fine){m.onpointermove=e=>{if(e.pointerType!='mouse')return;const a=e.target.closest('.pc');if(!a||a.closest('.ct-sh'))return;const r=a.getBoundingClientRect();a.style.setProperty('--ry',((e.clientX-r.left)/r.width-.5)*9+'deg');a.style.setProperty('--rx',(-((e.clientY-r.top)/r.height-.5))*9+'deg')};m.onpointerout=e=>{const a=e.target.closest('.pc');if(a){a.style.setProperty('--rx','0deg');a.style.setProperty('--ry','0deg')}}}
 paint(true);if(lastPz){const im=$(`.pc[data-id="${lastPz}"] img`);if(im)im.style.viewTransitionName='pieza-img'}}

/* ---------- Detalle: una pequeña historia en seis capítulos ---------- */
V.pieza=id=>{const p=P.find(x=>x.id==id)||P[0],c=OFC[p.fam],gl=p.gal||[p.img],a=artInfo(p),others=f=>P.filter(x=>x.id!=p.id&&f(x));
 const mini=l=>l.map(x=>`<a class="pz-mi" href="#/pieza/${x.id}"><img src="${IMG[x.img]}" alt="">${x.n}</a>`).join('')||'<p class="mut">Aún no hay más piezas registradas.</p>';
 const lk=(k,v,t)=>`<a class="g-chip" href="#/catalogo?${k}=${encodeURIComponent(v)}">${t||v}</a>`,H=(n,t,q,b,cls)=>`<section class="pz-ch b${n-1}${cls||''}" id="c${n}" data-ch="${n}"><div class="w"><div class="pz-ct"><span class="pz-n">0${n}</span><h2>${t}</h2></div><p class="pz-q">${q}</p>${b}</div></section>`;
 const same=others(x=>x.mun==p.mun),near=same.length?same:others(x=>x.fam==p.fam),tecs=uniq(others(x=>x.fam==p.fam).map(x=>x.tec).concat(p.tec));
 return `<div class="pz-hero" style="--c:${c}"><div class="in"><div><a class="pz-back" href="#/catalogo">← Seguir explorando</a><p class="pz-k">${p.of} · ${p.mun}</p><h1>${p.n}</h1><p class="pz-fr">“${FRASE[p.fam]}”</p>
 <div class="pz-buy"><span class="price">${money(p.pr)}</span><div class="qty"><button aria-label="Menos" id="mn">−</button><span id="qn" aria-live="polite">1</span><button aria-label="Más" id="mp">+</button></div><button class="btn or" id="bu" data-id="${p.id}">Llevar esta pieza</button></div></div>
 <div class="pz-hi" data-px=".05"><img style="view-transition-name:pieza-img" src="${IMG[gl[0]]}" alt="${p.n}"></div></div></div>
 <nav class="pz-rail" aria-label="Capítulos de la historia">${['El territorio','El material','Las manos','La técnica','La pieza','Descubre'].map((t,i)=>`<button data-t="${i+1}"><b>0${i+1}</b>${t}</button>`).join('')}</nav>
 ${H(1,'El territorio','¿De dónde viene?',`<div class="pz-big rv">${p.mun}</div><p class="rv" style="max-width:46ch;margin:20px 0 26px">${DEMO.desc} ${demoT('Texto de prueba')}</p><a class="btn rv" href="#/boyaca/${slug(p.mun)}">Ver ${p.mun} en el mapa</a>`)}
 ${H(2,'El material','¿Con qué se realiza?',`<div class="pz-2"><div><div class="pz-big rv">${p.mat}</div><p class="rv" style="max-width:46ch;margin:20px 0">Descripción del material y su origen en el territorio. ${demoT('Texto de prueba')}</p><div class="pz-mini rv">${lk('mat',p.mat,'Más piezas con '+p.mat.toLowerCase())}</div></div><div class="pz-sw rv" style="--c:${matc(p.mat)}" aria-hidden="true"></div></div>`)}
 ${H(3,'Las manos','¿Quién la realiza?',`<div class="pz-2"><div><div class="pz-big rv" style="font-size:clamp(2.6rem,9vw,7.5rem)">${a.n}</div><p class="rv" style="max-width:46ch;margin:20px 0">${a.saber||'Historia y saber de este artesano por documentar.'} ${a.saber?'':demoT('Texto de prueba')}</p>${a.cita?`<blockquote class="rv">“${a.cita}”</blockquote>`:''}<div class="pz-mini rv">${a.ai?`<a class="btn" href="#/artesano/${a.ai}">Conoce su historia</a>`:''}${mini(others(x=>x.art==p.art))}</div></div>${a.img?`<div class="pz-am rv"><img src="${IMG[a.img]}" alt="${a.n}"></div>`:''}</div>`)}
 ${H(4,'La técnica','¿Cómo se transforma el material?',`<div class="pz-big rv" style="font-size:clamp(2.4rem,8vw,6.5rem);margin-bottom:26px">${p.tec}</div><div class="grid" style="display:grid;grid-template-columns:1fr 1.1fr;gap:clamp(20px,4vw,56px)"><div class="steps" role="tablist" aria-label="Pasos del proceso">${stepsFor(p).map((h,i)=>`<button role="tab" data-s="${i}" aria-selected="${!i}"><b>${i+1}</b><span><strong>${h.t}</strong></span></button>`).join('')}</div><div><figure class="vid" style="margin:0"><img id="vi" src="${IMG[stepsFor(p)[0].img]}" alt=""><figcaption id="vc"></figcaption></figure>${p.id=='ruana'?`<p style="margin:14px 0 0;opacity:.8">Antes y después: arrastra para pasar de la fibra a la pieza.</p><div class="cmp" id="cm"><img src="${IMG.r2}" alt="Ruana terminada"><img class="a" src="${IMG.r4}" alt="Detalle del tejido"><i></i><input type="range" min="0" max="100" value="50" aria-label="Comparar detalle del tejido y pieza terminada"></div>`:''}</div></div>`,' dk')}
 ${H(5,'La pieza','¿Cuál es el resultado?',`<div class="pd" style="padding-top:0"><div class="gal"><div class="th">${gl.length>1?gl.map((g,i)=>`<button data-g="${g}" aria-current="${!i}" aria-label="Foto ${i+1}"><img src="${IMG[g]}" alt=""></button>`).join(''):''}</div><div class="big"><img id="bg" src="${IMG[gl[0]]}" alt="${p.n}"></div></div><div><h3 style="font-size:2rem">${p.n}</h3><ul class="facts"><li>👤 <b>Artesano/a:</b> ${p.ai?`<a href="#/artesano/${p.ai}">${p.art}</a>`:p.art}</li><li>📍 <b>Municipio:</b> ${p.mun}</li><li>◍ <b>Material:</b> ${p.mat}</li><li>▦ <b>Técnica:</b> ${p.tec}</li><li>● <b>Disponibilidad:</b> En stock</li></ul><div class="price">${money(p.pr)}</div><button class="btn" id="bu2" style="margin-top:14px">Llevar esta pieza</button></div></div>`)}
 ${H(6,'Descubre','Si te interesa esta artesanía…',`<div class="pz-r"><h3>Municipio</h3><div><p><b>${p.mun}</b></p><a class="g-chip" href="#/boyaca/${slug(p.mun)}">Ver en el mapa</a></div></div>
 <div class="pz-r"><h3>Talleres y espacios</h3><div><p>Aquí aparecerán los talleres verificados de ${p.mun}. ${demoT()}</p></div></div>
 <div class="pz-r"><h3>Otras artesanías${same.length?' de '+p.mun:''}</h3><div class="pz-mini">${mini(near)}</div></div>
 <div class="pz-r"><h3>Técnicas relacionadas</h3><div class="pz-mini">${tecs.map(t=>lk('tec',t)).join('')}${lk('of',p.of,'Todo '+p.of.toLowerCase())}</div></div>
 <div class="pz-r"><h3>Experiencias culturales</h3><div><p>${p.exp} ${demoT('Ejemplo')}</p></div></div>
 <div class="pz-r"><h3>Lugares de interés próximos</h3><div><p>Se mostrarán cuando existan datos verificados. ${demoT()}</p></div></div>
 <div class="pz-mini" style="margin-top:24px"><a class="btn" href="#/catalogo">Seguir explorando</a><button class="btn ghost" style="color:inherit" onclick="ppOpen()">Ver mi pasaporte</button></div>`)}
 <div class="pz-fb" aria-hidden="true"><span>${p.n} · <b>${money(p.pr)}</b></span><button class="btn or" id="bu3" tabindex="-1">Llevar</button></div>`};
function product(id){const p=P.find(x=>x.id==id)||P[0],S=stepsFor(p);discover(p);let n=1;const u=()=>$('#qn').textContent=n;
 $('#mn').onclick=()=>{n=Math.max(1,n-1);u()};$('#mp').onclick=()=>{n++;u()};
 $('#bu').onclick=()=>{cart[p.id]=(cart[p.id]||0)+n;save();location.hash='#/carrito'};$('#bu2').onclick=$('#bu3').onclick=()=>$('#bu').click();
 $$('.th button').forEach(b=>b.onclick=()=>{$('#bg').src=IMG[b.dataset.g];$$('.th button').forEach(x=>x.setAttribute('aria-current',x==b))});
 const st=i=>{$$('.steps button').forEach(b=>b.setAttribute('aria-selected',+b.dataset.s==i));$('#vi').src=IMG[S[i].img];$('#vc').innerHTML=`<b>${i+1}. ${S[i].t}</b><br>${S[i].d||''}<br><small>Video de prueba: reemplazar por el clip real de este paso${S[i].gen?' · texto general, por documentar con el artesano':''}</small>`};st(0);
 $$('.steps button').forEach(b=>b.onclick=()=>st(+b.dataset.s));const r=$('#cm input');if(r)r.oninput=()=>$('#cm').style.setProperty('--p',r.value+'%');
 const hero=$('.pz-hero'),fb=$('.pz-fb');const b3=$('#bu3');new IntersectionObserver(([e])=>{const on=!e.isIntersecting&&e.boundingClientRect.top<0;fb.classList.toggle('on',on);b3.tabIndex=on?0:-1;fb.setAttribute('aria-hidden',!on)}).observe(hero);
 $$('.pz-rail button').forEach(b=>b.onclick=()=>$('#c'+b.dataset.t).scrollIntoView({behavior:RM?'auto':'smooth',block:'start'}));
 const io=new IntersectionObserver(es=>es.forEach(e=>e.isIntersecting&&$$('.pz-rail button').forEach(b=>b.setAttribute('aria-current',b.dataset.t==e.target.dataset.ch))),{rootMargin:'-45% 0px -50% 0px'});$$('.pz-ch').forEach(c=>io.observe(c))}

/* ===================== Artesanos: índice tipográfico + escenario ===================== */
TERR.chiquinquira.nombre='Chiquinquirá';
IMG.tagua1=IMG.tagua1||IMG.t1;IMG.tagua2=IMG.tagua2||IMG.cuc;
/* ---- ARTESANOS: se construyen desde la lista editable ARTESANOS ---- */
const ART = ARTESANOS.map(a => {
  const id = a.id || slug(a.nombre);
  const pz = P.filter(p => slug(p.art) == id);
  const k0 = imgKey("a_" + id, a.imagen, a.nombre);
  const extra = (a.fotos || []).map((f, i) => imgKey("a_" + id + "_" + i, f, a.nombre));

  return {
    id,
    n: a.nombre,
    mun: a.municipio,
    edad: a.edad,
    exp: a.experiencia,
    of: [a.oficio],
    fam: fam(a.oficio),
    mat: [a.material].filter(Boolean),
    tec: [a.tecnica].filter(Boolean),
    pz,
    fotos: uniq([k0, ...extra, ...pz.map(p => p.img)]).slice(0, 3),
    saber: a.descripcion,
    cita: a.cita,
    fic: a.prueba ? 1 : 0,
    inicio: !!a.inicio,
    peso: a.peso || 2
  };
});

/* Cada pieza enlaza a su artesano si existe en ARTESANOS */
P.forEach(p => {
  const i = slug(p.art);
  p.ai = ART.some(a => a.id == i) ? i : undefined;
});

const artMeta = a => a.edad
  ? `<p class="am-meta"><b>${a.edad}</b> años · <b>${a.exp}</b> años de experiencia</p>`
  : "";

const artById=id=>ART.find(a=>a.id==id)||ART.find(a=>a.id==({ana:'ana-torres'}[id]||'#'))||null;
V.artesanos=()=>`<section class="am"><div class="am-l"><h1>Las manos detrás</h1><p>Una selección corta de personas que guardan un oficio, un material y un territorio. Pasa el cursor o toca un nombre.</p><p class="am-ct">${ART.length} artesanos · ${uniq(ART.map(a=>a.fam)).length} oficios · ${uniq(ART.map(a=>a.mun)).length} municipios</p><div class="am-fl" role="group" aria-label="Filtrar por oficio"><button class="g-f" data-f="" aria-pressed="true">Todos</button>${Object.entries(OFC).filter(([k])=>ART.some(a=>a.fam==k)).map(([k,c])=>`<button class="g-f" data-f="${k}" style="--c:${c}" aria-pressed="false"><i></i>${k}</button>`).join('')}</div><ul class="am-list">${ART.map(a=>`<li data-f="${a.fam}"><a class="am-n w${a.peso}" href="#/artesano/${a.id}" data-a="${a.id}" style="--c:${OFC[a.fam]}">${a.n}<small>${a.mun} · ${a.of.join(', ')}</small></a></li>`).join('')}</ul></div><div class="am-st" id="ams" aria-live="polite"></div></section>`;
function artStage(a){const f=a.fotos,fl=[...f.slice(1,3).map(k=>`<span class="am-fo"><img src="${IMG[k]}" alt=""></span>`),...a.mat.slice(0,1).map(x=>`<span class="am-ch">${x}</span>`),...a.tec.slice(0,1).map(x=>`<span class="am-ch">${x}</span>`)].slice(0,4);
 return `<div class="am-s" style="--c:${OFC[a.fam]}"><div class="am-ph"><div class="am-ar"><img src="${IMG[f[0]]}" alt=""></div>${fl.map((x,i)=>x.replace('<span','<span style="--k:'+[26,-34,18,-22][i]+';--i:'+i+'"')).join('')}</div>
 <div class="am-tx"><p class="am-k">${a.of.join(', ')} · ${a.mun}</p><h2>${a.n}</h2>${artMeta(a)}<p>${a.saber||'Historia y saber por documentar.'}${a.fic?demoT('Perfil ficticio'):a.saber?'':demoT('Texto de prueba')}</p>${a.pz.length?`<div class="am-pz">${a.pz.slice(0,3).map(p=>`<span>${p.n}</span>`).join('')}</div>`:''}<a class="btn or" href="#/artesano/${a.id}">Conocer su historia</a></div></div>`}
function artesanos(){const st=$('#ams'),L=$('.am-list'),show=id=>{const a=ART.find(x=>x.id==id);if(!a||st.dataset.a==id)return;st.dataset.a=id;st.innerHTML=artStage(a);$$('.am-n',L).forEach(n=>n.classList.toggle('on',n.dataset.a==id))};
 show(ART[0].id);const touch=()=>matchMedia('(hover:none)').matches;
 L.addEventListener('pointerover',e=>{const n=e.target.closest('.am-n');if(n&&e.pointerType!='touch')show(n.dataset.a)});
 L.addEventListener('focusin',e=>{const n=e.target.closest('.am-n');if(n)show(n.dataset.a)});
 L.addEventListener('click',e=>{const n=e.target.closest('.am-n');if(n&&touch()&&st.dataset.pick!=n.dataset.a){e.preventDefault();st.dataset.pick=n.dataset.a;show(n.dataset.a)}});
 st.addEventListener('pointermove',e=>{if(e.pointerType=='touch'||RM)return;const r=st.getBoundingClientRect();st.style.setProperty('--mx',((e.clientX-r.left)/r.width-.5)*2);st.style.setProperty('--my',((e.clientY-r.top)/r.height-.5)*2)});
 $$('.am-fl .g-f').forEach(b=>b.onclick=()=>{const f=b.dataset.f;$$('.am-fl .g-f').forEach(x=>x.setAttribute('aria-pressed',x==b));let first=null;$$('li',L).forEach(li=>{const ok=!f||li.dataset.f==f;li.classList.toggle('dim',!ok);li.firstChild.tabIndex=ok?0:-1;if(ok&&!first)first=li.firstChild.dataset.a});if(first)show(first)})}
V.artesano=id=>{const a=artById(id)||ART[0],c=OFC[a.fam],mk=slug(a.mun);
 return `<div class="pz-hero" style="--c:${c}"><div class="in"><div><a class="pz-back" href="#/artesanos">← Todas las manos</a><p class="pz-k">${a.of.join(', ')} · ${a.mun}</p><h1>${a.n}</h1>${artMeta(a)}<p class="pz-fr">${a.cita?'“'+a.cita+'”':(a.saber||'Historia y saber por documentar.')}${a.fic?demoT('Perfil ficticio'):a.cita||a.saber?'':demoT('Texto de prueba')}</p></div><div class="pz-hi" data-px=".05"><img src="${IMG[a.fotos[0]]}" alt="${a.n}"></div></div></div>
 <section class="ch t0" style="--c:${c};margin-top:0;border-radius:0"><div class="ch-h"><span class="ch-k"><i></i>Lo que transforman sus manos</span><h2 class="ch-w" data-px="-.06">${a.mat.join(' · ')||a.of[0]}</h2><p>${a.tec.length?'Técnica: '+a.tec.join(', ')+'. ':''}${a.saber||''}${a.saber?'':demoT('Texto de prueba')}</p></div>${a.pz.length?`<div class="ch-row">${a.pz.map((p,j)=>pc(p,j)).join('')}</div>`:'<div class="ch-h"><img class="mascota me" src="img/mascota_tagua.svg" alt="" width="170" height="161" loading="lazy"><p>Aún no hay piezas de este artesano en el catálogo.</p></div>'}</section>
 <section class="pz-ch b5"><div class="w"><div class="pz-ct"><span class="pz-n">→</span><h2>Sigue el hilo</h2></div><div class="pz-ds" style="margin-top:26px"><div class="pz-r"><h3>Su territorio</h3><div><p><b>${a.mun}</b></p><a class="g-chip" href="#/boyaca/${mk}">Ver en el mapa</a></div></div><div class="pz-r"><h3>Su proceso</h3><div><p>Conoce cómo se transforma el material.</p><a class="g-chip" href="#/proceso">Ver el proceso</a></div></div><div class="pz-r"><h3>Más ${a.of[0]?a.of[0].toLowerCase():'oficios'}</h3><div><a class="g-chip" href="#/catalogo?of=${encodeURIComponent(a.of[0]||'')}">Explorar el oficio</a></div></div></div></div></section>`};

function route(){if(location.hash&&!location.hash.startsWith('#/'))return;const h=location.hash.slice(2),[path,qs]=h.split('?'),[a,id]=path.split('/'),q=Object.fromEntries(new URLSearchParams(qs||''));const k=a||'',m=$('#main');m.onclick=m.onpointermove=m.onpointerout=null;document.body.dataset.r=k;document.documentElement.style.setProperty('--hh',$('header').offsetHeight+'px');
m.innerHTML=(V[k]||V[''])(k=='pieza'||k=='artesano'?id:q);$$('nav a').forEach(x=>x.toggleAttribute('aria-current',x.getAttribute('href')=='#/'+({catalogo:'catalogo',pieza:'catalogo',artesanos:'artesanos',artesano:'artesanos',proceso:'boyaca',boyaca:'boyaca'}[k]||'x')));
scrollTo(0,0);document.title='Qua · '+(k||'Artesanías de Boyacá');if(k==''){home();homeExtras()}if(k=='boyaca')geoApp();if(k=='catalogo')catalog(q);if(k=='pieza')product(id);if(k=='artesanos')artesanos();reveal();
if(k=='carrito')m.onclick=e=>{const b=e.target.closest('[data-d]');if(!b)return;const id=b.parentNode.dataset.c,d=b.dataset.d;cart[id]=d=='x'?0:Math.max(0,(cart[id]||0)+ +d);save();route()};
if(k=='catalogo'&&'q' in q&&!q.q)$('#qq').focus()}
addEventListener('hashchange',()=>{if(location.hash&&!location.hash.startsWith('#/'))return;if(document.startViewTransition&&!RM)document.startViewTransition(()=>route());else route()});save();ppCount();route();
