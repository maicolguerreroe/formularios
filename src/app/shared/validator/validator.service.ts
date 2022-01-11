import { FormControl, ValidationErrors } from '@angular/forms';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidatorService {
  public emailPattern: string = "^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$";
  public nombreApellidoPattern: string = '([a-zA-Z]+) ([a-zA-Z]+)';

  constructor() { }

  noPuedeSerStrider(control: FormControl): ValidationErrors | null {
    const valor = control.value?.trim().toLowerCase();
    if (valor === 'strider') {
      return {
        noStrider: true
      }
    }
    return null;
  }

}
