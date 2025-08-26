import type { IBibliotecaItem } from "../interfaces/biblioteca-ite.interface.js";

export abstract class Material implements IBibliotecaItem {

  public id: number;
  public titulo: string;
  public autor: string;
  private disponible: boolean;

  constructor(id: number, titulo: string,  autor: string, disponible: boolean) {
    this.id = id;
    this.titulo = titulo;
    this.autor = autor;
    this.disponible = disponible;
  }

  abstract mostrarInfo(): string;

  getDisponible(): boolean {
    return this.disponible;
  }

  setDisponible(): void {
    this.disponible = !this.disponible;
  }
}