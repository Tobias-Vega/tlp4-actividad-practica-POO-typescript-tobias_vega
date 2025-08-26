import type { IUsuario } from "../interfaces/usuario.interface.js";
import type { Material } from "./material.js";

export class Usuario implements IUsuario {
  public id: number;
  public nombre: string;
  private materialesPrestados: String[] = [];
  // private ultimaPrestacion! = this.materialesPrestados[-1];

  constructor(id: number, nombre: string) {
    this.id = id;
    this.nombre = nombre;
  }

  prestar(material: Material): void {
    if (material.getDisponible() === false) {
      console.error("El material no está disponible");
    }

    this.materialesPrestados.push(material.titulo);
  }

  // mostrarUltimaPrestacion(): string {
  //   return this.materialesPrestados[-1]
  // }

}