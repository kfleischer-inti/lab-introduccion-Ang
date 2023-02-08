import { Injectable } from '@angular/core';
import {Persona} from 'src/models/Persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  personas: Persona[]=[]
  constructor() { }

  getAllPersonas(): Persona[] {
    let persona1 = new Persona("Hernan", "Borre", 28 )
    this.personas.push(persona1)
    this.personas.push(new Persona("Alejandro", "Fantino", 55 ))
    this.personas.push(new Persona("Nicky", "Nicole", 22 ))
    return this.personas
  }

  borrarPersonadeLista(personaParaBorrar: Persona){
 
    this.personas=this.personas.filter(data=>data.nombre!==personaParaBorrar.nombre)
    return this.personas
  }
}
