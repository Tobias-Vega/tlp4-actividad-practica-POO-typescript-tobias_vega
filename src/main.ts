import { Libro } from "./models/libro.js";
import { Revista } from "./models/revista.js";
import { Usuario } from "./models/usuario.js";

const libro1 = new Libro(1, "Harry Potter y la Piedra Filosofal", "JK. Rowlling", true, 200, "Misterio");

const libro2 = new Libro(2, "El resplandor", "Stephen King", false, 321);

const revista1 = new Revista(1, "El mundo", "Juan Pérez", false, "Edición 3");

const usuario1 = new Usuario(1, "Carlos");

usuario1.prestar(libro1);
usuario1.prestar(libro2);
usuario1.prestar(revista1);

console.log(libro1.mostrarInfo());
console.log(revista1.mostrarInfo());