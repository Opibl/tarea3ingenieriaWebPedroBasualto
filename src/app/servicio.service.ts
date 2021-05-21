import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {DatosFormulario} from '../app/datos-formulario';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {

  servidor = "http://127.0.0.1:3035/";

  constructor(private servicio:HttpClient) { }

  Consultar():Observable<any>{

    return this.servicio.get(`${this.servidor}figura2`);
   
  }

  
  guardarDatos(lista:Array<DatosFormulario>):Observable<any>{
    console.log(lista);
    return this.servicio.post(`${this.servidor}`,lista);
  }
  

  guardarDatosActualizados(lista:Array<DatosFormulario>){
    console.log(lista);
    return this.servicio.post(`${this.servidor}/editar`,lista);
  }
  
  
  Consultar2():Observable<any>{

    return this.servicio.get(`${this.servidor}editar`);
   
  }
  
}
