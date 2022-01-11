import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent implements OnInit {

  @ViewChild('miFormulario') miFormulario!: NgForm;

  initForm = {
    producto: 'RTx-40t',
    precio:10,
    existencias:100
  }

  constructor() { }

  ngOnInit(): void {
  }

  guardar() {
    // console.log(this.miFormulario);
    console.log('Posteo correcto');
    this.miFormulario.resetForm();

  }
  nombreValido(): boolean {
    return this.miFormulario?.controls?.['producto']?.['invalid'] && this.miFormulario?.controls?.['producto']?.['touched'];
  }
  precioValido(): boolean {
    console.log(this.miFormulario?.controls?.['precio']?.['touched'] && this.miFormulario?.controls?.['precio']?.['value'] < 0);
    console.log(this.miFormulario);

    return this.miFormulario?.controls?.['precio']?.['touched'] && this.miFormulario?.controls?.['precio']?.['value'] < 0;
  }
}
