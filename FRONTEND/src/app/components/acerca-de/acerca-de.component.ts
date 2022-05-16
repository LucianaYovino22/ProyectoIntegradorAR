import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
miPortfolio:any;
  constructor(private datosPortolio:PortfolioService) { }
 
  ngOnInit(): void {
    this.datosPortolio.obtenerDatos().subscribe(data => {
     console.log(data);
     this.miPortfolio=data;
    });
  }

}
