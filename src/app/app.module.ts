import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { FichaViaComponent } from './ficha-via.component';

@NgModule({

  imports: [

    BrowserModule,

    FormsModule

  ],

  declarations: [

    AppComponent,

    FichaViaComponent

  ],

  bootstrap: [ AppComponent ]

})

export class AppModule { }