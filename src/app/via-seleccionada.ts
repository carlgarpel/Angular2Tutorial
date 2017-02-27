import {Injectable} from '@angular/core';
import { Via } from './via';


@Injectable()
export class ViaSeleccionada{

    viaSeleccionada:Via;

    constructor(){}

    addVia(via:Via){
        this.viaSeleccionada = via;
       
    }

    getVia(){
       
        return this.viaSeleccionada;
       // this.logger.log("seleccionado");
    }

}