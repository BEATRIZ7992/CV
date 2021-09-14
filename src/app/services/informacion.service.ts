import { Injectable } from '@angular/core';

import { informacion } from '../db_cv/cv.db';



export interface Informacion {
  id?: number,
  nombre?: string,
  categoria?: string,
  imagen?: string,
  link?: string


}


@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  arrCv: Informacion[];


  constructor() {

    if (localStorage.getItem('arr_cv')) {
      const strArr = localStorage.getItem('arr_cv');
      this.arrCv = JSON.parse(strArr);
    } else {
      this.arrCv = informacion;

    }
  }

  getAllCv(): Promise<Informacion[]> {
    return new Promise((resolve, rejects) => {
      resolve(this.arrCv)
    })


  }

  getPostByCategory(pCategoria: string): Promise<Informacion[]> {
    return new Promise<Informacion[]>((resolve, reject) => {
      const arraFiltrado = [];

      for (let c of this.arrCv) {
        if (c.categoria === pCategoria) {
          arraFiltrado.push(c)
        }

      }
      resolve(arraFiltrado)
      console.log(arraFiltrado)
    })
  }

  getCategory(): string[] {
    const nuevoArr = this.arrCv.map(arrCategory => arrCategory.categoria);
    return [...new Set(nuevoArr)]
  }



}
