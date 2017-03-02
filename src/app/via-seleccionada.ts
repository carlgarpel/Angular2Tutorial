import {Injectable} from '@angular/core';
import { Via } from './via';
import {BehaviorSubject} from 'rxjs/BehaviorSubject';
import  { OnInit } from '@angular/core';



@Injectable()
export class ViaSeleccionada {

    item = new BehaviorSubject<Via>({id: 200, tipoVia: 'AVDA', nombreVia: 'ESTE', distrito: 7, seccion: 5, codigoPostal: '04003' });

    viaSeleccionada$ = this.item.asObservable();


    addVia(via:Via){
      
        this.item.next(via);
        
        console.log('addVia invocado ' + via.nombreVia + ' ' + via.id);

       
    }


}