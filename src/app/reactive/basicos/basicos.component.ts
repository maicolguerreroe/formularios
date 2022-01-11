import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {
  // miFormulario: FormGroup = new FormGroup({
  //   'nombre': new FormControl('Rtx 40080t'),
  //   'precio': new FormControl(180),
  //   'existencias': new FormControl(20),

  // });


  miFormulario: FormGroup = this.fb.group({
    nombre: [, [Validators.required, Validators.minLength(3)]],
    precio: [, [Validators.required, Validators.min(0)]],
    existencias: [, [Validators.required, Validators.min(0)]]

  });

  ngOnInit(): void {
    this.miFormulario.reset({
      nombre: 'RTX 4080',
      precio: 1000,
      // existencias: 200
    })
  }
  constructor(private fb: FormBuilder) { }

  campoValido(nombre: string) {
    return this.miFormulario.controls?.[nombre]?.['errors']
      && this.miFormulario.controls?.[nombre]?.['touched']
  }
  guardar() {
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    console.log(this.miFormulario.value);
    this.miFormulario.reset();

  }

}
