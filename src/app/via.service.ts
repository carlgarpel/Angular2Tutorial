import {Injectable} from '@angular/core';
import {Via} from './via';

@Injectable()
export class ViaSeleccionada{	

	 viaSelecionada: Via={id: 10, tipoVia: 'CALLE', nombreVia: 'ALTAMIRA', distrito: 7, seccion: 1, codigoPostal: '04006' };	

	constructor(){}
	
		
		 public getViaSeleccionada(){
        
       	 return this.viaSelecionada;
   		 }	
		setViaSeleccionada(via: Via){
        
        	this.viaSelecionada=via;
        	console.log('set via '+ this. getViaSeleccionada().nombreVia);
    	}	
}