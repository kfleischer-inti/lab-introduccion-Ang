import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import {Persona} from 'src/models/Persona';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  // pasar informacion ( props o properties ) de un componente   padre a un hijo, eso es super fácil y se hace con el decorator de @Input delante de
  // la variable de clase creada en nuestro componente hijo y así cuando llamamos a nuestro selector desde el padre
  @Input() persona: Persona = new Persona()

  // decorator de @Output para pasar eventos y datos desde
  // nuestros componentes hijos a nuestros padres para Borrar una persona
  @Output() deletePersona:EventEmitter<Persona>=new EventEmitter()
  constructor(){}

  ngOnInit(): void {
    
  }
  festejo(persona:Persona) {
    persona.cumplirAnios()
    }

    borrarPersona(personaParaBorrar:Persona){
      this.deletePersona.emit(personaParaBorrar)
    }
}
