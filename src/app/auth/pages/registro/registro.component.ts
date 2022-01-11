import { ValidatorService } from './../../../shared/validator/validator.service';
import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { emailPattern, nombreApellidoPattern, noPuedeSerStrider } from 'src/app/shared/validator/validaciones';
import { EmailValidatorService } from '../../../shared/validator/email-validator.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: [
  ]
})
export class RegistroComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.validatorService.nombreApellidoPattern)]],
    email: ['', [Validators.required, Validators.pattern(this.validatorService.emailPattern)], [this.emailValidatorService]],
    username: ['', [Validators.required, this.validatorService.noPuedeSerStrider]],
    password: [''],
    password2: ['']
  });

  constructor(private fb: FormBuilder,
    private validatorService: ValidatorService,
    private emailValidatorService: EmailValidatorService) { }

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'Maicol Guerrero',
      email: 'test.j@gmail.com',
      username: 'maicol.guerrero',
      password: '123456',
      password2: '123456'
    });
  }

  // emailErrorMsg: string = '';

  get emailErrorMsg(): string {
    const errors = this.miFormulario.get('email')?.errors;
    if (errors?.['required']) {
      return 'EL email es obligatorio.';
    }
    else if (errors?.['emailTomado']) {
      return 'EL email ya existe.';
    }
    else if (errors?.['pattern']) {
      return 'EL email no tiene un formato válido.';
    }
    return '';
  }

  campoNoValido(campo: string) {
    return this.miFormulario.get(campo)?.invalid
      && this.miFormulario.get(campo)?.touched;
  }

  submitFormulario() {
    console.log(this.miFormulario.value);
    this.miFormulario.markAllAsTouched();
  }

}
