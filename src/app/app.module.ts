import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { MeuPrimeiroComponent } from './primeiro-contato/meu-primeiro.component';
import {MeuSegundoComponent} from './meu-segundo/meu-segundo.component'

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, 
                  HelloComponent, 
                  MeuPrimeiroComponent,
                  MeuSegundoComponent
                   ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
