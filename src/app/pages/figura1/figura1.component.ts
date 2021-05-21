import { Component, OnInit } from '@angular/core';
import {FormGroup,AbstractControl,FormBuilder,Validators} from '@angular/forms';
import { BrowserTransferStateModule } from '@angular/platform-browser';
import{DatosFormulario} from '../../datos-formulario';
import{ServicioService} from '../../servicio.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-figura1',
  templateUrl: './figura1.component.html',
  styleUrls: ['./figura1.component.scss']
})


export class Figura1Component implements OnInit {

  formulario:FormGroup;
  titulo:AbstractControl;
  estado:AbstractControl;
  descripcion:AbstractControl;
  Lista1:Array<DatosFormulario> = [];
  Lista2:Array<DatosFormulario> = [];
  Lista3:Array<DatosFormulario> = [];


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

  ngOnInit(): void {
  }
  
  Crear(){
    
    
    let lista:Array<DatosFormulario>=[{
      titulo:this.formulario.get('titulo')?.value,
      estado:this.formulario.get('estado')?.value,
      descripcion:this.formulario.get('descripcion')?.value
    }];
    
    this.servicio.guardarDatos(lista).subscribe(datos=>{
      console.log(datos);
    });
    
    
    alert("su nota ha sido creada con exito para visualizar las notas presione el boton ver notas");
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
