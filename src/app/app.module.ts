import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListaComprasComponent } from './lista-compras/lista-compras.component';
import { AppRoutingModule } from './app-routing.module';
import { ListaEditarComponent } from './lista-compras/lista-editar/lista-editar.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { ListaComprasService } from './lista-compras/lista-compras.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListaComprasComponent,
    ListaEditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ListaComprasService],
  bootstrap: [AppComponent]
})
export class AppModule { }
