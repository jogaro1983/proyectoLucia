import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
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
    /* return new Promise((resolve,reject)=>{
      resolve(this._http.get(this.fotosURL));
    }) */
    return this._http.get(this.fotosURL);
  }

  public getLugares(){
    return this._http.get(this.lugaresURL);
  }

  public setFoto(foto:Fotos){
    return this._http.post(this.fotosURL,{
      id:foto.id,
      path:foto.path,
      data:foto.data
    })
  }

  public setLugares(lugares: Lugares){
    return this._http.post(this.lugaresURL,{
      id:lugares.id,
      viaje:lugares.viaje,
      fotosId:lugares.fotosId
    })
  }
}
