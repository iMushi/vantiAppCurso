import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingrediente } from '../../models/ingrediente.model';
import {ListaComprasService } from '../lista-compras.service';

@Component({
  selector: 'app-lista-editar',
  templateUrl: './lista-editar.component.html'
})

export class ListaEditarComponent implements OnInit {

  constructor(private _listaService: ListaComprasService) {
  }

  ngOnInit() {
  }

  onSubmit(forma: NgForm) {
    const valores = forma.value;
    const ingrediente = new Ingrediente(valores.nombre, valores.cantidad);

    this._listaService.addIngrediente(ingrediente);

    forma.reset();
  }

}
