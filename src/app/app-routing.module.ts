import { NgModule } from '@angular/core';
import { Routes , RouterModule } from '@angular/router';

import { ListaComprasComponent } from './lista-compras/lista-compras.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/lista', pathMatch: 'full' },
  { path: 'lista', component: ListaComprasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
