import { FormControl } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent implements OnInit {

  miFormulario: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.minLength(3)]],
    favoritos: this.fb.array([
      ['Metal Gear'],
      ['garena free fire']
    ], Validators.required)
  });

  nuevoFavorito: FormControl = this.fb.control('', Validators.required);
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    console.log(this.miFormulario.get('favoritos')?.value);

  }
  campoValido(nombre: string) {
    return this.miFormulario.controls?.[nombre]?.['errors'] &&
      this.miFormulario.controls?.[nombre]?.['touched']
  }
  get favoritosArray() {
    return this.miFormulario.get('favoritos') as FormArray;
  }
  agregarFavorito() {
    if (this.nuevoFavorito.invalid) { return; }
    //this.favoritosArray.push(new FormControl(this.nuevoFavorito.value, Validators.required));
    this.favoritosArray.push(this.fb.control(this.nuevoFavorito.value, Validators.required))

    this.nuevoFavorito.reset();
  }
  guardar() {
    console.log(this.miFormulario.value);
    if (this.miFormulario.invalid) {
      this.miFormulario.markAllAsTouched();
      return;
    }
    this.miFormulario.reset();
  }

  borrar(indice: number) {
    this.favoritosArray.removeAt(indice);
  }

}
