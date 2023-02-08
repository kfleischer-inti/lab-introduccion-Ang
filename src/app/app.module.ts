import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonasComponent } from './componentes/personas/personas.component';
import { PersonaComponent } from './componentes/persona/persona.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    PersonasComponent,
    PersonaComponent,
    NavbarComponent,
   

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }