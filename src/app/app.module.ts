import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';

import { FichaViaComponent } from './ficha-via.component';
import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';



import { NavComponent } from './nav.component';

@NgModule({

  imports: [

    BrowserModule,

    FormsModule
   

  ],

  declarations: [

    AppComponent,

    FichaViaComponent,
    FooterComponent,
    HeaderComponent,
    NavComponent


  ],

  bootstrap: [ AppComponent ]

})

export class AppModule { }