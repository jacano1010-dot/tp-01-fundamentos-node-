const nombre = process.argv[2] ?? "Juan ";
console.log(`Bienvenido: ${nombre}`);
console.log("Versión de Node.js:", process.version);
console.log("Plataforma:", process.platform);
const videojuego = {
 titulo: "The Witcher 3:Wild Hunt",
 estudio: "CD Projekt Red",
 año: 2015,
 plataformas: ["PC","PlayStation 4","Xbox One","Nintendo Swicht","PlayStation5","Xbox Series X/S"],
 multijugador: false
};
const generosComoTexto = videojuego.plataformas.join(", ");
const estado = videojuego.multijugador? "Si" : "No";

const ficha = `FICHA DE VIDEOJUEGO
=================
Estudiante: ${nombre}
Node.js: ${process.version}
Plataforma del sistema: ${process.platform}

Título: ${videojuego.titulo}
Estudio: ${videojuego.estudio}
Año: ${videojuego.año}
Plataformas: ${generosComoTexto}
¿Es multijugador?: ${estado}
`;
const fs = require("node:fs");
const path = require("node:path");
const carpetaSalida = path.join(__dirname, "salida");
const rutaArchivo = path.join(carpetaSalida, "ficha-videojuego.txt");
fs.mkdirSync(carpetaSalida, { recursive: true });
fs.writeFileSync(rutaArchivo, ficha, "utf8");

console.log(ficha);
console.log(`Archivo generado en: ${rutaArchivo}`);