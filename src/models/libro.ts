import { Material } from "./material.js";

export class Libro extends Material {
  public paginas: number;
  public genero?: string | undefined;

  constructor(
    id: number, 
    titulo: string, 
    autor: string,
    disponible: boolean,
    paginas: number, 
    genero?: string
  ) {
    super(id, titulo, autor, disponible)
    this.paginas = paginas;
    this.genero = genero
  }

  mostrarInfo(): string {
    return `El título de este libro es ${this.titulo}, el autor es ${this.autor}, tiene ${this.paginas} páginas, su género es ${this.genero ? this.genero : "indefinido"} y actualmente se encuentra ${this.getDisponible() ? 'disponible' : 'no disponible'}`;
  }
}