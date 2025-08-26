import type { IUsuario } from "../interfaces/usuario.interface.js";
import type { Material } from "./material.js";

export class Usuario implements IUsuario {
  public id: number;
  public nombre: string;
  private materialesPrestados: String[] = [];
  private ultimaPrestacion!: string;

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (material.getDisponible() === false) {
      console.error("El material no está disponible");
    }

    material.setDisponible();

    this.materialesPrestados.push(material.titulo);

    this.ultimaPrestacion = material.titulo;

    this.mostrarUltimaPrestacion();

  }

  mostrarUltimaPrestacion(): void {
    console.log(`Ultima prestación de ${this.nombre}: ${this.ultimaPrestacion}`)
  }

}