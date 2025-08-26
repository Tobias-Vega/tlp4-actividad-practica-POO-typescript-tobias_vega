import { Material } from "./material.js";

export class Revista extends Material {

  edicion: string;

  constructor(
    id: number,
    titulo: string,
    autor: string,
    disponible: boolean,
    edicion: string
  ) {
    super(id, titulo, autor, disponible);
    this.edicion = edicion;
  }

    mostrarInfo(): string {
    return `El título de esta revista es ${this.titulo}, el autor es ${this.autor}, su edicion es ${this.edicion} y actualmente se encuentra ${this.getDisponible() ? 'disponible' : 'no disponible'}`;
  }
}