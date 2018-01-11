import { Component, OnInit } from '@angular/core';
import { Ingrediente } from '../models/ingrediente.model';
import { ListaComprasService } from './lista-compras.service';

@Component({
  selector: 'app-lista-compras',
  templateUrl: './lista-compras.component.html'
})
export class ListaComprasComponent implements OnInit {

  ingredientes: Ingrediente[];

  constructor(private _listaService: ListaComprasService) {
  }

  ngOnInit() {
    this.ingredientes = this._listaService.getIngredientes();
  }

}
