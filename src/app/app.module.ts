import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import {MenuPrincipal} from './menu-principal/menu-principal.component';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent,
                  MenuPrincipal],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
