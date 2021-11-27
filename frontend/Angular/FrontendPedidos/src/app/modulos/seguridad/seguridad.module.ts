import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IdentificacionComponent } from './identificacion/identificacion.component';
import { CambioClaveComponent } from './cambio-clave/cambio-clave.component';
import { RecuperarClaveComponent } from './recuperar-clave/recuperar-clave.component';



@NgModule({
  declarations: [
    IdentificacionComponent,
    CambioClaveComponent,
    RecuperarClaveComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SeguridadModule { }
