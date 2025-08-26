import type { Material } from "../models/material.js";

export interface IUsuario {
  id: number;
  nombre: string;
  prestar(material: Material): void;
}