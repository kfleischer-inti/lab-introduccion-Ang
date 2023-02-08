import { Component, OnInit } from '@angular/core';
import {Persona} from 'src/models/Persona';
import {PersonaService} from 'src/app/services/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  personas: Persona[]=[]
  //Incorporamos los servicios 
  constructor(private personaService:PersonaService) { }

  ngOnInit(): void {
    this.personas=this.personaService.getAllPersonas()
  //  this.getAllPersonas()
  // let persona1 = new Persona("Hernan", "Borre", 28 )
  // this.personas.push(persona1)
  // this.personas.push(new Persona("Alejandro", "Fantino", 55 ))
  // this.personas.push(new Persona("Nicky", "Nicole", 22 ))

  }
  
getAllPersonas():void {
  this.personas=this.personaService.getAllPersonas()
}

borrarPersonadeLista(personaParaBorrar: Persona){
  this.personas=this.personaService.borrarPersonadeLista(personaParaBorrar)
  // this.personas=this.personas.filter(data=>data.nombre!==personaParaBorrar.nombre)
}
}
