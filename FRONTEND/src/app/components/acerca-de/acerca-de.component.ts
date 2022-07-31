import { PersonaService } from './../../service/persona.service';
import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { persona } from 'src/app/model/persona.model';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
persona: persona = new persona("","","","",""); //creame el obj persona de tipo persona pasamos parametros vacios-hay que inicializar si o si 
  constructor(public personaService: PersonaService) { }
 
  ngOnInit(): void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
    }
  }


