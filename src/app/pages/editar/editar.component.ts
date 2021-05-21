import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import{DatosFormulario} from '../../datos-formulario';
import{ServicioService} from '../../servicio.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.scss']
})
export class EditarComponent implements OnInit {

  

  ngOnInit(): void {
  }

  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;
  lista:Array<DatosFormulario>=[];
  lista1:Array<DatosFormulario>=[];
  lista2:Array<DatosFormulario>=[];
  lista3:Array<DatosFormulario>=[];

  constructor(public fb:FormBuilder,private servicio:ServicioService) { 
    this.formulario = this.fb.group({
      titulo:['',[Validators.required]],
      estado:['',[Validators.required]],
      descripcion:['',[Validators.required,Validators.maxLength(150)]],
    });
    this.titulo = this.formulario.controls["titulo"];
    this.estado = this.formulario.controls["estado"];
    this.descripcion = this.formulario.controls["descripcion"];
  }


  
  actualizar(event:Event){
    event.preventDefault();
    

    let lista:Array<DatosFormulario>=[{
      titulo:this.formulario.get('titulo')?.value,
      estado:this.formulario.get('estado')?.value,
      descripcion:this.formulario.get('descripcion')?.value,
    }];

    this.servicio.guardarDatosActualizados(lista);
    alert("su nota ha sido actualizada");
    
  }

  get f(){
    return this.formulario.controls;

  }

  save(event:Event){
    event.preventDefault();
    if(this.formulario.valid){
      const value = this.formulario.value;
      console.log(value);

    }
  }
  

}
