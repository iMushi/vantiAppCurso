import { Injectable } from '@angular/core';
import { Ingrediente } from '../models/ingrediente.model';

@Injectable()
export class ListaComprasService {

  private ingredientes: Ingrediente[] = [
    new Ingrediente('Tomate', 10),
    new Ingrediente('Cebolla', 10)
  ];

  constructor() {
  }

  getIngredientes() {
    return this.ingredientes;
  }

  getIngrediente(index: number) {
    return this.ingredientes[index];
  }

  addIngrediente(ingrediente: Ingrediente) {
    this.ingredientes.push(ingrediente);
  }

  addIngredientes(ingredientes: Ingrediente[]) {
    this.ingredientes.push(...ingredientes);
  }

}
