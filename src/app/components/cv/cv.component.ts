import { Component, OnInit } from '@angular/core';
import { cv, InformacionService } from 'src/app/services/informacion.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  ponerCv: cv[]
  listaCategory: string[]

  constructor(private informacionService: InformacionService) { }

  ngOnInit(): void {
  }

  async onChange($event) {
    try {
      if ($event.target.value === 'todos') {
        this.ponerCv = await this.informacionService.getAllCv()
      } else {
        this.ponerCv = await this.informacionService.getPostByCategory($event.target.value)
      }
    } catch (error) {
      console.log(error);

    }

  }
}
