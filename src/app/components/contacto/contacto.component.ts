import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  formulario: FormGroup

  constructor(


  ) {

    this.formulario = new FormGroup({

      nombre: new FormControl('', [
        Validators.required
      ]),

      apellidos: new FormControl('', [

        Validators.required
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,4}$/)
      ]),

      telefono: new FormControl('',
        [
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(20)

        ]),
      direccion: new FormControl('', [
        Validators.required


      ]),

      password: new FormControl('', [
        Validators.required,
        Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{4,12}$/)
      ]),

      password_2: new FormControl(),

      bodas: new FormControl(),
      eventosnocturnos: new FormControl(),
      producto: new FormControl(),
      publicidad: new FormControl(),
      paisaje: new FormControl(),
      retrato: new FormControl(),
      modelos: new FormControl(),
      artistica: new FormControl(),
      documental: new FormControl(),
      deportes: new FormControl()



    }, [this.passwordValidator])
  }

  ngOnInit(): void {
  }


  passwordValidator(form: FormGroup) {
    const passwordValue = form.get('password').value;
    const passwordRepeatValue = form.get('password_2').value;

    if (passwordValue === passwordRepeatValue) {
      return null;
    } else { return { passwordValidator: true } }

  }
  checkValidator(controlName, validatorName) {
    return this.formulario.get(controlName).hasError(validatorName) && this.formulario.get(controlName).touched;



  }
}
