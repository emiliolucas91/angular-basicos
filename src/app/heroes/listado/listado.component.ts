import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Tor'];
  heroeBorrado: string = "";

  borrarHeroes() {
    this.heroeBorrado = this.heroes.shift() || "";
    console.log('Borrando...');
  }
}
