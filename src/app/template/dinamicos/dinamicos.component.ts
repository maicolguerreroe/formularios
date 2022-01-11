import { Component } from '@angular/core';

interface Persona{
  nombre:string;
  favoritos:Favorito[];
}
interface Favorito{
  id:number;
  nombre:string;
}

@Component({
  selector: 'app-dinamicos',
  templateUrl: './dinamicos.component.html',
  styles: [
  ]
})
export class DinamicosComponent {

  nuevoJuego:string='';

  persona:Persona={
    nombre: 'Maicol',
    favoritos:[
      { id:1, nombre:'Metal Gear'},
      { id:2, nombre:'Garena free fire'}
    ]
  }

  guardar(){
    console.log('Formulario posteado');
  }
  eliminar(indice:number){
    this.persona.favoritos.splice(indice,1);
  }
  agregar(){
    const nuevoFavorito:Favorito={
      id:this.persona.favoritos.length+1,
      nombre:this.nuevoJuego
    };

    this.persona.favoritos.push({...nuevoFavorito});
    this.nuevoJuego='';
  }

}
