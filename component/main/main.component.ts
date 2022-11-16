import { identifierName } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Fotos } from 'src/app/data/fotos';
import { Lugares } from 'src/app/data/lugares';
import { ServicioHttpService } from 'src/app/service/servicio-http.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  providers:[ServicioHttpService],
  styleUrls: ['./main.component.css']
})
export class MainComponent{
  datos_fotos: any= [];
  datos_lugares: any= [];
  
  constructor(private _servicioApi: ServicioHttpService) 
  {}

  ngOnInit(): void {
    this._servicioApi.getFotos().subscribe(response=>this.datos_fotos = response);
    this._servicioApi.getLugares().subscribe(response=>this.datos_lugares = response);
  }
}
