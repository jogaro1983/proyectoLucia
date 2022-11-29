import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Fotos } from 'src/app/data/fotos';
import { Lugares } from 'src/app/data/lugares';
import { ServicioHttpService } from 'src/app/service/servicio-http.service';

@Component({
  selector: 'app-picture-up',
  templateUrl: './picture-up.component.html',
  styleUrls: ['./picture-up.component.css']
})
export class PictureUpComponent implements OnInit {
  public state: any;
  ngForm: FormGroup | undefined;
  datos_fotos: Fotos={
    id:"",
    path:"",
    data:""
  };
  datos_lugares: Lugares={
    id:"",
    viaje:"",
    fotosId:""
  };
  constructor(public _servicioApi: ServicioHttpService, public fb: FormBuilder){
    this.ngForm = this.fb.group({
      email: 
      ['', 
        [Validators.required]
      ],
      password:
      ['', 
        [Validators.required]
      ]
    });
  }

  ngOnInit(): void {
  }
  
  public upFoto(){
    this._servicioApi.setFoto(this.datos_fotos).subscribe(
      (result)=>{
        this.state = result;       
      },
      error=>{
        this.state = <any>error;
      }  
    );
    this._servicioApi.setLugares(this.datos_lugares).subscribe(
      (result)=>{
        this.state = result;       
      },
      error=>{
        this.state = <any>error;
      }  
    );
  }

}
