import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Fotos } from '../data/fotos';
import { Lugares } from '../data/lugares';


@Injectable()
export class ServicioHttpService  {

  public fotosURL : string;
  public lugaresURL: string;
  
  constructor(private _http: HttpClient) { 
      this.fotosURL = "http://localhost:3000/fotos";
      this.lugaresURL = "http://localhost:3000/lugares";
    }

  public getFotos(){
    return this._http.get(this.fotosURL);
  }

  public getLugares(){
    return this._http.get(this.lugaresURL);
  }
}
