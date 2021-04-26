import { Injectable } from '@angular/core';

import { promise } from 'selenium-webdriver';


export interface cv {
  id?: number;
  idioma?: string;
  categoria?: string;
}

@Injectable({
  providedIn: 'root'
})
export class InformacionService {

  arrCv: cv[]

  constructor() { }

  getAllCv(): Promise<cv[]> {
    return new Promise((resolve, rejects) => {
      resolve(this.arrCv)
    })


  }

  getPostByCategory(pCategoria: string): Promise<cv[]> {
    return new Promise<cv[]>((resolve, reject) => {
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
