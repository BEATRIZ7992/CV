import { Injectable } from '@angular/core';
import { tecnologias } from '../db/hardskill.db';

export interface Tecnologias {
  id?: number;
  nombre?: string;
  categoria?: string;
  imagen?: string;
}


@Injectable({
  providedIn: 'root'
})


export class TecnologiasService {

  arrTc: Tecnologias[]

  constructor() {
    if (localStorage.getItem('arr_tec')) {
      const strArr = localStorage.getItem('arr_tec');
      this.arrTc = JSON.parse(strArr);
    } else {
      this.arrTc = tecnologias;

    }
  }


  getAllTec(): Promise<Tecnologias[]> {
    return new Promise((resolve, reject) => {
      resolve(this.arrTc);


    })
  }


  getTecByCategory(pCategoria: string): Promise<Tecnologias[]> {
    return new Promise<Tecnologias[]>((resolve, reject) => {
      const arraFiltrado = [];

      for (let tec of this.arrTc) {
        if (tec.categoria === pCategoria) {
          arraFiltrado.push(tec)
        }

      }
      resolve(arraFiltrado)
      console.log(arraFiltrado)
    })
  }

  getCategory(): string[] {
    const nuevoArr = this.arrTc.map(arrCategory => arrCategory.categoria);
    return [...new Set(nuevoArr)]
  }
}

