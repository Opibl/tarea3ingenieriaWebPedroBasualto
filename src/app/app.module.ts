import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Figura1Component } from './pages/figura1/figura1.component';
import {ReactiveFormsModule} from '@angular/forms';
import { EditarComponent } from './pages/editar/editar.component';
import { Figura2Component } from './pages/figura2/figura2.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    Figura1Component,
    EditarComponent,
    Figura2Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
