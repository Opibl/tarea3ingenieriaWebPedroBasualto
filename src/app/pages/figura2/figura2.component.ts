import { Component, OnInit } from '@angular/core';
import {ServicioService} from '../../servicio.service';
import {DatosFormulario} from '../../datos-formulario';

@Component({
  selector: 'app-figura2',
  templateUrl: './figura2.component.html',
  styleUrls: ['./figura2.component.scss']
})
export class Figura2Component implements OnInit {

  ListaGeneral:Array<DatosFormulario> = [];
  Lista1:Array<DatosFormulario> = [];
  Lista2:Array<DatosFormulario> = [];
  Lista3:Array<DatosFormulario> = [];

  constructor(private servicio:ServicioService) { }

  ngOnInit(): void {
    this.servicio.Consultar().subscribe(datos=>{
      for(let i = 0 ; i < datos.length ; i++){
        if(datos[i].estado == "abierto"){
          this.Lista1.push(datos[i]);
        }
        else{
          if(datos[i].estado == "en proceso"){
            this.Lista2.push(datos[i]);
          }
          else{
            if(datos[i].estado == "cerrado"){
              this.Lista3.push(datos[i]);
            }
          }
        }
        this.ListaGeneral.push(datos[i]);
      }
      
      //console.log(datos);
    });
  }

  borrar1(){
    this.Lista1.splice(1,1);
  }
  borrar2(){
    this.Lista2.splice(0,1);
  }
  borrar3(){
    this.Lista3.splice(0,1);
  }
}
