import { NgModule }      from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { FormsModule }   from '@angular/forms';

import { AppComponent }  from './app.component';


import { HeaderComponent } from './header.component';
import { FooterComponent } from './footer.component';
import { ArticleComponent } from './article.component';
import { Logger } from './logger.service';
import { ViaSeleccionada } from './via-seleccionada';


import { NavComponent } from './nav.component';

@NgModule({

  imports: [

    BrowserModule,

    FormsModule
   

  ],

  declarations: [

    AppComponent,

   
    FooterComponent,
    HeaderComponent,
    NavComponent,
    ArticleComponent


  ],
  providers: [ViaSeleccionada],

  bootstrap: [ AppComponent ]

})

export class AppModule { }