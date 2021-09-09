import { Component, OnInit } from '@angular/core';
import { Tecnologias, TecnologiasService } from 'src/app/services/tecnologias.service';


@Component({
  selector: 'app-hardskill',
  templateUrl: './hardskill.component.html',
  styleUrls: ['./hardskill.component.scss']
})
export class HardskillComponent implements OnInit {

  ponerTec: Tecnologias[];
  listaCategory: string[];

  constructor(private tecnologiasServices: TecnologiasService) { }

  async ngOnInit() {

    this.ponerTec = await this.tecnologiasServices.getAllTec();

    this.listaCategory = await this.tecnologiasServices.getCategory();





  }
  async onChange($event) {
    try {
      if ($event.target.value === 'fullstack') {
        this.ponerTec = await this.tecnologiasServices.getAllTec()
      } else {
        this.ponerTec = await this.tecnologiasServices.getTecByCategory($event.target.value)
      }
    } catch (error) {
      console.log(error);

    }

  }

}
